import React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewSlider from './ReviewSlider';

const Review = () => {
    return (
        <div className="pt-20 pb-20 bg-blue-900 flex justify-center items-center">
            <div className="w-[90%] max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Text Section */}
                <div className="text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                        What our Customers are saying about us?
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
                        We always aim to deliver the best experience to our customers. Here what some of them have to say about our service and commitment to excellence.
                    </p>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-6">
                        <div>
                            <p className="text-3xl font-bold text-white">4.88</p>
                            <p className="text-white mb-2 text-sm">Overall Rating</p>
                            <div className="flex gap-1 text-yellow-400 text-lg">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="flex justify-center">
                    <div className="w-full max-w-[500px]">
                        <ReviewSlider />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;
