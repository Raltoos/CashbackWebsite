/* eslint-disable react/prop-types */
import india from "../../assets/india.svg"; // Assuming india.svg represents the flag

const Tile = ({ logo, number }) => {
  return (
    <div className="group relative w-full max-w-[300px] bg-white rounded-lg shadow-lg flex flex-col items-center p-5 justify-center overflow-hidden">
      <div className="h-full flex flex-col items-center justify-evenly pb-5">
        <div className="flex flex-col items-center">
          <img src={india} alt="Country Flag" className="w-[30px] mb-3" />
          <img src={logo} alt="Logo" className="w-[120px] mt-2" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-semibold text-[#FF7046]">
            {number}%
          </span>
          <span className="text-gray-400 text-sm mt-1">Cashback</span>
        </div>
      </div>

      <div className="absolute bottom-[-50px] left-0 w-full flex justify-center items-center transition-all duration-300 group-hover:bottom-5">
        <button className="bg-[#6C5DD3] text-white font-semibold py-2 px-10 rounded-full flex items-center gap-2 text-sm">
          Shop now <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Tile;
