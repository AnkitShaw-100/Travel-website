"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from '../../../data/data';

const ReviewSlider = () => {
    return (
        <div className="flex justify-center items-center">
            <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[85%] sm:w-[360px] h-[220px] sm:h-[280px]"
            >
                {reviewData.map((review, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="p-6 bg-white rounded-xl shadow-xl flex flex-row-reverse items-center h-full gap-5">
                            {/* Image */}
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full border-4 border-blue-500"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                                <p className="text-sm text-blue-500 mb-1">{review.designation}</p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-2 text-yellow-400">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                        <span key={i}>☆</span>
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {review.review}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReviewSlider;
