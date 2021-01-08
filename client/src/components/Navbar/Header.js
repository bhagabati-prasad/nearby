import { useState } from "react";
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

const Header = () => {
  const [location, setLocation] = useState({
    pincode: 751019,
    area: "Khandagiri, Bhubaneswar, Odisha, In",
  });
  const handleChange = (e) =>
    setLocation({ ...location, [e.target.name]: e.target.value });

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
              {/* <UserInfo>
              <span>J</span>
              <p>John Doe</p>
            </UserInfo> */}
              <RegisterBtn to='/signup'>Sign up</RegisterBtn>
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
