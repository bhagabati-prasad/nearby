import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ItemContext } from '../Context/ItemContext';
import CardItem from '../CardItem';

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

const ViewAllItemsSubCateg = () => {
  const { categ, subcateg } = useParams();
  const { items } = useContext(ItemContext);
  const [resItems, setResItems] = useState([]);
  const [viewCount, setViewCount] = useState(6);
  const handleView = () => setViewCount((prevView) => prevView + 6);

  useEffect(() => {
    const filtered =
      items &&
      items.filter(
        (item) => item.category === categ && item.subcategory === subcateg
      );
    setResItems(filtered);
  }, [items, categ]);
  return (
    <>
      <Row className='my-4'>
        <Card className='bg-white p-4 shadow-sm'>
          <Row>
            {resItems &&
              resItems
                .reverse()
                .slice(0, viewCount)
                .map((item, indx) => (
                  <div className='col-md-4 col-12 px-4' key={indx}>
                    <CardItem itemProps={item} />
                  </div>
                ))}
            <div className='d-flex justify-content-center my-5'>
              <ViewAllBtn onClick={handleView}>View more</ViewAllBtn>
            </div>
          </Row>
        </Card>
      </Row>
    </>
  );
};

export default ViewAllItemsSubCateg;
