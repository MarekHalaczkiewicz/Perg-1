import Link from "next/link";

import Oddysey from "./svgs/OrbitOddysey.svg";
// import Oddysey from "../assets/oddysey.jpg";
// const oddysey = require("../public/oddysey.jpg");

const Hero = () => {
  return (
    <>
      {/* <div className="z-30 mt-72 w-full ml-36 font-magistrat-light italic text-3xl filter invert text-black mix-blend-difference flex justify-center absolute">
          <p>/website under construction</p>
        </div> */}
      <div className=" flex items-center justify-around relative ">
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl cursor-not-allowed">
            show
          </button>
        </div>
        <div className="z-20 w-1/3">
          <div className="">
            <Link href="https://www.instagram.com/veit.schmidleitner/?hl=en">
              <Oddysey
                target="_blank"
                className="w-full h-72 md:h-full cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl font-magistrat cursor-not-allowed">
            shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
