import React, { useContext } from "react";
import getMedicationByName from "../api";
import { Context } from "../context/StateProvider";
import { toast } from "react-toastify";
import heroBG from "../images/hero-bg.jpg";

function Hero() {
  const { setMedInfo, search, setSearch } = useContext(Context);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await getMedicationByName(search);
    if (!search || typeof data === "string") {
      toast.error("Couldn't find a match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        toastId: "do-not-duplicate",
      });
    } else {
      setMedInfo(data);
      setSearch("");
    }
  };

  return (
    <div className="flex justify-around h-screen bg-slate-50 hero">
      <form onSubmit={handleClick}>
        <div className="flex flex-col items-end mt-52 px-4">
          <div className="flex flex-col my-2">
            <h1 className="text-3xl font-bold text-zinc-700 mb-3">
              Search for medication or hygiene product info.
            </h1>
            <input
              type="text"
              name="medName"
              value={search}
              onChange={handleChange}
              className="rounded-md bg-slate-100 border-2 px-2 py-2 shadow-sm"
              placeholder="e.g., Advil"
            />
          </div>
          <button
            className="bg-cyan-600 font-bold text-white py-2 px-5 rounded-md text-sm shadow-sm hover:bg-cyan-700 transition-all"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Hero;
