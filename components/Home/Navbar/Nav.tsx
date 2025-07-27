import React from 'react';
import Link from 'next/link';
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from '../../../constant/constant';

const Nav = () => {
    return (
        <div className='transition-all duration-200 h-[12vh] z-[1000] fixed w-full'>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                        <TbAirBalloon className='w-6 h-6 text-white' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi</h1>
                </div>

                {/* Nav Links - Large Screen */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id} className="group">
                            <p className='relative text-white text-base font-medium w-fit block'>
                                {link.label}
                                <span className="block absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 bg-yellow-300 transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Mobile Section */}
                <div className='lg:hidden flex items-center space-x-4 group relative'>

                    {/* Book Now button */}
                    <button className='ms:px-12 md:py-2.5 px-6 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
