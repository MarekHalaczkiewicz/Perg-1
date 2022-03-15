import Link from "next/link";

import Oddysey from "./svgs/OrbitOddysey.svg";
// import Oddysey from "../assets/oddysey.jpg";
// const oddysey = require("../public/oddysey.jpg");

const Hero = () => {
  return (
    <>
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
