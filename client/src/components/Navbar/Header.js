import { useState, useContext } from "react";
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
import { IoIosAdd } from "react-icons/io";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  // get user from context
  const { user } = useContext(UserContext);
  console.log("header ", user);

  const [location, setLocation] = useState({
    pincode: 751019,
    area: "Khandagiri, Bhubaneswar, Odisha, In",
  });

  const handleChange = (e) =>
    setLocation({ ...location, [e.target.name]: e.target.value });

  const logoutThis = () => {
    Axios.get("http://localhost:4000/api/logout/this").then((res) =>
      console.log(res)
    );
  };
  const logoutAll = () => {
    Axios.get("http://localhost:4000/api/logout/all").then((res) =>
      console.log(res)
    );
  };

  console.log(user);
  return (
    <>
      <HeaderNav>
        <NavContainer>
          {/* ------- */}
          <NavLogo to='/'>Nearby</NavLogo>
          {/* ------- */}
          <SearchForm>
            <SearchPincodeInput
              name='pincode'
              value={location.pincode}
              onChange={handleChange}
            />
            <SearchAreaInput
              name='area'
              value={location.area}
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
