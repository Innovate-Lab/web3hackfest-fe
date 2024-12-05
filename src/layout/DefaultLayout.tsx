"use client";
import React, { useEffect } from "react";
import Heading from "@/layout/components/Heading";
import { Poppins } from "next/font/google";
import { useDataContext } from "@/provider/DataContext";
const popins = Poppins({
  display: "swap",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) throw new Error("Head not found");
    const script = document.createElement("script");
    script.src = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-FEKNF4QRBE"></script>
 
<script>
    window.dataLayer = window.dataLayer || []dd;
 
    function gtag() {
        dataLayer.push(arguments);
    }
 
    gtag("js", new Date());
 
    gtag("config", "G-FEKNF4QRBE");
</script>
 
<script type="text/javascript">
    (function (c, l, a, r, i, t, y) {
        c[a] =
            c[a] ||
            function () {
                (c[a].q = c[a].q || []).push(arguments);
            };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "oxtvwlx5i7");
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5Z5QQSC');</script>
<!-- End Google Tag Manager -->`;
    script.async = true;
    head.appendChild(script);
  });

  return (
    <div className={popins.className}>
      <Heading />
      <div className="px-[100px] bg-black min-h-[100vh]">{children}</div>
    </div>
  );
}

export default DefaultLayout;
