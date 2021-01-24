import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Axios from "axios";
import CardItem from "../CardItem";

const PostedAds = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null || token === undefined) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const res = await Axios.post("http://localhost:4000/api/items", null, {
        headers: { "x-access-token": token },
      });
      setItems(res.data);
    };
    getItems();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {items ? (
            items.map((item) => (
              <div className='col-md-4 col-12 px-3' key={item._id}>
                <CardItem itemProps={item} />
              </div>
            ))
          ) : (
            <div className='jumbotron'>
              <h1 className='display-4'>You have not posted any ad.</h1>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PostedAds;
