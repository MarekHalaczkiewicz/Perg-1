import PergLogo from "../components/svgs/PRG_logo.svg";

const Menu = (props) => {
  return (
    <>
      <div className="flex justify-items-center content-center place-content-center	relative -my-7 xs:-my-18 md:-my-24 xl:-my-36">
        <PergLogo className="z-20 w-1/4 h-1/4" />
      </div>
      <div className="flex justify-items-center content-between place-content-center text-sm mb-12 xl:-mt-10 ">
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-2 mx-2 xs:px-4 xs:mx-4 cursor-not-allowed sm:text-2xl md:text-4xl">
          <buton>show</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-2 mx-2 xs:px-4 xs:mx-4 cursor-not-allowed sm:text-2xl md:text-4xl">
          <buton>shop</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-2 mx-2 xs:px-4 xs:mx-4 cursor-not-allowed sm:text-2xl md:text-4xl">
          <buton>space</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-2 mx-2 xs:px-4 xs:mx-4 cursor-not-allowed sm:text-2xl md:text-4xl">
          <buton>about</buton>
        </div>
      </div>
    </>
  );
};

export default Menu;
