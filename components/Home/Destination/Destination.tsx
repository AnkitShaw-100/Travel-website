import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import DestionationSlider from './DestionationSlider';

const Destination = () => {
  return (
    <div className="pt-20 pb-20 w-full bg-white">
      {/* Section Heading */}
      <div className="w-[90%] xl:w-[80%] mx-auto text-center">
        <SectionHeading heading="Exploring Popular Destination" />
        <p className="text-gray-500 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Carousel Section */}
      <div className="mt-14 w-[90%] xl:w-[80%] mx-auto">
        <DestionationSlider />
      </div>
    </div>
  );
};

export default Destination;
