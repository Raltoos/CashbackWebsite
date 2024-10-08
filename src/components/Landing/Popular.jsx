/* eslint-disable react/prop-types */
import Tile from "./Tile";
import india from "../../assets/india.svg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import img17 from "../../assets/img17.png";

const data = [
  {
    logo: img3,
    number: 2,
  },
  {
    logo: img1,
    number: 2,
  },
  {
    logo: img2,
    number: 3,
  },
  {
    logo: img4,
    number: 2,
  },
  {
    logo: img5,
    number: 2,
  },
  {
    logo: img6,
    number: 2,
  },
  {
    logo: img7,
    number: 2,
  },
  {
    logo: img8,
    number: 2,
  },
  {
    logo: img9,
    number: 2,
  },
  {
    logo: img10,
    number: 2,
  },
  {
    logo: img11,
    number: 2,
  },
  {
    logo: img12,
    number: 2,
  },
  {
    logo: img13,
    number: 2,
  },
  {
    logo: img14,
    number: 2,
  },
  {
    logo: img15,
    number: 2,
  },
  {
    logo: img16,
    number: 2,
  },
  {
    logo: img17,
    number: 2,
  },
];

const Popular = () => {
    return (
      <div className="w-full h-[800px] bg-[#F5F5F5] p-5 flex justify-center">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl mb-5">Popular Stores</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {data.map((item, key) => (
              key === 0 ? (
                <div className="col-span-2 row-span-1" key={key}>
                  <FeaturedTile logo={item.logo} number={item.number} />
                </div>
              ) : (
                <Tile logo={item.logo} number={item.number} key={key} />
              )
            ))}
          </div>
        </div>
      </div>
    );
  };

const FeaturedTile = ({ logo, number }) => {
  return (
    <div className="w-full h-full bg-purple-500 text-white rounded-lg flex flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" className="w-[150px] h-auto" />
        <div className="flex items-center">
          <img src={india} alt="flag" className="w-[40px] h-auto" />
        </div>
      </div>
      <div className="mt-5 flex flex-col items-start">
        <span className="text-2xl font-semibold">{number}%</span>
        <span className="text-sm">Cashback</span>
      </div>
      <div className="flex justify-end mt-auto">
        <button className="bg-white text-purple-500 px-4 py-2 rounded-lg flex items-center">
          Shop now <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Popular;
