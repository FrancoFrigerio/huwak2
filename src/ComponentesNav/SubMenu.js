import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: rgb(231, 231, 231);
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: rgb(231, 231, 231);
    text-decoration:none;
    background: rgba(35, 156, 255, 0.0982);
    border-left: 2px solid rgb(35, 156, 255);
    
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;
// background: #1b2130;
const DropdownLink = styled(Link)`
background: rgba(35, 156, 255, 0.1002);
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgb(200, 200, 200);
  font-weight: 500;
  font-size: 18px;
  &:hover {
    background: rgba(35, 156, 255, 0.1002);
    text-decoration: none;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened: item.subNav? item.iconClosed: null}
            
            
            
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;