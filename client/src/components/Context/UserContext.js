import { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userData: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      const res = await Axios.get("http://localhost:4000/api/login");
      if (res.status == 200) {
        setUser({
          isLoggedIn: res.data.isLoggedIn,
          userData: res.data.user,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
