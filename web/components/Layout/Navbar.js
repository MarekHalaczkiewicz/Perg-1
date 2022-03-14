const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-3">
        <div className="navbar--left">
          {/* <button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed"> */}
          <a className="text-xs filter blur-sm inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-magistrat-light items-center justify-center cursor-not-allowed">
            en
          </a>
          {/* <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              S
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0" />
            </svg> */}
          {/* </button> */}
        </div>
        <div className="navbar--right">
          <div className="w-full inline-flex flex-grow w-auto">
            <div className="inline-flex flex-row ml-auto w-auto w-full items-center items-start flex h-auto">
              <a className="text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 rounded text-black font-magistrat-light items-center justify-center cursor-not-allowed">
                search
              </a>
              <a className="text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 rounded text-black font-magistrat-light items-center justify-center cursor-not-allowed">
                bag(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
