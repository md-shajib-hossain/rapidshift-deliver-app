import React from "react";
import Banner from "../../components/Hero/Banner";
import HowItWorks from "../../components/Hero/HowItWorks";
import OurServices from "../../components/OurServices/OurServices";
import Brands from "../../components/Brands/Brands";
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
      {/* <Brand2></Brand2> */}
      {/* it was made by swiper js */}
    </>
  );
};

export default Home;
