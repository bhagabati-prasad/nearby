import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiBed, BiRupee } from 'react-icons/bi';
import { FaBath, FaExchangeAlt } from 'react-icons/fa';
import { RiPinDistanceLine } from 'react-icons/ri';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { BiHeart, BiCurrentLocation } from 'react-icons/bi';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './Context/UserContext';
import { ItemContext } from './Context/ItemContext';

const AdContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.4rem;
  border: 1px solid #f8f9fa;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  margin: 1rem 0 1.4rem 0;
  overflow: hidden;
  transition: 0.24s;
  &:hover {
    border: 1px solid #ccc;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const AdBody = styled.div`
  padding: 1.3rem;
`;

const AdTitle = styled.h2`
  color: #555;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AdPrice = styled.h3`
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 2.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-left: -5px;
  svg {
    font-size: 2.2rem;
  }
`;

const AdShortDesc = styled.p`
  color: #555;
  min-height: 4rem;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  margin: 0.6rem 0;
`;

const ViewBtn = styled(Link)`
  text-decoration: none;
  height: 3.7rem;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
  margin: 1rem 0;
  background: transparent;
  border: 1px solid #999;
  border-radius: 2px;
  color: #1e90ff;
  letter-spacing: 0.5px;
  outline: none;
  margin-right: 1rem;
  font-size: 1.5rem;
  transition: all 0.24s;
  &:hover {
    color: #fff;
    background: #1e90ff;
    border: 1px solid transparent;
  }
`;

const FavIconBtn = styled(ViewBtn)`
  padding: 0 1rem;
  font-size: 1.8rem;
`;

const CardItem = ({ itemProps }) => {
  const { user, setUser } = useContext(UserContext);
  const { setCompare, setUpdate } = useContext(ItemContext);
  const [dist, setDist] = useState('');

  useEffect(() => {
    const distance = geoDistance(
      user?.userData?.location?.lat,
      user?.userData?.location?.lon,
      itemProps?.location?.lat,
      itemProps?.location?.lon,
      'K'
    );
    setDist(distance);
  }, []);

  const handleCompare = () => {
    setCompare((prev) =>
      prev && prev.length < 3
        ? prev.some((item) => item?._id === itemProps._id)
          ? prev.filter((i) => i?._id !== itemProps?._id)
          : [...prev, itemProps]
        : [...prev]
    );
  };

  const handleFav = async () => {
    try {
      const data = {
        id: itemProps?._id,
        category: itemProps?.category,
        title: itemProps?.title,
        description: itemProps?.description,
        price: itemProps?.price,
        address: `${itemProps?.address?.house}, ${itemProps?.address?.street}, ${itemProps?.address?.area}, ${itemProps?.address?.city}, ${itemProps?.address?.state}, ${itemProps?.address?.pincode}`,
      };
      console.log(user?.userData?._id);
      const res = await axios.patch(
        `http://localhost:4000/api/fav/${user?.userData?._id}`,
        data
      );
      console.log(res.data);
      setUser({
        ...user,
        isLoggedIn: res.data.isLoggedIn,
        userData: res.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const markSold = () => {
    console.log(itemProps);
    axios
      .get(
        `http://localhost:4000/api/sold/${user?.userData?._id}/${itemProps?._id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUpdate((prev) => !prev);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdContainer>
        {/* Slider Image section */}
        <img
          src={
            itemProps?.images && !!itemProps?.images.length
              ? `${process.env.PUBLIC_URL}/images/${itemProps?.images?.[0]}`
              : `https://source.unsplash.com/400x230/?${itemProps.category}`
          }
          className='img-fluid'
          alt='ad image'
          style={{ height: '220px', width: '100%', objectFit: 'cover' }}
        />
        <AdBody>
          <div className='mb-2'>
            {itemProps?.type && (
              <button
                style={{ cursor: 'default', fontSize: '1.3rem' }}
                className='btn btn-warning me-3 text-uppercase'
              >
                {itemProps?.type}
              </button>
            )}
            {itemProps?.status && (
              <button
                style={{ cursor: 'default', fontSize: '1.3rem' }}
                className='btn btn-warning text-uppercase me-3'
              >
                For {itemProps?.status}
              </button>
            )}
            {itemProps?.bedrooms && (
              <button
                style={{ cursor: 'default', fontSize: '1.3rem' }}
                className='btn btn-info text-white text-uppercase me-3'
              >
                <BiBed /> <strong>{itemProps?.bedrooms}</strong>
              </button>
            )}
            {itemProps?.bathrooms && (
              <button
                style={{ cursor: 'default', fontSize: '1.3rem' }}
                className='btn btn-info text-white text-uppercase'
              >
                <FaBath /> <strong>{itemProps?.bathrooms}</strong>
              </button>
            )}
          </div>
          {itemProps?.price && (
            <AdPrice>
              <BiRupee />
              {itemProps?.price}
            </AdPrice>
          )}
          <AdTitle className='text-capitalize'>{itemProps?.title}</AdTitle>
          <AdShortDesc>{itemProps?.description.slice(0, 90)}...</AdShortDesc>
          <br />
          <h4 className='text-capitalize'>
            <BiCurrentLocation /> &nbsp;
            {typeof itemProps?.address === 'string'
              ? itemProps?.address
              : `${itemProps?.address?.area}, ${itemProps?.address?.city}, ${itemProps?.address?.state}, ${itemProps?.address?.pincode}`}
          </h4>
          {!!dist && (
            <h3 style={{ color: '#444', fontWeight: 'bold' }}>
              <RiPinDistanceLine />
              &nbsp;
              {dist && dist.toFixed(2)} Km
            </h3>
          )}
          <div className='d-flex align-items-center justify-content-end'>
            {user?.isLoggedIn ? (
              itemProps?.userId === user?.userData?._id &&
              // itemProps?.category === 'rent' &&
              !itemProps?.sold ? (
                <button
                  onClick={markSold}
                  className='btn btn-warning p-3 me-2'
                  style={{ fontSize: '1.3rem' }}
                >
                  Hide Ad
                </button>
              ) : (
                <button
                  onClick={markSold}
                  className='btn btn-warning p-3 me-2'
                  style={{ fontSize: '1.3rem' }}
                >
                  Show Ad
                </button>
              )
            ) : null}
            {itemProps?.category === 'rent' && (
              <button onClick={handleCompare} className='btn btn-dark p-3 me-2'>
                <FaExchangeAlt />
              </button>
            )}
            {user?.isLoggedIn && (
              <button
                onClick={handleFav}
                className='btn btn-info me-2'
                style={{ padding: '8px' }}
              >
                <h2>
                  {user?.userData?.favourites?.some(
                    (fav) =>
                      fav?.id === itemProps?._id || fav?.id === itemProps?.id
                  ) ? (
                    <BsSuitHeartFill />
                  ) : (
                    <BsSuitHeart />
                  )}
                </h2>
              </button>
            )}
            <ViewBtn
              target='_blank'
              rel='noopener'
              to={`/category/${itemProps?.category}/item/${itemProps?._id}`}
            >
              View
            </ViewBtn>
          </div>
        </AdBody>
      </AdContainer>
    </>
  );
};

export default CardItem;

//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles

export function geoDistance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 || lon1 || lat2 || lon2) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') {
        dist = dist * 1.609344;
      }
      if (unit === 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  } else {
    return undefined;
  }
}
