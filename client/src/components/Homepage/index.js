import { useContext, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import HomeContents from "./HomeSidebarMap";
import CategorySection from "./CategorySection";
// context
import { ItemContext } from "../Context/ItemContext";
import { LocationContext } from "../Context/LocationContext";

const Homepage = () => {
  const { items } = useContext(ItemContext);
  const { location } = useContext(LocationContext);

  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    // items && items.filter((item) => item.address.city.toLowerCase() === location.city.toLowerCase());
    const filtered =
      items && items.filter((item) => item.address.city.toLowerCase() === "la");
    setFilteredItems(filtered);
  }, [items]);
  console.log(filteredItems);

  return (
    <>
      <Row>
        <div className='col-md-3 pl-0'>
          <Sidebar />
        </div>
        <div className='col-md-9 pl-3 pr-0'>
          <HomeContents />
        </div>
      </Row>

      <CategorySection
        heading='Available rooms for rent'
        items={filteredItems}
        show='6'
      />
    </>
  );
};

export default Homepage;
