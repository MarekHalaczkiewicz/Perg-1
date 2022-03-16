const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-3">
        <div className="navbar--left">
          {/* <button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed"> */}
          <a className="text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 rounded text-black font-magistrat-light items-center justify-center cursor-not-allowed">
            en
          </a>
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
