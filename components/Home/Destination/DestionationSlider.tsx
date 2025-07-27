"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationData } from "../../../data/data";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Destination type
type Destination = {
  id: number;
  image: string;
  country: string;
  travelers: number;
};

// Custom Dot Component
const CustomDot = ({
  onClick,
  active,
}: {
  onClick?: () => void;
  active?: boolean;
}) => (
  <li
    onClick={onClick}
    className={`w-3 h-3 rounded-full border-2 mx-1 cursor-pointer transition-all duration-300
      ${active ? "bg-black border-black" : "border-gray-400 bg-transparent"}`}
  />
);

// Responsive configuration
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1324, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DestionationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      keyBoardControl
      swipeable={false}
      draggable={false}
      showDots
      renderDotsOutside
      customDot={<CustomDot />}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="relative"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="flex justify-center items-center gap-2 mt-6"
      customLeftArrow={
        <button
          aria-label="Previous Slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>
      }
      customRightArrow={
        <button
          aria-label="Next Slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      }
      itemClass="px-2"
    >
      {destinationData.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={data.image}
              alt={data.country}
              width={500}
              height={500}
              className="h-[300px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-semibold">{data.country}</h1>
              <p className="text-sm">{Number(data.travelers)} travelers</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DestionationSlider;
