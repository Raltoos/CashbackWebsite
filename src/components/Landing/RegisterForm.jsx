import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <form className="bg-white h-auto md:h-[500px] m-5 w-full max-w-[400px] rounded-2xl flex flex-col items-center gap-5 p-4">
      <p className="text-[#FF7046] text-xl sm:text-2xl w-3/4 text-center font-semibold mt-5">
        Register now and win Rs.100 bonus!
      </p>
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-xs text-gray-400">
          Register with your social media account
        </p>
        <div className="flex gap-3 sm:gap-5">
          <button className="flex gap-2 sm:gap-3 items-center h-[30px] bg-[#EA4337] px-4 sm:p-5 text-white rounded-xl text-sm">
            <FaGoogle size="1.5rem" color="white" />
            via Google
          </button>
          <button className="flex gap-2 sm:gap-3 items-center h-[30px] bg-[#1679F4] px-4 sm:p-5 text-white rounded-xl text-sm">
            <FaFacebookF size="1.5rem" color="white" />
            via Facebook
          </button>
        </div>

        <p className="text-lg text-gray-400 mt-5">Or with your email</p>
        <div className="w-full flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="email"
            className="border border-gray-400 p-3 rounded-lg w-3/4"
          />
          <input
            type="password"
            placeholder="password"
            className="border border-gray-400 p-3 rounded-lg w-3/4"
          />
          <button className="bg-[#6C5DD3] text-white font-semibold px-10 py-3 rounded-lg mt-2 w-3/4">
            Register
          </button>
        </div>

        <div className="w-3/4 border-t border-gray-300 mt-3 flex gap-2 justify-center pt-1">
          <p className="text-sm">Already have an account?</p> 
          <button className="text-[#6C5DD3] text-sm">log in</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
