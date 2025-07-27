import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-slate-800 pt-16 pb-16 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="w-16 h-16 mt-2 text-white" />

      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>

      <p className="mt-3 text-white text-xs sm:text-sm text-center">
        Sign up and we&apos;ll send the best deals to you
      </p>

      {/* Input field and button */}
      <div className="w-full flex justify-center mt-8">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-6 py-3.5 bg-white text-sm rounded-lg shadow-md w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] outline-none"
        />
      </div>
    </div>
  );
};

export default Newsletter;
