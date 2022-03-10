import Link from "next/link";

import Oddysey from "./svgs/OrbitOddysey.svg";

const Hero = () => {
  return (
    <>
      <div className=" flex items-center justify-around pt-12 relative">
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
    </>
  );
};

export default Hero;
