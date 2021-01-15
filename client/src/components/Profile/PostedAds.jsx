import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

const PostedAds = () => {
  return (
    <>
      {/* <h3>Favourites</h3> */}
      {/* <hr /> */}
      <Container>
        <div className='jumbotron'>
          <h1 className='display-4'>You have not posted any ad.</h1>
        </div>
        <Row>
          {/* <div className='col-md-4 col-12 p-4'>
                <div className='card'>dg</div>
              </div>
              <div className='col-md-4 col-12 p-4'>
                <div className='card'>dg</div>
              </div>
              <div className='col-md-4 col-12 p-4'>
                <div className='card'>dg</div>
              </div> */}
        </Row>
      </Container>
    </>
  );
};

export default PostedAds;
