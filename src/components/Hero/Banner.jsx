// Banner.jsx

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
const Banner = () => {
  return (
    <div className="relative ">
      <Carousel infiniteLoop={true} autoPlay={true}>
        <div className="">
          <img className="z-100" src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
      <div className="absolute hidden md:flex md:top-110 md:left-22">
        <button className="btn bg-primary hover:border-black">
          Track your Parcel
        </button>
        <button className="btn btn-outline hover:bg-primary ml-4">
          Be a Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
