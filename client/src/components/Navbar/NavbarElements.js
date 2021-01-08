import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

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

// Search field
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 40%;
  overflow: hidden;
  border-radius: 0.4rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchPincodeInput = styled.input`
  width: 20%;
  height: 4rem;
  outline: none;
  background: #eee;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  letter-spacing: 2px;
  border: 1px solid #666;
  border-radius: 0.4rem 0 0 0.4rem;
  &:focus {
    border: 1px solid #6c5ce7;
  }
`;
export const SearchAreaInput = styled(SearchPincodeInput)`
  flex-grow: 1;
  letter-spacing: 0.7px;
`;
export const SearchBtn = styled.button`
  height: 4rem;
  padding: 0 2rem;
  min-width: 4.3rem;
  font-size: 1.6rem;
  background: #666;
  color: #fff;
  outline: none;
  border: none;
  display: grid;
  place-items: center;
  border-radius: 0 0.4rem 0.4rem 0;
  &:focus {
    outline: none;
    border: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;
// end

export const UserInfo = styled.div`
  padding: 0 1rem;
  margin: 0 2.5rem;
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-bottom: 1px solid #999;
  }
  p {
    margin: 0 0 0 1rem;
    font-size: 1.8rem;
    white-space: nowrap;
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
