import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { demoItems } from "../Homepage/demoItems";
import CardItem from "../Homepage/sections/CardItem";

export const ViewAllBtn = styled.button`
  height: 40px;
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

const ViewAllItems = ({ match }) => {
  const [viewCount, setViewCount] = useState(6);
  const handleView = () => setViewCount((prevView) => prevView + 6);

  const category = match.params.categ;

  return (
    <>
      {/* {items ? (
              <>
                <Row>
                  {demoItems.slice(0, viewCount).map((item, indx) => (
                    <CardItem key={indx} itemProps={item} category='home' />
                  ))}
                </Row>
                <div className='w-100 my-5 d-flex justify-content-center'>
                  <ViewAllBtn onClick={handleView}>View more</ViewAllBtn>
                </div>
              </>
            ) : (
              <h1>Items not found</h1>
            )} */}
    </>
  );
};

export default ViewAllItems;
