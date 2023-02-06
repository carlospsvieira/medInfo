import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function StateProvider({ children }) {
  const [search, setSearch] = useState("");
  const [medInfo, setMedInfo] = useState([]);

  const value = useMemo(
    () => ({
      medInfo,
      setMedInfo,
      search,
      setSearch,
    }),
    [medInfo, setMedInfo, search, setSearch]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default StateProvider;
