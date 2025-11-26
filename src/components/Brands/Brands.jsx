import React from "react";
import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/amazon_vector.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/star.png";
import brand7 from "../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";
const Brands = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-secondary text-center py-10">
        We helped thousand's of sales team{" "}
      </h1>
      <Marquee speed={100} autoFill={true} loop={0} className="gap-10">
        <div className="flex items-center justify-around gap-20 mb-10 ">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
