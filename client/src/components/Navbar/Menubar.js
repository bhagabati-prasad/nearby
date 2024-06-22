import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLinkItem } from './NavbarElements';
import Sidebar from '../Homepage/Sidebar';
import './menubar.css';
import { Link } from 'react-router-dom';
import { ItemContext } from '../Context/ItemContext';
import { useHistory } from 'react-router-dom';

const MenuBar = styled.nav`
  height: 4.5rem;
  width: 102%;
  display: flex;
  background-color: #1e90ff;
  margin-left: -6px;
`;
const AllCategoryMenuWrap = styled.div`
  height: 100%;
  width: 33%;
  color: #fff;
  background-color: #444;
  position: relative;
  cursor: pointer;
`;
const AllCategoryMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 1.6rem;
`;
const SidebarDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${(props) => (props.show ? 'auto' : '0')};
  overflow: hidden;
  z-index: 9;
`;
const NavMenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4vw;
`;

const Menubar = () => {
  const history = useHistory();
  const { items } = useContext(ItemContext);
  const [active, setActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const handleHideShow = () => setActive(!active);

  const handleSearch = (e) => {
    if (e.target.value) {
      let filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (!filteredItems.length) {
        filteredItems = items.filter(
          (item) =>
            item.address.city
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item.address.area
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
        );
      }
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchCLick = (item) => {
    window.location.href = `http://localhost:3000/category/${item?.category}/item/${item?._id}`;
  };

  return (
    <>
      <MenuBar>
        <AllCategoryMenuWrap>
          <AllCategoryMenu onClick={handleHideShow}>
            <span>
              <span>
                <FaBars />
              </span>
              &nbsp; All Categories
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </AllCategoryMenu>
          <SidebarDropdown show={active}>
            <Sidebar handleActive={handleHideShow} />
          </SidebarDropdown>
        </AllCategoryMenuWrap>
        <NavMenuContainer>
          <NavLinkItem exact to='/'>
            Home
          </NavLinkItem>
          <NavLinkItem exact to='/category/rent'>
            For Rents
          </NavLinkItem>
          <NavLinkItem exact to='/category/stores'>
            Stores
          </NavLinkItem>
          {/* <NavLinkItem exact to='/category/health'>
            Health
          </NavLinkItem>
          <NavLinkItem exact to='/map'>
            Map
          </NavLinkItem> */}
          <NavLinkItem exact to='/about'>
            About
          </NavLinkItem>
          <NavLinkItem exact to='/contact'>
            Contact
          </NavLinkItem>
          <div className='search'>
            <input
              type='text'
              onChange={handleSearch}
              placeholder='Search places'
            />
            <div className='seggestions'>
              {suggestions &&
                !!suggestions.length &&
                suggestions.map((item) => (
                  <Link
                    to='/'
                    key={item?._id}
                    onClick={() => handleSearchCLick(item)}
                  >
                    {item?.title}
                  </Link>
                ))}
            </div>
          </div>
        </NavMenuContainer>
      </MenuBar>
    </>
  );
};

export default Menubar;
