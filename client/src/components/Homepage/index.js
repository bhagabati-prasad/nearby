import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import HomeContents from './HomeSidebarMap';
import CategorySection from './CategorySection';
import { ImCross, ImArrowUp } from 'react-icons/im';
import { BiRupee } from 'react-icons/bi';
// context
import { ItemContext } from '../Context/ItemContext';
import { useState } from 'react';
import { useEffect } from 'react';
import './homepage.css';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history = useHistory();
  const { rentItems, serviceItems, compare, setCompare } =
    useContext(ItemContext);
  const [rent, setRent] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    setRent(rentItems);
    setService(serviceItems);
  }, [rentItems, serviceItems]);

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
      <Row>
        <div className='col-md-3 pl-0'>
          <Sidebar />
        </div>
        <div className='col-md-9 pl-3 pr-0'>
          <HomeContents />
        </div>
      </Row>
      {rent && (
        <CategorySection
          heading='Available rooms for rent'
          items={rent}
          show='6'
        />
      )}
      {service && (
        <CategorySection heading='Nearby Stores' items={service} show='6' />
      )}
    </>
  );
};

export default Homepage;
