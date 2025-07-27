"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hotelsData } from "../../../data/data";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// Responsive configuration
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
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

const HotelSlider = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={5000}
            keyBoardControl
            swipeable={false}
            draggable={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="relative"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="px-2"
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
        >
            {hotelsData.map((hotel) => (
                <div key={hotel.id} className="m-3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[400px] flex flex-col">
                        <div className="relative">
                            <Image
                                src={hotel.image}
                                alt={hotel.name}
                                width={500}
                                height={300}
                                className="h-[200px] w-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 h-[56px] line-clamp-2 overflow-hidden">
                                {hotel.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2 h-[20px] overflow-hidden">{hotel.location}</p>
                            <div className="flex items-center justify-between mb-3 h-[20px]">
                                <div className="flex items-center gap-1">
                                    <FaStar className="w-4 h-4 text-yellow-400" />
                                    <span className="text-sm font-medium">{hotel.rating}</span>
                                    <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                                    <span className="text-sm text-gray-500">/night</span>
                                </div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HotelSlider;
