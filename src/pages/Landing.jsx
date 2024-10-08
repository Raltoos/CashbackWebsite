import Hero from "../components/Landing/Hero";
import Popular from "../components/Landing/Popular";
import PopularOffers from "../components/OfferSlider/PopularOffers";

const Landing = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <PopularOffers />
      <Popular />
    </div>
  );
};

export default Landing;
