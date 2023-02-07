import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around py-2 bg-slate-50 fixed w-full shadow-md">
      <div>
        <button className="text-3xl text-cyan-600 font-bold">
          Med<span className="text-zinc-700 font-bold">Info</span>
        </button>
      </div>
      <div className="flex gap-8 text-lg nav-btns">
        <button>Search</button>
        <button>Result</button>
        <button>About</button>
      </div>
    </div>
  );
}

export default Navbar;
