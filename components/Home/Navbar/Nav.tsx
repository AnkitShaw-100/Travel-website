'use client';
import React from 'react';
import Link from 'next/link';
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from '../../../constant/constant';

const Nav = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-[1000] backdrop-blur-md bg-white/10 shadow-sm'>
            <div className='flex items-center h-[12vh] justify-between w-[90%] xl:w-[80%] mx-auto'>

                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'>
                        <TbAirBalloon className='w-6 h-6 text-white' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-gray-900 uppercase font-bold'>Tripi</h1>
                </div>

                {/* Nav Links - Large Screen */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id} className="group">
                            <p className='relative text-gray-800 text-base font-medium w-fit block'>
                                {link.label}
                                <span className="block absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 bg-rose-500 transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Mobile Section */}
                <div className='lg:hidden flex items-center space-x-4 group relative'>
                    <button className='px-6 py-2 text-white bg-rose-500 hover:bg-rose-600 transition-all duration-200 rounded-lg'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
