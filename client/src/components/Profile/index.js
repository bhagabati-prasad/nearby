import { Route, Switch, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import FavouriteSection from "./FavouriteSection";
import ProfileInfo from "./Profile";
import PostedAds from "./PostedAds";

const Main = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;

const LinkSection = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 25px;
  margin: 1.5rem 0;
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #888;
  font-size: 1.7rem;
  padding: 4px 10px;
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    color: #1e90ff;
  }
`;

const Fav_PostAdSection = styled.div`
  min-height: 300px;
  background: #fff;
  width: 100%;
  margin-top: 10px;
  padding: 30px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Profile = ({ match }) => {
  const location = useLocation().pathname;
  return (
    <>
      <Main>
        <ProfileInfo />
        {/* Link section row */}
        <LinkSection>
          <MenuLink
            to={`${match.url}`}
            style={location === `${match.url}` ? { color: "#111" } : {}}
          >
            Favourites
          </MenuLink>
          <MenuLink
            to={`${match.url}/posted-ad`}
            style={
              location === `${match.url}/posted-ad` ? { color: "#111" } : {}
            }
          >
            Posted Ads
          </MenuLink>
        </LinkSection>
        {/* Routing section */}
        <Fav_PostAdSection>
          <Switch>
            <Route exact path={`${match.path}`} component={FavouriteSection} />
            <Route
              exact
              path={`${match.path}/posted-ad`}
              component={PostedAds}
            />
          </Switch>
        </Fav_PostAdSection>
      </Main>
    </>
  );
};

export default Profile;
