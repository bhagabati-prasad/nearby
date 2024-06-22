import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HeaderNav = styled.header`
  width: 100%;
  padding-top: 2.5rem;
`;

export const NavContainer = styled(Col)`
  height: 10rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const NavLogo = styled(Link)`
  color: #444;
  text-decoration: none;
  font-size: 2.9rem;
  font-weight: 700;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 5rem;
  transition: color 0.3s;
  &:hover {
    text-decoration: none;
    color: #666;
  }
`;

export const NavXtraMenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToggleMenu = styled(GiHamburgerMenu)`
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    margin: 0 1rem 0 2rem;
  }
`;

export const UserInfoContainer = styled.div`
  margin-right: 2rem;
  position: relative;
  padding: 0.6rem 0.4rem;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const UserImgContainer = styled.div`
  height: 3.4rem;
  width: 3.4rem;
  background-color: #8c0;
  border-radius: 50%;
  margin-right: 0.7rem;
  position: relative;
`;
export const UserInitials = styled.h3`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const UserImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
export const UserName = styled.h2`
  margin: 0;
`;
export const UserDropdown = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.6rem;
  z-index: 999;
`;
export const UserdropdownLink = styled(Link)`
  text-decoration: none;
  padding: 0.4rem 1rem;
  margin: 1rem 0;
  display: block;
  width: 100%;
  color: #222;
  background-color: #fff;
  font-size: 1.7rem;
  transition: all 0.24s;
  &:hover {
    color: #1e90ff;
    background-color: #eee;
  }
`;
export const UserDropdownBtn = styled.button`
  padding: 0.4rem 1rem;
  text-align: left;
  margin: 1rem 0;
  display: block;
  width: 100%;
  color: #222;
  background-color: #fff;
  font-size: 1.7rem;
  outline: none;
  border: none;
  transition: all 0.24s;
  &:hover {
    color: #1e90ff;
    background-color: #eee;
  }
`;

export const PostAdBtn = styled(Link)`
  height: 4rem;
  padding: 0 1rem;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  color: #6c5ce7;
  font-size: 2.1rem;
  text-decoration: none;
  white-space: nowrap;
  background: #fff;
  cursor: pointer;
  border: 2px solid #6c5ce7;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background: #6c5ce7;
    transform: translateY(-3px);
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.24), 0 10px 8px rgba(0, 0, 0, 0.04);
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    margin: 0 0.5rem;
  }
`;

export const RegisterBtn = styled(PostAdBtn)`
  width: 100%;
  justify-content: center;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  background: #666666;
  color: #fff;
  border: 2px solid #999;
  margin-right: 2rem;
  &:hover {
    background: #fff;
    color: #222;
    border: 2px solid #222;
    transform: none;
    box-shadow: none;
  }
`;

// Menu bar styled elements

export const NavLinkItem = styled(Link)`
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.7rem;
  /* font-size: calc(1.86rem - 0.14vw); */
  font-weight: 600;
  font-family: sans-serif;
  text-decoration: none;
  /* text-transform: uppercase; */
  letter-spacing: 0.5px;
  transition: color 0.3s;
  &:hover {
    color: #444;
    text-decoration: none;
  }
  &.active {
    color: #111;
  }
`;
