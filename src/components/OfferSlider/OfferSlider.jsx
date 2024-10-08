import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import banner6 from "../../assets/banner6.png";
import banner7 from "../../assets/banner7.png";
import banner8 from "../../assets/banner8.png";
import banner9 from "../../assets/banner9.png";

const offers = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  const visibleOffers = () => {
    let visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % offers.length;
      visibleItems.push(offers[index]);
    }
    return visibleItems;
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleOffers().map((offer, index) => (
            <div key={index} className="w-full md:w-1/3 p-2 flex-shrink-0">
              <img
                src={offer}
                alt={`Offer ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 ml-2 focus:outline-none"
      >
        <FaChevronLeft className="text-gray-800" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 mr-2 focus:outline-none"
      >
        <FaChevronRight className="text-gray-800" size={24} />
      </button>
    </div>
  );
};

export default OfferSlider;
