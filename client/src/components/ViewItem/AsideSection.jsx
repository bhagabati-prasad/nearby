import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { GrLocationPin } from 'react-icons/gr';
import Postimg from '../../image/contactusbgfull.jpg';
import { ItemContext } from '../Context/ItemContext';
import { BiRupee } from 'react-icons/bi';

const SinglePostContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 1rem;
  border: 1.5px solid #999;
  border-radius: 5px;
  margin: 0.7rem 0;
`;
const PostImgDiv = styled.div`
  min-width: 10rem;
  height: 10rem;
  position: relative;
  overflow: hidden;
`;
const PostImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* width: 100%; */
`;
const PostBody = styled.div`
  padding: 0.4rem 1rem;
  h2 {
    font-size: 1.9rem;
    white-space: nowrap;
    width: 22rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    color: #555;
    font-size: 1.4rem;
    line-height: 1.3;
    margin: 0.6rem 0;
  }
`;

const AsideSection = () => {
  const { items } = useContext(ItemContext);
  console.log(items.filter((i) => i.category !== 'rent'));
  return (
    <>
      <Card className='p-4 shadow-sm'>
        <h1>Nearby Places</h1>
        <hr />
        {items &&
          items
            .filter((i) => i.category !== 'rent')
            .slice(0, 7)
            .map((item, indx) => (
              <SinglePostContainer
                target='_blank'
                rel='noopener'
                to={`/category/${item.category}/item/${item._id}`}
                key={indx}
              >
                <PostImgDiv>
                  <PostImg
                    src={
                      item?.images
                        ? `${process.env.PUBLIC_URL}/images/${item?.images?.[0]}`
                        : Postimg
                    }
                  />
                </PostImgDiv>
                <PostBody>
                  {item?.price && (
                    <h3 style={{ color: '#222' }}>
                      <BiRupee />
                      {item?.price}
                    </h3>
                  )}
                  <h2>{item?.title}</h2>
                  <p>{item?.description.slice(0, 50)}...</p>
                  <p>
                    <GrLocationPin />
                    &nbsp;
                    {`${item?.address.area}, ${item?.address.city}, ${item?.address?.pincode}, ${item?.address?.state}`}
                  </p>
                </PostBody>
              </SinglePostContainer>
            ))}
      </Card>
    </>
  );
};

export default AsideSection;
