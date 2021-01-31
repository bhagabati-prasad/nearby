import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const NavMenuContext = createContext(null);

export const NavMenuProvider = (props) => {
  const [navMenu, setNavMenu] = useState(null);

  useEffect(() => {
    const getmenu = async () => {
      const res = await Axios.get("http://127.0.0.1:4000/api/navmenu");
      setNavMenu(res.data);
    };
    getmenu();
  }, []);

  return (
    <NavMenuContext.Provider value={{ navMenu, setNavMenu }}>
      {props.children}
    </NavMenuContext.Provider>
  );
};
