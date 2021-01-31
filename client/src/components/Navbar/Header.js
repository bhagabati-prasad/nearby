import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import {
  HeaderNav,
  NavContainer,
  NavLogo,
  NavXtraMenuWrap,
  ToggleMenu,
  SearchForm,
  SearchPincodeInput,
  SearchAreaInput,
  SearchBtn,
  UserInfo,
  RegisterBtn,
  PostAdBtn,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { UserContext } from "../Context/UserContext";
import { LocationContext } from "../Context/LocationContext";

const Header = () => {
  const history = useHistory();
  // get user from context
  const { user, setUser } = useContext(UserContext);
  const { location } = useContext(LocationContext);

  const [loc, setLoc] = useState({
    pincode: "",
    area: "",
  });

  const handleChange = (e) =>
    setLoc({ ...loc, [e.target.name]: e.target.value });
  const handleSubmitLocation = (e) => {
    e.preventDefault();
    console.log(loc);
  };

  const logoutThis = () => {
    Axios.post("http://localhost:4000/api/logout/this", null, {
      headers: { "x-access-token": user.token },
    }).then((res) => {
      setUser({ ...res.data });
      localStorage.setItem("auth-token", "");
      history.push("/");
    });
  };
  const logoutAll = () => {
    Axios.post("http://localhost:4000/api/logout/all", null, {
      headers: { "x-access-token": user.token },
    }).then((res) => {
      setUser({ ...res.data });
      localStorage.setItem("auth-token", "");
      history.push("/");
    });
  };

  useEffect(() => {
    setLoc({
      pincode: location && location.pincode,
      area:
        location &&
        `${location.city}, ${location.state}, ${location.country_code}`,
    });
  }, [location]);

  return (
    <>
      <HeaderNav>
        <NavContainer>
          {/* ------- */}
          <NavLogo to='/'>Nearby</NavLogo>
          {/* ------- */}
          <SearchForm onSubmit={handleSubmitLocation}>
            <SearchPincodeInput
              name='pincode'
              value={loc.pincode}
              onChange={handleChange}
            />
            <SearchAreaInput
              name='area'
              value={loc.area}
              onChange={handleChange}
            />
            <SearchBtn>Search</SearchBtn>
          </SearchForm>
          {/* ------- */}
          <NavXtraMenuWrap>
            <div style={{ minWidth: "90px", margin: "0 1.5rem" }}>
              {user.isLoggedIn ? (
                <>
                  <UserInfo>
                    <span>J</span>
                    <p>John Doe</p>
                  </UserInfo>
                  <button className='btn btn-warning mx-1' onClick={logoutThis}>
                    Logout this
                  </button>
                  <button className='btn btn-success mx-1' onClick={logoutAll}>
                    Logout all
                  </button>
                </>
              ) : (
                <RegisterBtn to='/signup'>Sign up</RegisterBtn>
              )}
            </div>

            <PostAdBtn to='/post/ad'>
              <IoIosAdd /> <p>Post Ad</p>
            </PostAdBtn>
          </NavXtraMenuWrap>
          {/* ------- */}
          <ToggleMenu />
        </NavContainer>
      </HeaderNav>
    </>
  );
};

export default Header;
