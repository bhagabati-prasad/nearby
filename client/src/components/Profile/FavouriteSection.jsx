import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import CardItem from '../CardItem';

const FavouriteSection = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {/* <h3>Favourites</h3> */}
      {/* <hr /> */}
      <Container>
        <Row>
          {user &&
          user?.userData?.favourites &&
          user?.userData?.favourites.length ? (
            user?.userData?.favourites.map((fav) => (
              <div className='col-md-4 col-12 px-3' key={fav._id}>
                <CardItem itemProps={fav} />
              </div>
            ))
          ) : (
            <div className='jumbotron'>
              <h1>Add items to favourite section</h1>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default FavouriteSection;
