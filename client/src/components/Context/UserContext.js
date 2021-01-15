import { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userData: undefined,
  });

  useEffect(() => {
    Axios.get("http://localhost:4000/api/login").then((res) => {
      setUser({
        isLoggedIn: res.data.isLoggedIn,
        userData: res.data.user,
      });
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
