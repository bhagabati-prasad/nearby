import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import {
  HeaderNav,
  NavContainer,
  NavLogo,
  NavXtraMenuWrap,
  ToggleMenu,
  UserInfo,
  UserImgContainer,
  UserInitials,
  UserImg,
  UserName,
  RegisterBtn,
  PostAdBtn,
  UserDropdown,
  UserdropdownLink,
  UserDropdownBtn,
  UserInfoContainer,
} from './NavbarElements';
import { useHistory } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { UserContext } from '../Context/UserContext';

const Header = () => {
  const history = useHistory();
  // get user from context
  const { user, setUser } = useContext(UserContext);
  const [owner, setOwner] = useState(user?.userData);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  useEffect(() => setOwner(user?.userData), [user]);

  const logoutThis = () => {
    Axios.post('http://localhost:4000/api/logout/this', null, {
      headers: { 'x-access-token': user.token },
    }).then((res) => {
      setShow(false);
      setUser({ ...res.data });
      localStorage.setItem('auth-token', '');
      history.push('/');
    });
  };
  const logoutAll = () => {
    Axios.post('http://localhost:4000/api/logout/all', null, {
      headers: { 'x-access-token': user.token },
    }).then((res) => {
      setShow(false);
      setUser({ ...res.data });
      localStorage.setItem('auth-token', '');
      history.push('/');
    });
  };

  return (
    <>
      <HeaderNav>
        <NavContainer>
          {/* ------- */}
          <NavLogo to='/'>Nearby</NavLogo>
          <NavXtraMenuWrap>
            {user && user.isLoggedIn ? (
              <>
                <UserInfoContainer>
                  <UserInfo onClick={handleShow}>
                    <UserImgContainer>
                      {owner?.avatar ? (
                        <UserImg src={owner?.avatar} />
                      ) : (
                        <UserInitials>J</UserInitials>
                      )}
                    </UserImgContainer>
                    <UserName>
                      {`${owner?.firstName} ${owner?.lastName}`}
                    </UserName>
                  </UserInfo>
                  <UserDropdown show={show}>
                    <UserdropdownLink to='/user/profile' onClick={handleShow}>
                      Profile
                    </UserdropdownLink>
                    <UserDropdownBtn onClick={logoutThis}>
                      Logout this
                    </UserDropdownBtn>
                    <UserDropdownBtn onClick={logoutAll}>
                      Logout all
                    </UserDropdownBtn>
                  </UserDropdown>
                </UserInfoContainer>
                {/* <button className='btn btn-warning mx-1' onClick={logoutThis}>
                    Logout this
                  </button>
                  <button className='btn btn-success mx-1' onClick={logoutAll}>
                    Logout all
                  </button> */}
                <PostAdBtn to='/post/ad'>
                  <IoIosAdd /> <p>Post Ad</p>
                </PostAdBtn>
              </>
            ) : (
              <RegisterBtn to='/signup'>Sign up</RegisterBtn>
            )}
          </NavXtraMenuWrap>
          {/* ------- */}
          <ToggleMenu />
        </NavContainer>
      </HeaderNav>
    </>
  );
};

export default Header;
