import React, { useContext } from "react";
import { Context } from "../context/StateProvider";
import { CgMenu } from "react-icons/cg";

function Navbar() {
  const { nav, setNav } = useContext(Context);

  // hamburger nav //
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-around py-2 bg-slate-50 fixed w-full shadow-lg">
      <CgMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] lg:hidden"
        size={20}
      />
      {nav ? (
        <div className="flex flex-col w-full h-screen items-center">
          <div>
            <a href="#hero" onClick={handleNav} className="text-3xl text-cyan-600 font-bold">
              Med<span className="text-zinc-700 font-bold">Info</span>
            </a>
          </div>
          <div className="flex flex-col gap-8 text-lg mt-[25%] items-center">
            <a href="#hero" onClick={handleNav} className="border-b-[2px] border-b-cyan-600 mb-[-1px] text-2xl shadow-md">Search</a>
            <a href="#result" onClick={handleNav} className="border-b-[2px] border-b-cyan-600 mb-[-1px] text-2xl shadow-md">Result</a>
            <a href="#about" onClick={handleNav} className="border-b-[2px] border-b-cyan-600 mb-[-1px] text-2xl shadow-md">About</a>
          </div>
        </div>
      ) : (
        <>
          <div>
            <a href="#hero" className="text-3xl text-cyan-600 font-bold">
              Med<span className="text-zinc-700 font-bold">Info</span>
            </a>
          </div>
          <div className="flex gap-8 text-lg nav-btns">
            <a href="#hero">Search</a>
            <a href="#result">Result</a>
            <a href="#about">About</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
