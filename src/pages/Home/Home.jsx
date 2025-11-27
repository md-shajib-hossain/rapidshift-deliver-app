import React from "react";
import Banner from "../../components/Hero/Banner";
import HowItWorks from "../../components/Hero/HowItWorks";
import OurServices from "../../components/OurServices/OurServices";
import Brands from "../../components/Brands/Brands";
import Feature from "../../components/Feature/Feature";
import Reviews from "../../components/Reviews/Reviews";
// import Brand2 from "../../components/Brands/Brand2";

const Home = () => {
  return (
    <>
      <Banner></Banner>

      <div className="md:p-20 p-10">
        <HowItWorks></HowItWorks>
      </div>
      <div className="max-w-6xl mx-auto">
        <OurServices></OurServices>
      </div>
      <Brands></Brands>
      <Feature></Feature>

      <Reviews></Reviews>
    </>
  );
};

export default Home;
