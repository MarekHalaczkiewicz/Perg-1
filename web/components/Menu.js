import PergLogo from "../components/svgs/PRG_logo.svg";

const Menu = (props) => {
  return (
    <>
      <div className="flex justify-items-center content-center place-content-center	relative">
        <PergLogo className="z-20 w-1/4 h-1/4 -my-32" />
      </div>
      <div className="flex justify-items-center content-between place-content-center sm:mt-6 md:mt-12">
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-4 mx-4 cursor-not-allowed">
          <buton>show</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-4 mx-4 cursor-not-allowed">
          <buton>shop</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-4 mx-4 cursor-not-allowed">
          <buton>space</buton>
        </div>
        <div className="filter blur-sm hover:bg-gray-100 font-magistrat-light py-2 px-4 mx-4 cursor-not-allowed">
          <buton>about</buton>
        </div>
      </div>
    </>
  );
};

export default Menu;
