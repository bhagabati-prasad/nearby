import { Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import HomeContents from "./HomeSidebarMap";
import RentSection from "./sections/RentSection";
import HealthSection from "./sections/HealthSection";

const Homepage = () => {
  return (
    <>
      {/* Main Contents */}
      <Row>
        <div className='col-md-3 pl-0'>
          <Sidebar />
        </div>
        <div className='col-md-9 pl-3 pr-0'>
          <HomeContents />
        </div>
      </Row>

      <RentSection />
      <HealthSection />
    </>
  );
};

export default Homepage;
