import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ItemContext } from '../Context/ItemContext';
import CardItem from '../CardItem';
import { ImArrowUp, ImCross } from 'react-icons/im';
import { BiRupee } from 'react-icons/bi';

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

const Form = styled.form`
  display: flex;
  input {
    padding: 6px;
    width: 180px;
    margin-right: 1rem;
    font-size: 1.4rem;
  }
  button {
    background: #1e90ff;
    outline: none;
    border: none;
    padding: 0 1.4rem;
    font-size: 1.5rem;
    color: #fff;
    letter-spacing: 0.5px;
  }
`;

const ViewAllItemsCateg = ({ match }) => {
  const history = useHistory();
  const { categ } = useParams();
  const { origItems, items, setItems, compare, setCompare } =
    useContext(ItemContext);
  const [resItems, setResItems] = useState([]);
  const [search, setSearch] = useState({
    min: '',
    max: '',
    city: '',
  });
  const [viewCount, setViewCount] = useState(6);
  const handleView = () => setViewCount((prevView) => prevView + 6);
  useEffect(() => {
    const urlCateg = categ === 'health' ? 'hospitals' : categ;
    const filtered =
      items && items.filter((item) => urlCateg.includes(item.category));
    setResItems(filtered);
  }, [items, categ]);

  const handleleSearchChng = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let filteredItems = [];
    if (!search.min && !search.max) {
      filteredItems = origItems.filter((item) =>
        item?.address?.area.toLowerCase().includes(search.place.toLowerCase())
      );
    } else if (!!search.place) {
      filteredItems = origItems.filter(
        (item) =>
          Number(item?.price) >= Number(search.min) &&
          Number(item?.price) <= Number(search.max) &&
          item?.address?.area.toLowerCase().includes(search.place.toLowerCase())
      );
    } else {
      filteredItems = origItems.filter(
        (item) =>
          Number(item?.price) >= Number(search.min) &&
          Number(item?.price) <= Number(search.max)
      );
    }
    setItems(filteredItems);
  };

  return (
    <>
      {compare && !!compare.length && (
        <div className='compare_div'>
          <div className='compare_header'>
            <h1>Compare</h1>
            <div>
              <button onClick={() => history.push('/compare')}>
                <ImArrowUp />
              </button>
              <button onClick={() => setCompare([])}>
                <ImCross />
              </button>
            </div>
          </div>
          <hr />
          {compare.map((item) => (
            <div className='item_info' key={item?._id}>
              <div>
                <h2>{item?.title}</h2>
                <h3>
                  <strong>
                    <BiRupee /> {item?.price}
                  </strong>
                </h3>
              </div>
              <div>
                <button
                  onClick={() =>
                    setCompare((prev) =>
                      prev.filter((i) => i?._id !== item?._id)
                    )
                  }
                  className='btn btn-danger'
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Row className='my-4'>
        {match?.params?.categ === 'rent' && (
          <div className='mb-3 bg-white p-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <Form onSubmit={handleSearch}>
                <input
                  type='number'
                  name='min'
                  min={0}
                  value={search.min}
                  onChange={handleleSearchChng}
                  placeholder='Min price'
                />
                <input
                  type='number'
                  name='max'
                  min={search.min || 0}
                  value={search.max}
                  onChange={handleleSearchChng}
                  placeholder='Max price'
                />
                <input
                  type='text'
                  name='place'
                  value={search.place}
                  onChange={handleleSearchChng}
                  placeholder='Place'
                />
                <button type='submit'>FIND</button>
              </Form>
              <button
                onClick={() => setItems(origItems)}
                className='btn btn-lg btn-danger'
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}
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

export default ViewAllItemsCateg;
