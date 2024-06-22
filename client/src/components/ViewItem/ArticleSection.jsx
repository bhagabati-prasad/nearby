import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Card, Col } from 'react-bootstrap';
import Bg from '../../image/contactusbgfull.jpg';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { ItemContext } from '../Context/ItemContext';
import { BiRupee } from 'react-icons/bi';
import { geoDistance } from '../CardItem';
import { UserContext } from '../Context/UserContext';
import GoogleMapReact from 'google-map-react';
import { ImLocation } from 'react-icons/im';

const ImgSec = styled.section`
  width: 100%;
  display: flex;
  overflow: auto;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin: 4px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 34rem;
  background-color: #eee;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
`;
const CardBody = styled.section`
  padding: 2rem 0;
`;
const Price = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;
const Ul = styled.ul`
  padding: 0;
  margin: 1rem 0;
  li {
    list-style-type: none;
    border-bottom: 1px solid #999;
    padding: 0.7rem;
    font-size: 1.6rem;
    display: flex;
    text-transform: capitalize;
    .key {
      color: #444;
      font-weight: bold;
      flex-grow: 1;
    }
  }
`;
const Description = styled.p`
  color: #444;
  font-size: 1.64rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.7;
  margin: 1.5rem 0;
`;
const Location = styled.h3`
  color: #666;
  cursor: pointer;
  &:hover {
    color: #1e90ff;
  }
`;
const UserInfoContainer = styled.section`
  display: inline-block;
  padding: 1.4rem 2rem;
  min-width: 60%;
  background-color: #eee;
  border-radius: 4px;
  margin: 2rem 0;
`;
const UserPic = styled.span`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: #8c0;
  position: relative;
  margin-right: 1.8rem;
`;
const Initial = styled.h1`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const UserName = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`;
const SingleRelatedPost = styled(Link)`
  text-decoration: none;
`;
const RelPostImgDiv = styled(ImageContainer)`
  height: 14rem;
`;
const RelPostImg = styled(Img)``;
const RelPostBody = styled.div`
  padding: 0.7rem 0;
  h2 {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    color: #666;
    font-size: 1.4rem;
    margin: 1rem 0;
    &:nth-child(3) {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
  }
`;

const ArticleSection = () => {
  const { categ, id } = useParams();
  const { items } = useContext(ItemContext);
  const { user } = useContext(UserContext);
  const [findItem, setFindItem] = useState([]);
  const [related, setRelated] = useState([]);
  const [dist, setDist] = useState('');
  const [viewport, setViewport] = useState({
    center: {
      lat: 20.275845,
      lng: 85.776639,
    },
    zoom: 11,
  });

  useEffect(() => {
    const fitem =
      items && items.find((item) => item.category === categ && item._id === id);
    const relItems =
      items &&
      items.filter(
        (item) =>
          item.category === categ && item.address.city === fitem.address.city
      );
    setFindItem(fitem);
    setRelated(relItems);
  }, [items]);

  const showInMapClicked = (address) => {
    !!address && address?.house
      ? window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${address?.house}, ${address?.area}, ${address?.city}, ${address?.state}, ${address?.pincode}`
        )
      : window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${address?.area}, ${address?.city}, ${address?.state}, ${address?.pincode}`
        );
  };

  // useEffect(() => {
  //   const distance = geoDistance(
  //     user?.userData?.location?.lat,
  //     user?.userData?.location?.lon,
  //     items?.location?.lat,
  //     items?.location?.lon,
  //     'K'
  //   );
  //   setDist(distance);
  // }, []);

  return (
    <>
      <Card className='p-5 shadow-sm'>
        <ImgSec>
          {findItem?.images ? (
            findItem?.images.map((imgName) => (
              <img
                src={`${process.env.PUBLIC_URL}/images/${imgName}`}
                key={imgName}
              />
            ))
          ) : (
            <img src={Bg} />
          )}
        </ImgSec>
        <CardBody>
          {findItem?.price && (
            <Price>
              <BiRupee />
              {findItem?.price}
            </Price>
          )}
          <Title>{findItem?.title}</Title>
          <Ul>
            <li>
              <span className='key'>Property type:</span>
              <span className='val'>{findItem?.type}</span>
            </li>
            <li>
              <span className='key'>Property status:</span>
              <span className='val'>{findItem?.status}</span>
            </li>
            <li>
              <span className='key'>Pincode:</span>
              <span className='val'>{findItem?.address?.pincode || ''}</span>
            </li>
            <li>
              <span className='key'>Bedrooms:</span>
              <span className='val'>{findItem?.bedrooms}</span>
            </li>
            <li>
              <span className='key'>bathrooms:</span>
              <span className='val'>{findItem?.bathrooms}</span>
            </li>
          </Ul>
          <Description>{findItem?.description}</Description>
          <hr />
          <Location onClick={() => showInMapClicked(findItem?.address)}>
            <GrLocation /> &nbsp;
            {`${findItem?.address?.house}, ${findItem?.address?.street}, ${findItem?.address?.area}, ${findItem?.address?.city}, ${findItem?.address?.city}, ${findItem?.address?.pincode}, ${findItem?.address?.state}`}
          </Location>
          <hr />
          <UserInfoContainer>
            <div className='d-flex align-items-center my-3'>
              <UserPic>
                <Initial>{findItem?.userInfo?.name[0] || 'J'}</Initial>
              </UserPic>
              <UserName>{findItem?.userInfo?.name || 'John Doe'}</UserName>
            </div>
            <div className='my3'>
              <h2>Posted By</h2>
              <hr />
              <h2>
                Mobile:{' '}
                <a
                  href={`tel:${findItem?.userInfo?.phone}`}
                  className='text-decoration-none'
                >
                  <strong>{findItem?.userInfo?.phone || '7788990011'}</strong>
                </a>
              </h2>
              <br />
              <h2>
                Email:{' '}
                <strong>{findItem?.userInfo?.email || 'admin@abc.com'}</strong>
              </h2>
            </div>
          </UserInfoContainer>
          <div style={{ height: '35vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDyfP6ISLisAkBON9Faek0xDaoVPd2Eiu0',
              }}
              defaultCenter={viewport.center}
              defaultZoom={viewport.zoom}
            >
              {findItem?.location && (
                <ImLocation
                  onClick={() => showInMapClicked(findItem?.address)}
                  style={{ color: '#1e90ff', fontSize: '3.9rem' }}
                  lat={findItem?.location?.lat}
                  lng={findItem?.location?.lon}
                />
              )}
              {
                <ImLocation
                  style={{ color: '#8c0', fontSize: '3.2rem' }}
                  lat={viewport.center.lat}
                  lng={viewport.center.lng}
                />
              }
            </GoogleMapReact>
            <div>
              <button
                className='btn btn-info mt-2'
                onClick={() => showInMapClicked(findItem?.address)}
              >
                Direction
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className='p-4 my-3'>
        <Row>
          <h1>Related Posts</h1>
          <hr />
          {related &&
            related.slice(0, 6).map((item, indx) => (
              <Col md={4} xs={12} key={indx}>
                <SingleRelatedPost
                  target='_blank'
                  rel='noopener'
                  to={`/category/${item?.category}/item/${item?._id}`}
                >
                  <Card className='p-3'>
                    <RelPostImgDiv>
                      <RelPostImg
                        src={
                          item?.images
                            ? `${process.env.PUBLIC_URL}/images/${item?.images?.[0]}`
                            : Bg
                        }
                      />
                    </RelPostImgDiv>
                    <RelPostBody>
                      <h3 style={{ color: '#222' }}>
                        <BiRupee />
                        {item?.price}
                      </h3>
                      <h2>{item?.title}</h2>
                      <p>{item?.title.slice(0, 50)}...</p>
                      <p>
                        <GrLocation />
                        &nbsp;
                        {`${item?.address?.area}, ${item?.address?.city}, ${item?.address?.pincode}, ${item?.address?.state}`}
                      </p>
                    </RelPostBody>
                  </Card>
                </SingleRelatedPost>
              </Col>
            ))}
        </Row>
      </Card>
    </>
  );
};

export default ArticleSection;
