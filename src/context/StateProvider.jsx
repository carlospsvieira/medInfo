import { createContext, useMemo, useRef, useState } from "react";

export const Context = createContext();

function StateProvider({ children }) {
  const [search, setSearch] = useState("");
  const [medInfo, setMedInfo] = useState([]);
  const [nav, setNav] = useState(false);
  const ref = useRef(null);

  const value = useMemo(
    () => ({
      medInfo,
      setMedInfo,
      search,
      setSearch,
      nav,
      setNav,
      ref,
    }),
    [medInfo, setMedInfo, search, setSearch, nav, setNav, ref]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default StateProvider;
