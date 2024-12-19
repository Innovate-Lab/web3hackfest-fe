import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams

export function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Use searchParams to get query parameters

  // Function to serialize an object into a query string
  //@ts-nocheck
  const serialize = (params: { [key: string]: any }) => {
    const str = [];
    for (const p in params) {
      if (params.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
      }
    }
    return str.join("&");
  };

  // Function to filter allowed query parameters
  const getAllowedParams = () => {
    return [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "mid",
      "gclid",
      "source",
      "fbclid",
    ];
  };

  // Function to filter the params and only include the allowed ones
  const filterAllowedParams = (params: { [key: string]: any }) => {
    const filteredParams = Object.keys(params)
      .filter((key) => getAllowedParams().includes(key.toLowerCase()))
      .reduce((obj, key) => {
        //@ts-ignore
        obj[key] = params[key];
        return obj;
      }, {});

    return filteredParams;
  };

  // Function to generate the URL with query string
  const generateUrlWithQueryString = (
    url: string,
    params: { [key: string]: any }
  ) => {
    if (Object.keys(params).length) {
      const filteredParams = filterAllowedParams(params);

      if (Object.keys(filteredParams).length) {
        if (url[0] !== "/") {
          url = `/${url}`;
        }

        const queryString = serialize(filteredParams);
        return `${url}?${queryString}`;
      }
    }
    return url;
  };

  // Function to push a route with query parameters
  const pushRouteWithQuery = (route: string, params = {}, options = {}) => {
    // If no params are passed, use the current query params from the searchParams
    const currentParams = Object.fromEntries(searchParams);

    if (!params || !Object.keys(params).length) {
      const routeWithParams = generateUrlWithQueryString(
        route,
        currentParams // Use the current query parameters
      );
      router.push(routeWithParams, options); // Navigate to the new route with query params
    } else {
      // Filter allowed params and merge with the new params
      const filteredParams = filterAllowedParams(currentParams);
      const allParams = {
        ...filteredParams,
        ...params,
      };

      // Generate the URL with the updated query parameters
      const routeWithParams = generateUrlWithQueryString(route, allParams);
      router.push(routeWithParams, options); // Navigate to the updated URL
    }
  };

  return { pushRouteWithQuery };
}
