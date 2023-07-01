import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/Hi";
import { GrFormClose } from "react-icons/Gr";

const Header = () => {
  const [menubar, setMenubar] = useState(false);

  const LinkItem = [
    { link: "/", name: "Home" },
    { link: "/portfolio", name: "Portfolio" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];
  const handleMenu = () => {
    setMenubar((prev) => !prev);
  };
  return (
    <div className=" border-baseColor border-b-2">
      <div className="p-3 flex text-primary items-center justify-between max-w-7xl  mx-auto ">
        <Link to="/">
          <h2 className="text-2xl ">Love Sonkar</h2>
        </Link>
        <ul className="md:flex gap-3 hidden ">
          {LinkItem.map((item, index) => {
            return (
              <Link
                className="text-base md:text-xl "
                key={index}
                to={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <Link className="md:hidden block text-2xl" onClick={handleMenu}>
          {menubar ? <GrFormClose /> : <HiMenuAlt3 />}
        </Link>

        <div
          className={`${
            menubar ? "w-full" : "w-0"
          } overflow-hidden fixed -z-10 drop-shadow-md inset-0 md:hidden transition-all duration-300 `}
          onClick={handleMenu}
        >
          <ul className="flex flex-col gap-4 items-center justify-center h-full bg-baseColor  w-3/4">
            {LinkItem.map((item, index) => {
              return (
                <Link
                  className="text-xl text-white md:text-2xl"
                  key={index}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
