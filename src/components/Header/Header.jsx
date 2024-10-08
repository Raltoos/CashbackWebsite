import { useState } from 'react';
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = ["Home", "Products", "Services", "About Us", "Contact"];

  return (
    <div className="w-full sticky top-0 z-10 overflow-hidden">
      <div className="bg-white h-auto py-2 sm:h-[100px] flex flex-wrap items-center justify-between gap-2 sm:gap-5 px-2 sm:px-5 border-b border-gray-200">
        <div className="flex items-center gap-2 sm:gap-5">
          <RxHamburgerMenu
            size="25px"
            className="cursor-pointer hover:scale-95 block"
            onClick={toggleDrawer}
          />
          <img src={logo} alt="" className="w-[120px] sm:w-[180px] h-[60px] sm:h-[80px]" />
        </div>

        {/* Adjusted Search Bar */}
        <div className="order-3 sm:order-2 w-full sm:w-auto flex-grow sm:flex-grow-0 mt-2 sm:mt-0">
          <SearchBar />
        </div>

        <div className="order-2 sm:order-3 flex gap-2 sm:gap-5">
          <button className="rounded-2xl text-[#6c5dd3] text-xs sm:text-sm border border-[#6c5dd3] px-4 sm:px-10 py-2 sm:py-3">
            Log In
          </button>
          <button className="bg-[#6c5dd3] rounded-2xl text-white text-xs sm:text-sm px-4 sm:px-10 py-2 sm:py-3">
            Sign Up
          </button>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-5">
          <button
            onClick={toggleDrawer}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <IoMdClose size={24} />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Header;
