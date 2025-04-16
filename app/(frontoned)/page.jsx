import HeroSection from "@/components/herosection/herosection";
import { ContactUs } from "@/components/ContactUs/contactus";
import SubscribCard from "@/components/partners/partners";
import AboutUsHome from "@/components/aboutushomepage/aboutushomeage";
import Services from "@/components/Services/services";
import WhyChooseUs from "@/components/whytochooseus/whytochooseus";
import Calculator from "@/components/calculator/calculator";
import Blog from "@/components/blogs/blog";
import Testimonials from "@/components/testimonials/testimonials";
import ToolsHome from "@/components/tools/tools";
import { ConnectDB } from "@/lib/db/ConnectDB";
import SiteSettingsModel from "@/lib/models/SiteSetting";
import LatestNews from "@/components/latestnews";
import { FAQ } from "@/components/faq/faq";
import BseChartSection from "@/components/bsechartSection/bsechartSection";
import SipCalculator from "@/components/sipcalculatort";
import AdvisorCategory from "@/components/AdvisoryCategory/advisorycategory";
import Features from "@/components/features/features";
// import SipCalculator from "@/components/sipcalculatort";



// export async function getSiteData() {
//     await ConnectDB();
//     const data = await SiteSettingsModel?.findOne({}).select('-_id');
//     return data ? data.toObject() : {};
// }

export default async function Page() {
  // const sitedata = await getSiteData();
  // const servicedata = await getServiceData();
  // const testimonials=await getTestimonials();
  // const blogs=await getBlogs();
  // console.log(blogs)
  return (
    <div className="">
        <main className="overflow-x-hidden">
          <HeroSection/>
          <Features/>
          <AdvisorCategory/>
          <WhyChooseUs/>
          <SipCalculator/>
          <BseChartSection/>
          <SubscribCard/>
          <Testimonials/>
          <FAQ/>
        </main>
    </div>
  );
}