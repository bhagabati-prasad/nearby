import { useState, useEffect, useContext } from "react";
import { HomeTopMap } from "./HomeElements";
import { GrLocationPin } from "react-icons/gr";
import { LocationContext } from "../Context/LocationContext";

const HomeContents = () => {
  const { location } = useContext(LocationContext);
  console.log("homesidebarmap", location);
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
        {/* <HomeTopMap
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.507254799495!2d85.78558298253947!3d20.264117671878175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7eb7d3606b9%3A0x667bf847e137b538!2sUdaygiri%20and%20Khandagiri%20Caves!5e0!3m2!1sen!2sin!4v1607410345412!5m2!1sen!2sin'
          frameborder='0'
          allowfullscreen=''
          ariaHidden='false'
          tabindex='0'
        /> */}
      </section>
    </>
  );
};

export default HomeContents;
