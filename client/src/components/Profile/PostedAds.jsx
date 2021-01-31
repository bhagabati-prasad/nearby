import { useContext, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CardItem from "../CardItem";
import { ItemContext } from "../Context/ItemContext";
import { UserContext } from "../Context/UserContext";

const PostedAds = () => {
  const { items } = useContext(ItemContext);
  const { user } = useContext(UserContext);

  const [postedItems, setPostedItems] = useState(null);

  useEffect(() => {
    const filteredItems =
      items &&
      user &&
      items.filter((item) => item.userId === user?.userData?._id);
    setPostedItems(filteredItems);
  }, [items]);

  return (
    <>
      <Container>
        <h1>You posted ads</h1>
        <hr />
        <Row>
          {postedItems ? (
            postedItems.map((item) => (
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
