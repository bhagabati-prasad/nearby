import { useState, useEffect, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  return (
    <>
      <UserContext.Provider value={"hello user"}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
