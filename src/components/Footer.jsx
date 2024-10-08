import { FaFacebookF, FaInstagram, FaYoutube, FaChrome } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { GrGooglePlay, GrApple } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#2C3153] text-white py-8 flex flex-col p-5">
      <div className="container w-full mx-auto px-4 flex flex-wrap justify-between">
        {/* About Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Extension</li>
          </ul>
        </div>

        {/* Stores & Brands Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Stores & Brands</h2>
          <ul className="space-y-2">
            <li>iHerb</li>
            <li>Wish</li>
            <li>Udemy</li>
            <li>Levi's</li>
            <li>Macy's</li>
            <li>Kiwi.com</li>
          </ul>
          <a href="#" className="text-blue-400">
            See all brands
          </a>
        </div>

        {/* Download Our App Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Download our app</h2>
          <p className="mb-4">Soon, will be available for iOS and Android</p>
          <div className="flex space-x-2 mb-4">
            <GrGooglePlay className="text-2xl" />
            <GrApple className="text-2xl" />
          </div>
          <p>Install google extension</p>
          <div className="flex space-x-2 items-center">
            <FaChrome className="text-2xl" />
            <button className="bg-gray-600 text-white px-3 py-1 rounded">
              Install now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="text-sm">
          <AiOutlineCopyright className="inline-block mr-1" />
          CashbackWebsite.com 2024. All rights reserved
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
