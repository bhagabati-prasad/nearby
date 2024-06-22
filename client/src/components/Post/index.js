import { Route, Switch, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PostRent from "./PostRent";
import PostService from "./PostService";

const MenuRow = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 0 2.5rem;
  margin: 1rem 0;
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #777;
  font-size: 1.9rem;
  font-weight: 400;
  padding: 0.4rem;
  margin-right: 1.8rem;
  &:hover {
    color: #1e90ff;
  }
`;

const PostFormContainer = styled.div`
  background: #fff;
  margin: 1.4rem 0;
`;

const Post = ({ path }) => {
  const location = useLocation().pathname;
  return (
    <>
      <MenuRow>
        <MenuLink
          to={`${path}/ad`}
          style={location === `${path}/ad` ? { color: "#111" } : {}}
        >
          Post Rent
        </MenuLink>
        <MenuLink
          to={`${path}/service`}
          style={location === `${path.url}/service` ? { color: "#111" } : {}}
        >
          Post Your Service
        </MenuLink>
      </MenuRow>

      <PostFormContainer>
        <Switch>
          <Route path={`${path}/ad`} component={PostRent} />
          <Route path={`${path}/service`} component={PostService} />
        </Switch>
      </PostFormContainer>
    </>
  );
};

export default Post;
