import { useState } from 'react';
import {
  List,
  SidebarMenu,
  SidebarLink,
  DropdownLink,
  SidebarTitle,
} from './HomeElements';

const SubMenu = ({ item, handleShow }) => {
  const [subnav, setSubnav] = useState(false);
  const toggleDropdown = () => setSubnav(!subnav);

  return (
    <>
      <List onClick={item.subnav && toggleDropdown}>
        {item && item.subnav ? (
          <SidebarMenu subnav={subnav.toString()}>
            <SidebarTitle>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </SidebarTitle>
            {item.subnav && subnav
              ? item.iconOpened
              : item.subnav
              ? item.iconClosed
              : null}
          </SidebarMenu>
        ) : (
          <SidebarLink
            to={item.path}
            subnav={subnav.toString()}
            onClick={handleShow}
          >
            <SidebarTitle>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </SidebarTitle>
            {item.subnav && subnav
              ? item.iconOpened
              : item.subnav
              ? item.iconClosed
              : null}
          </SidebarLink>
        )}
        {subnav && item.subnav && (
          <div>
            {item.subnav.map((link, index) => (
              <DropdownLink
                key={index}
                to={`/category/${link.path}`}
                onClick={handleShow}
              >
                {link.icon}
                <span>{link.title}</span>
              </DropdownLink>
            ))}
          </div>
        )}
      </List>
    </>
  );
};

export default SubMenu;
