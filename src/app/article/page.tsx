import BannerArticle from "@/components/article/BannerArticle";
import FeatureArticle from "@/components/article/Feature/FeatureArticle";
import RecentArticle from "@/components/article/Recent/RecentArticle";

function Blog() {
  return (
    <div className="flex flex-col w-full bg-black"
  >
      <BannerArticle />
      <div className="flex w-full  p-10   flex-col" 
        style={{
          background: 'linear-gradient(to bottom, #001B54, black)',
        }}>
        
        <div className="flex-1">
          <RecentArticle />
        </div>
      </div>

      {/* <FooterArticle /> */}
    </div>
  );
}

export default Blog;
