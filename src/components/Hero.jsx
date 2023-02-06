import React, { useContext } from "react";
import getMedicationByName from "../api";
import { Context } from "../context/StateProvider";
import { toast } from "react-toastify";

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
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="medName"
          value={search}
          onChange={handleChange}
          className="rounded-sm border-2"
        />
        <button
          className="bg-sky-500 text-white py-1 px-2 rounded-sm text-sm"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Hero;
