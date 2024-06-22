import { useContext } from "react";
import { GrLocationPin } from "react-icons/gr";
import { LocationContext } from "../Context/LocationContext";
import Mapbox from "./Mapbox";

const HomeContents = () => {
  const { location } = useContext(LocationContext);
  const { city, state, country_name, pincode } = location;

  return (
    <>
      <section className='pt-4'>
        <p style={{ fontSize: "1.5rem" }}>
          <GrLocationPin
            style={{ fontSize: "2.2rem", marginRight: "0.6rem" }}
          />
          {location
            ? `Showing location for: ${city}, ${state}, ${country_name}, ${pincode}`
            : "Fetching location..."}
        </p>
        <Mapbox width='62vw' height='64vh' />
      </section>
    </>
  );
};

export default HomeContents;
