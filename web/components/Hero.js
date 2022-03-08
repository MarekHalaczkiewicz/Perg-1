import Oddysey from "../components/svgs/COL_5_1.svg";

const Hero = () => {
  return (
    <>
      <div className=" flex items-center justify-around pt-12">
        <div className="w-1/3 flex justify-center">
          <button className="text-6xl">show</button>
        </div>
        <div className="w-1/3">
          <div className="">
            <Oddysey className="w-full h-100" />
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <button className="text-6xl">shop</button>
        </div>
      </div>
      <div className="flex flex-col justify-items-center items-center">
        <h2>Veit Schmidleitner</h2>
        <h3>ORBIT ODDYSEY</h3>
        <p>March 18 - June 19, 2022</p>
      </div>
    </>
  );
};

export default Hero;
