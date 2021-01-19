import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

// Sidebar menu
export const Aside = styled.aside`
  background: #fff;
  height: 56rem;
  max-height: 52.5rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 6px 6px;
`;

export const LinkContainer = styled.ul`
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0;
  &::-webkit-scrollbar {
    width: 0.33rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 8px;
  }
`;

export const List = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 0;
  text-align: left;
`;

export const SidebarMenu = styled.div`
  color: #222;
  background: ${({ subnav }) => (subnav ? "#fff" : "#444")};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1.8rem 1.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  text-transform: capitalize;
  position: relative;
  border-bottom: 0.2px solid #ebebeb;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    text-decoration: none;
    color: #fff;
    background: #333;
  }
`;

export const SidebarLink = styled(Link)`
  color: #222;
  background: ${({ subnav }) => (subnav ? "#fff" : "#444")};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1.8rem 1.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  text-transform: capitalize;
  position: relative;
  border-bottom: 0.2px solid #ebebeb;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    text-decoration: none;
    color: #fff;
    background: #333;
  }
`;

export const DropdownLink = styled(SidebarLink)`
  padding-left: 3rem;
  background: #ececec;
  justify-content: flex-start;
  span {
    padding-left: 1.2rem;
  }
`;

export const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.9rem;
  }
  p {
    font-size: 1.6rem;
    margin: 0 1.2rem;
  }
`;

// Home contents

export const HomeTopMap = styled.iframe`
  border: 0;
  width: 100%;
  height: 49.2rem;
  border-radius: 5px;
  filter: grayscale(80%);
  position: relative;
`;
