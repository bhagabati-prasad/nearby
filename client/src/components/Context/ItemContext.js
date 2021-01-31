import { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const ItemContext = createContext(null);

export const ItemProvider = (props) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      const res = await Axios.get("http://localhost:4000/api/items");
      setItems(res.data);
    };
    getItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {props.children}
    </ItemContext.Provider>
  );
};
