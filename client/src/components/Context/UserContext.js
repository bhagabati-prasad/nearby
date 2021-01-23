import { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userData: undefined,
    token: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null || token === undefined) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const res = await Axios.post(
        "http://localhost:4000/api/login/isLoggedIn",
        null,
        {
          headers: { "x-access-token": token },
        }
      );
      if (res.data) {
        setUser({
          isLoggedIn: res.data.isLoggedIn,
          userData: res.data.user,
          token: res.data.token,
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
