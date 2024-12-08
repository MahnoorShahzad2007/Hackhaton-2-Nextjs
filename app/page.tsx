import Head from "next/head";
import NavBar from "./components/navbar";
import HeroHeader from "./components/HeaderHero";
import AboutPage from "./components/about";
import FoodCategoryPage from "./components/foodCategory";
import WhyChooseUsPage from "./components/whyChoseUs";
import Abcd from './components/abcd.jsx'
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodtuck</title>
        
      </Head>

      <NavBar />

  <HeroHeader />

  <AboutPage/>
  
 
  <FoodCategoryPage/>

  <WhyChooseUsPage/> 
  
  <Abcd />

  <Footer/>

    </div>
  );
}
