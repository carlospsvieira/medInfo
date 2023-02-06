import React, { useContext } from "react";
import getMedicationByName from "../api";
import { Context } from "../context/StateProvider";

function Hero() {
  const { setMedInfo, search, setSearch } = useContext(Context);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleClick = async () => {
    const data = await getMedicationByName(search);
    setMedInfo(data);
  }

  return (
    <div>
      <input
        type="text"
        name="medName"
        value={search}
        onChange={handleChange}
        className="rounded-sm border-2"
      />
      <button className="bg-sky-500 text-white py-1 px-2 rounded-sm text-sm" onClick={ handleClick }>
        Search
      </button>
    </div>
  );
}

export default Hero;
