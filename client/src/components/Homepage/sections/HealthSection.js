import { Row } from "react-bootstrap";
import CardItem from "../../CardItem";
import { demoItems } from "../demoItems";
import { ViewAllBtn } from "./RentSection";

const HealthSection = () => {
  const items = demoItems.find((val) => val.category == "health");
  return (
    <>
      <h2 className='display-4 mt-5 pt-5 mb-5'>Health: Hospitals & Clinics</h2>
      <Row>
        {/* {items &&
          items
            .slice(0, 6)
            .map((item, indx) => (
              <CardItem key={indx} itemProps={item} category='hospital' />
            ))} */}
      </Row>
      <div className='w-100 my-5 d-flex justify-content-center'>
        <ViewAllBtn to='/health'>View all</ViewAllBtn>
      </div>
    </>
  );
};

export default HealthSection;
