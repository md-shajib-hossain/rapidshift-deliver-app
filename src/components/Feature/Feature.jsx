import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";
const Feature = () => {
  return (
    <>
      <div className="w-full my-5 bg-white/70 rounded-2xl shadow-sm py-4  md:px-8 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10">
        {/* Left Image */}
        <div className="w-[200px] h-[200px] flex justify-center">
          <img
            src={img1} // replace with your actual image path
            alt="Parcel Tracking Illustration"
            className="w-72 md:w-80 object-contain"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block ml-10 items-center mt-4 border-r-2 border-dashed border-gray-300 h-40"></div>

        {/* Horizontal Divider for mobile */}
        <div className="block md:hidden border-t-2 border-dashed border-gray-300 w-full"></div>

        {/* Right Text Content */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl font-bold text-secondary mb-3">
            Live Parcel Tracking
          </h2>
          <p className="text-gray-600 w-full leading-relaxed">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="w-full my-5 bg-white/70 rounded-2xl shadow-sm p-4 md:py-6 md:px- flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10">
        {/* Left Image */}
        <div className="w-[200px] h-[200px] flex justify-center">
          <img
            src={img2} // replace with your actual image path
            alt="Parcel Tracking Illustration"
            className="w-72 md:w-80 object-contain"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block ml-10 items-center mt-4 border-r-2 border-dashed border-gray-300 h-40"></div>

        {/* Horizontal Divider for mobile */}
        <div className="block md:hidden border-t-2 border-dashed border-gray-300 w-full"></div>

        {/* Right Text Content */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl font-bold text-secondary mb-3">
            100% Safe Delivery
          </h2>
          <p className="text-gray-600 w-full leading-relaxed">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      {/* card3  */}
      <div className="w-full my-5 bg-white/70 rounded-2xl shadow-sm p-6 md:p-4 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10">
        {/* Left Image */}
        <div className="w-[200px] h-[200px] flex justify-center">
          <img
            src={img1} // replace with your actual image path
            alt="Parcel Tracking Illustration"
            className="w-72 md:w-80 object-contain"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block ml-10 items-center mt-4 border-r-2 border-dashed border-gray-300 h-40"></div>

        {/* Horizontal Divider for mobile */}
        <div className="block md:hidden border-t-2 border-dashed border-gray-300 w-full"></div>

        {/* Right Text Content */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl font-bold text-secondary mb-3">
            Live Parcel Tracking
          </h2>
          <p className="text-gray-600 w-full leading-relaxed">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
