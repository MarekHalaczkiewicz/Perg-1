import Link from "next/link";

import Oddysey from "./svgs/OrbitOddysey.svg";

const Hero = () => {
  return (
     <div className="bg-white">
      <div className="z-30 mt-36 w-full ml-72 font-magistrat-light italic xs:text-transparent sm:text-black text-3xl filter invert  mix-blend-difference flex justify-center absolute">
        <p>/website under construction</p>
      </div>
      <div className=" flex items-center justify-around relative ">
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-6xl cursor-not-allowed">
            show
          </button>
        </div>
        <div className="z-20 w-1/3">
          <div className="">
            <Link href="https://www.instagram.com/veit.schmidleitner/?hl=en">
              <Oddysey
                target="_blank"
                className="w-full h-100 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-6xl font-magistrat cursor-not-allowed">
            shop
          </button>
        </div>
      </div>
      <div className="z-20 flex flex-col justify-items-center items-center relative">
        <h2>Veit Schmidleitner</h2>
        <h3>ORBIT ODDYSEY</h3>
        <p>March 18 - June 19, 2022</p>
      </div>
  );
};

export default Hero;
