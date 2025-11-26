import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl text-secondary font-bold">How It Works</h1>
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* box 1  */}
        <div className=" bg-white rounded-2xl p-8 space-y-5">
          <span>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-delivery-van-transportation-smashingstocks-outline-color-smashing-stocks.png"
              alt="external-delivery-van-transportation-smashingstocks-outline-color-smashing-stocks"
            />
          </span>
          <h1 className="text-2xl font-semibold text-secondary">
            Booking Pick & Drop
          </h1>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* box 2 */}
        <div className=" bg-white rounded-2xl p-8 space-y-5">
          <span>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/cash-in-hand.png"
              alt="cash-in-hand"
            />
          </span>
          <h1 className="text-2xl font-semibold text-secondary">
            Cash On Delivery
          </h1>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* box 3 */}
        <div className=" bg-white rounded-2xl p-8 space-y-5">
          <span>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/parakeet/48/hub.png"
              alt="hub"
            />
          </span>
          <h1 className="text-2xl font-semibold text-secondary">
            Delivery Hub
          </h1>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* box-4 */}
        <div className=" bg-white rounded-2xl p-8 space-y-5">
          <span>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/reviewer-female.png"
              alt="reviewer-female"
            />
          </span>
          <h1 className="text-2xl font-semibold text-secondary">
            Booking SME & Corporate
          </h1>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
