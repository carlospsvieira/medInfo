import React, { useContext, useState } from "react";
import getMedicationByName from "../api";
import { Context } from "../context/StateProvider";
import { toast } from "react-toastify";
import Loading from "./Loading";

function Hero() {
  const { setMedInfo, search, setSearch, ref } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await getMedicationByName(search);

    // check if data is valid //
    if (!search || typeof data === "string") {
      // pass a toast error //
      toast.error("Couldn't find a match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        toastId: "do-not-duplicate",
      });
    } else {
      // add data, clean input and scroll to result area //
      setMedInfo(data);
      setSearch("");
      ref.current?.scrollIntoView({ behavior: "smooth", top: "5rem" });
      setLoading(false);
    }
  };

  return (
    <div id="hero" className="flex justify-around h-screen bg-slate-50 hero">
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
          <a
            className="bg-cyan-600 font-bold 
            text-white 
            py-2 
            px-5 
            rounded-md 
            text-sm 
            shadow-sm 
            hover:bg-cyan-700 
            transition-all
            cursor-pointer"
            type="submit"
            onClick={handleClick}
          >
            Search
          </a>
        </div>
        <p className="text-center">{loading && <Loading />}</p>
      </form>
    </div>
  );
}

export default Hero;
