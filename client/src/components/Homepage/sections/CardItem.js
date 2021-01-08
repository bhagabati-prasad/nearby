import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiRupee } from "react-icons/bi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const AdContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin: 0.5rem 0;
  overflow: hidden;
`;

const AdBody = styled.div`
  padding: 1.3rem;
`;

const AdTitle = styled.h2`
  color: #555;
  font-size: 1.7rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0.6rem;
`;

const AdPrice = styled.h3`
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 2.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  svg {
    font-size: 2.2rem;
  }
`;

const AdShortDesc = styled.p`
  color: #555;
  min-height: 4rem;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
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

const CardItem = ({ category, itemProps }) => {
  return (
    <div className='col-md-4 p-4'>
      <AdContainer>
        {/* Slider Image section */}
        <img
          src={`https://source.unsplash.com/400x230/?${category}`}
          className='img-fluid'
          alt='ad image'
        />
        <AdBody>
          <AdTitle>{itemProps.title}</AdTitle>
          <AdPrice>
            <BiRupee />
            {itemProps.price}
          </AdPrice>
          <AdShortDesc>{itemProps.shortDesc.slice(0, 90)}...</AdShortDesc>
          <div className='d-flex align-items-center justify-content-end'>
            <ViewBtn
              target='_blank'
              rel='noopener'
              to={`${itemProps.category}/${itemProps.id}`}
            >
              View
            </ViewBtn>
            <FavIconBtn to='/fav'>
              {/* <MdFavorite /> */}
              <MdFavoriteBorder />
            </FavIconBtn>
          </div>
        </AdBody>
      </AdContainer>
    </div>
  );
};

export default CardItem;
