import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { NavLinkItem } from "./NavbarElements";

const Menubar = () => {
  return (
    <div className='row bg-primary' style={{ borderRadius: "0 5px 5px 0" }}>
      {/* All Category menu div */}
      <div className='col-md-3 pl-0' style={{ cursor: "pointer" }}>
        <div className='px-5 py-4 bg-dark text-white'>
          <h2 className='d-flex justify-content-between align-items-center'>
            <span>
              <FaBars /> &nbsp; All Categories
            </span>
            <IoIosArrowDown />
          </h2>
        </div>
      </div>
      {/* End of All Category menu div */}
      {/* Navigation menus wrapper*/}
      <div className='col-md-9 d-flex align-items-center'>
        <NavLinkItem exact to='/'>
          Home
        </NavLinkItem>
        <NavLinkItem exact to='/services'>
          For Rents
        </NavLinkItem>
        <NavLinkItem exact to='/stores'>
          Stores
        </NavLinkItem>
        <NavLinkItem exact to='/health'>
          Health
        </NavLinkItem>
        <NavLinkItem exact to='/map'>
          Map
        </NavLinkItem>
        <NavLinkItem exact to='/about'>
          About
        </NavLinkItem>
        <NavLinkItem exact to='/contact'>
          Contact
        </NavLinkItem>
      </div>
    </div>
  );
};

export default Menubar;
