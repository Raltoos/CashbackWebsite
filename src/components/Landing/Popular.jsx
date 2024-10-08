/* eslint-disable react/prop-types */
import Tile from "./Tile";
import india from "../../assets/india.svg";
import data from "./data";

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
