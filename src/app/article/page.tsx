import BannerArticle from "@/components/article/BannerArticle";
import FeatureArticle from "@/components/article/Feature/FeatureArticle";
import FooterArticle from "@/components/article/FooterArticle";
import RecentArticle from "@/components/article/Recent/RecentArticle";

function Blog() {
  return (
    <div className="flex flex-col w-full bg-black">
      <BannerArticle />
      <div className="flex w-full mt-[72px] p-10  gap-12 flex-col">
        <div className="flex-1">
          <FeatureArticle />
        </div>
        <div className="flex-1">
          <RecentArticle />
        </div>
      </div>

      {/* <FooterArticle /> */}
    </div>
  );
}

export default Blog;
