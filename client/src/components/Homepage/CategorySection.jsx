import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardItem from "../CardItem";

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

const CategorySection = (props) => {
  console.log(props.items);
  return (
    <>
      <h2 className='display-4 mt-5 pt-5 mb-5'>{props.heading}</h2>
      <Row>
        {props.items &&
          props.items.slice(0, props.show).map((item) => (
            <div className='col-md-4 col-12 px-3' key={item._id}>
              <CardItem itemProps={item} category='home' />
            </div>
          ))}
      </Row>
      <div className='w-100 my-5 d-flex justify-content-center'>
        <ViewAllBtn to='/rent'>View all</ViewAllBtn>
      </div>
    </>
  );
};

export default CategorySection;
