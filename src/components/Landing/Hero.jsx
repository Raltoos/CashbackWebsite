import heroimg from "../../assets/heroIMG.svg";
import RegisterForm from "./RegisterForm";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center h-auto md:h-[600px] bg-[#7b60d2] pt-[1rem] px-4">
      <div className="w-full md:w-6/12 text-center flex flex-col items-center justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl text-white font-medium font-display md:max-w-[18ch] mt-[1rem]">
          Save more than 60% on online shopping
        </p>
        <img
          src={heroimg}
          alt="Hero"
          className="mx-auto md:mx-0 mt-4 md:mt-8 w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem]"
        />
      </div>
      <div className="w-full md:w-6/12 mt-6 md:mt-0 flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Hero;
