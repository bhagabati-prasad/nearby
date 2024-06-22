import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { ItemContext } from '../Context/ItemContext';
import { ImLocation } from 'react-icons/im';
import './compare.css';

const Compare = () => {
  const { compare, setCompare } = useContext(ItemContext);

  return (
    <>
      {compare && !!compare.length ? (
        <>
          <div className='compare_head'>
            <h1>Compare: {compare && compare.length}</h1>
            <button
              onClick={() => setCompare([])}
              className='btn btn-lg btn-danger'
            >
              CLEAR ALL
            </button>
          </div>
          <Row className='my-2'>
            {compare.map((item) => (
              <div className='col-4' key={item?._id}>
                <div className='card shadow-sm'>
                  <img
                    src='https://rentroomo.com/assets/images/props/house-1/1-medium.jpg'
                    alt=''
                    style={{
                      maxHeight: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div className='card_body p-4'>
                    <h1 className='text-center'>{item?.title}</h1>
                    <h4 className='text-center my-3'>
                      <ImLocation />
                      &nbsp;
                      {`${item?.address?.house || ''}, ${
                        item?.address?.area || ''
                      }, ${item?.address?.city || ''}, ${
                        item?.address?.state || ''
                      }, ${item?.address?.pincode || ''}`}
                    </h4>
                    <ul>
                      <li>
                        <span className='key'>Property type:</span>
                        <span className='val'>house</span>
                      </li>
                      <li>
                        <span className='key'>Property status:</span>
                        <span className='val'>rent</span>
                      </li>
                      <li>
                        <span className='key'>Pincode:</span>
                        <span className='val'>
                          {item?.address?.pincode || ''}
                        </span>
                      </li>
                      <li>
                        <span className='key'>Bedrooms:</span>
                        <span className='val'>{item?.bedrooms || 3}</span>
                      </li>
                      <li>
                        <span className='key'>bathrooms:</span>
                        <span className='val'>{item?.bathrooms || 2}</span>
                      </li>
                    </ul>
                    <div>
                      <h1 className='text-center my-3'>Description</h1>
                      <p>{item?.description}</p>
                    </div>
                    <div className='text-center mt-3'>
                      <button
                        onClick={() =>
                          setCompare((prev) =>
                            prev.filter((i) => i?._id !== item?._id)
                          )
                        }
                        className='btn btn-lg btn-danger me-3'
                      >
                        Remove
                      </button>
                      <button
                        onClick={() =>
                          (window.location.href = `http://localhost:3000/category/${item?.category}/item/${item?._id}`)
                        }
                        className='btn btn-lg btn-primary'
                      >
                        View Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </>
      ) : (
        <div className='compare_head'>
          <h1>No property added to compare list</h1>
        </div>
      )}
    </>
  );
};

export default Compare;
