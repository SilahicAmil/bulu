const SideNav = (props) => {
  return (
    <>
      {/* wrap in card component type thingy */}
      <div className="w-40 rounded-xl bg-[#d6be7a] h-full mt-15 shadow-md  px-1 absolute">
        <ul className="relative">
          <li className="relative">
            <a
              className="flex text-white items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
        </ul>
      </div>
      <main>{props.children}</main>
    </>
  );
};

export default SideNav;
