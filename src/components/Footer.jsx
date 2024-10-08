import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";
import { SiGooglechrome } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#2C3153] text-white py-12">
      <div className="container w-11/12 mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Extension</li>
            </ul>
          </div>

          {/* Stores & Brands Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Stores & Brands</h2>
            <ul className="space-y-2 text-gray-300">
              <li>iHerb</li>
              <li>Wish</li>
              <li>Udemy</li>
              <li>Levi's</li>
              <li>Macy's</li>
              <li>Kiwi.com</li>
            </ul>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">
              See all brands
            </a>
          </div>

          {/* Download Our App Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Download our app</h2>
            <p className="mb-4 text-gray-300">Soon, will be available for iOS and Android</p>
            <div className="flex space-x-4 mb-6">
              <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md">
                <FaGooglePlay className="mr-2" />
                <span>Google Play</span>
              </button>
              <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md">
                <AiFillApple className="mr-2" />
                <span>App Store</span>
              </button>
            </div>
            <p className="mb-2 text-gray-300">Install google extension</p>
            <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md">
              <SiGooglechrome className="mr-2" />
              <span>Install now</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © Bonazon.com 2024. All rights reserved
          </p>
          <div className="flex space-x-6">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 