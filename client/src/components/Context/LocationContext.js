import { createContext, useContext, useState, useEffect } from "react";
import Axios from "axios";
import { UserContext } from "../Context/UserContext";

export const LocationContext = createContext(null);

export const LocationProvider = (props) => {
  const { user } = useContext(UserContext);
  const [location, setLocation] = useState({
    area: undefined,
    city: undefined,
    country_code: "IN",
    country_name: "India",
    lat: undefined,
    lon: undefined,
    pincode: undefined,
    state: undefined,
  });

  useEffect(() => {
    const getLoc = async () => {
      const res = await Axios.get(
        "https://geolocation-db.com/json/09ba3820-0f88-11eb-9ba6-e1dd7dece2b8"
      );
      setLocation({
        area: user && user?.userData?.address?.area,
        city:
          user && user.isLoggedIn
            ? user?.userData?.address?.city
            : res.data.city,
        country_code: "IN",
        country_name: "India",
        lat:
          user && user.isLoggedIn
            ? user?.userData?.address?.lat
            : res.data.latitude,
        lon:
          user && user.isLoggedIn
            ? user?.userData?.address?.lon
            : res.data.longitude,
        pincode:
          user && user.isLoggedIn
            ? user?.userData?.address?.pincode
            : res.data.postal,
        state:
          user && user.isLoggedIn
            ? user?.userData?.address?.state
            : res.data.state,
      });
    };
    getLoc();
  }, [user]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
};
