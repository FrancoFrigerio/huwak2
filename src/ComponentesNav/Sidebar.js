import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
//  background: #15171c;

const Nav = styled.div`
    background-color: rgb(222, 225, 224, 0.8);
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  position:fixed;
  top:0%;
  z-index: 100;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position:fixed;
  z-index:100;
  
`;
const NavIcon3 = styled(Link)`
  margin-left: 80%;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position:fixed;
  z-index:100;
  
  
`;
 const NavIcon2 = styled(Link)`
   margin-left: 6rem;
   margin-top:1rem;
   font-size: 2rem;
   height: 50px;
   width:30px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   top:0;
   color:rgb(233, 234, 263);
   background : rgb(93, 94, 103);
   border-radius:12%;

   z-index:100;
   
 `;
// background: #15171c;
const SidebarNav = styled.nav`
    background: #414757;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    
   top:0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 100;
   
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: 'rgb(99, 99, 99)'}}/>
          </NavIcon>
            <NavIcon3 to="/">
                <BsIcons.BsFillHouseFill style={{color: 'rgb(99, 99, 99)'}}/>
            </NavIcon3>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon2 to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon2>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;