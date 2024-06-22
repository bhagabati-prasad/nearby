import { useState, useEffect, createContext, useContext } from 'react';
import Axios from 'axios';
import { UserContext } from './UserContext';

export const ItemContext = createContext(null);

export const ItemProvider = (props) => {
  const { user } = useContext(UserContext);
  const [origItems, setOrigItems] = useState([]);
  const [items, setItems] = useState([]);
  const [rentItems, setRentItems] = useState([]);
  const [serviceItems, setServiceItems] = useState([]);
  const [update, setUpdate] = useState(true);
  const [compare, setCompare] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await Axios.get('http://localhost:4000/api/items');
      const resItem = res.data;
      setItems(resItem);
      setOrigItems(resItem);
      const filteredRents =
        resItem &&
        resItem.filter((item) => item.category === 'rent' && !item?.sold);

      const filteredServices =
        resItem && resItem.filter((item) => item.category !== 'rent');

      setRentItems(filteredRents);
      setServiceItems(filteredServices);
    };
    getItems();
  }, [user, update]);

  return (
    <ItemContext.Provider
      value={{
        origItems,
        items,
        setItems,
        rentItems,
        setRentItems,
        serviceItems,
        setServiceItems,
        setUpdate,
        compare,
        setCompare,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
