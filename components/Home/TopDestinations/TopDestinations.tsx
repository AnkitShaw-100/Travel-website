'use client';
import React from 'react';
import Image from 'next/image';

const destinations = [
    {
        name: "Bali, Indonesia",
        image: "/images/n1.jpg",
        description: "Tropical beaches, vibrant culture, and beautiful temples.",
    },
    {
        name: "Paris, France",
        image: "/images/n2.jpg",
        description: "Romantic streets, iconic Eiffel Tower, and world-class cuisine.",
    },
    {
        name: "Kyoto, Japan",
        image: "/images/n3.jpg",
        description: "Historic shrines, cherry blossoms, and traditional tea houses.",
    },
    {
        name: "Santorini, Greece",
        image: "/images/n4.jpg",
        description: "White-washed buildings, blue domes, and stunning sunsets.",
    },
    {
        name: "Cape Town, South Africa",
        image: "/images/d1.jpg",
        description: "Majestic Table Mountain, vibrant waterfront, and rich history.",
    },
    {
        name: "New York City, USA",
        image: "/images/d2.jpg",
        description: "Skyscrapers, Central Park, and a city that never sleeps.",
    },
];

const TopDestinations = () => {
    return (
        <div className="min-h-screen bg-gray-100 pt-20 pb-16 px-6">
            <h2 className="text-center text-3xl font-bold mb-10">Top Travel Destinations</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {destinations.map((dest, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <div className="relative w-full h-56">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{dest.name}</h3>
                            <p className="text-gray-600 text-sm">{dest.description}</p>
                            <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDestinations;
