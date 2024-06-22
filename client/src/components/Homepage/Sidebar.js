import { Aside, LinkContainer } from './HomeElements';
import { sidemenu } from '../sidebarmenu';
import SubMenu from './SubMenu';

const Sidebar = ({ handleActive }) => {
  return (
    <>
      <Aside>
        <LinkContainer>
          {sidemenu.map((item, index) => (
            <SubMenu key={index} item={item} handleShow={handleActive} />
          ))}
        </LinkContainer>
      </Aside>
    </>
  );
};

export default Sidebar;
