'use client';
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">Tripi</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your one-stop destination for planning memorable journeys. Discover beautiful places, helpful tips, and great deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
            <li><Link href="/destinations" className="hover:text-black transition-colors">Destinations</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-black transition-colors">Terms of Service</Link></li>
            <li><Link href="/faqs" className="hover:text-black transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black text-xl transition-colors"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black text-xl transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black text-xl transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-black text-xl transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-300 pt-6">
        &copy; {new Date().getFullYear()} Tripi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
