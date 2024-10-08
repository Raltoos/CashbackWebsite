import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <div className="w-screen sticky top-0 z-10 overflow-hidden">
      <div className="bg-white h-[100px] flex items-center justify-between gap-10 px-5 border-b border-gray-200">
        <img src={logo} alt="" className="w-[180px] h-[80px]" />
        <SearchBar />
        <div className="flex gap-5">
          <button className="rounded-2xl text-[#6c5dd3] text-sm border border-[#6c5dd3] px-10 py-3">
            Log In
          </button>
          <button className="bg-[#6c5dd3] rounded-2xl text-white text-sm px-10 py-3">
            Sign Up
          </button>
        </div>
      </div>
      <div className="w-full h-[70px] flex justify-between items-center px-10 bg-white">
        <div className="w-1/2 px-10">
          <ul className="flex w-full gap-5 justify-between items-center">
            <NavItem text={"Home"}/>
            <NavItem text={"Stores"}/>
            <NavItem text={"Coupons"}/>
            <NavItem text={"FAQ"}/>
            <NavItem text={"About"}/>
          </ul>
        </div>
        <button className="text-[#239cd9] bg-[#e6f5ff] p-5 h-[50px] text-sm flex items-center rounded-lg">Invite a friend</button>
      </div>
    </div>
  );
};

export default Header;
