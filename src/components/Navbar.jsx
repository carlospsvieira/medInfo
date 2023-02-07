import React, { useContext } from "react";
import { Context } from "../context/StateProvider";

function Navbar() {
  const { nav, setNav } = useContext(Context);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className="flex justify-around py-2 bg-slate-50 fixed w-full shadow-md">
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
    </div>
  );
}

export default Navbar;
