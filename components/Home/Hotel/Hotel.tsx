import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import HotelSlider from "../Hotel/HotelSlider";

const Hotel = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto">
        {/* Center the heading */}
        <div className="text-center">
          <SectionHeading heading="Best Hotels & Accommodations" />
        </div>

        {/* Hotel slider */}
        <div className="mt-[3rem] w-full">
          <HotelSlider />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
