import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="w-[400px] h-[50px] border border-purple-400 rounded-2xl flex items-center justify-between">
      <input type="text" placeholder="Search stores, coupons" className="p-3 w-full rounded-2xl outline-none" />
      <IoIosSearch size="1.8rem" className="m-3"/>
    </div>
  );
};

export default SearchBar;
