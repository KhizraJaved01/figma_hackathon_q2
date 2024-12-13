import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Products/FeaturedProducts";
import LatestProducts from "./Products/LatestProducts";
import OfferProducts from "./Products/Offers";
import { BannerPage } from "./Products/BannerPage";
import TrendingProducts from "./Products/TrendingProducts";
import DiscountItems from "./Products/DiscountItems";
import Categories from "./Products/Categories";
import Banner from "./Products/Banner2";
import Blogs from "./Products/LatestBlog";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestProducts/>
      <OfferProducts/>
      <BannerPage/>
      <TrendingProducts/>
      <DiscountItems/>
      <Categories/>
      <Banner/>
      <Blogs/>
      <Footer/>
    </div>
  );
}