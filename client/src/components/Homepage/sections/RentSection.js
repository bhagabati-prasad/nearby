import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardItem from "./CardItem";
import { demoItems } from "../demoItems";

export const ViewAllBtn = styled(Link)`
  text-decoration: none;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.7rem;
  color: #222;
  background: transparent;
  border: 1px solid #1e90ff;
  transition: all 0.24s;
  &:hover {
    color: #fff;
    background: #1e90ff;
    border: 1px solid transparent;
  }
`;

const RentSection = () => {
  const items = demoItems.find((val) => val.category == "rent");
  return (
    <>
      <h2 className='display-4 mt-5 pt-5 mb-5'>Rents: Rooms & Appartments</h2>
      <Row>
        {/* {items &&
          items
            .slice(0, 9)
            .map((item, indx) => (
              <CardItem key={indx} itemProps={item} category='home' />
            ))} */}
      </Row>
      <div className='w-100 my-5 d-flex justify-content-center'>
        <ViewAllBtn to='/rent'>View all</ViewAllBtn>
      </div>
    </>
  );
};

export default RentSection;

// var film = this.props.data.slice(0, 5).map((item) => {
//   return <FilmItem key={item.id} film={item} />;
// });
