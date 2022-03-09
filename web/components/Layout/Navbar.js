const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-3">
        <div className="navbar--left">
          <button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed">
            <span>en</span>
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              S
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0" />
            </svg>
          </button>
        </div>
        <div className="navbar--right">
          <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed">
                Search
              </a>
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed">
                Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
