import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'HOMBRES',
    path: '#',
    icon: <AiIcons.AiFillStar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'VERANO',
        path: '/hombres/verano',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'INVIERNO',
        path: '/hombres/invierno',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'CHOMBAS',
        path: '/hombres/chombas',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'JOGGERS',
        path: '/hombres/joggers',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'MALLAS',
        path: '/hombres/mallas',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'SHORTS',
        path: '/hombres/shorts',
       icon: <AiIcons.AiOutlineStar/>,
      }
    ]
  },
  {
    title: 'MUJERES',
    path: '#',
    icon: <AiIcons.AiFillStar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'VERANO',
        path: '/mujeres/verano',
        icon: <AiIcons.AiOutlineStar/>,
        cName: 'sub-nav'
      },
      {
        title: 'INVIERNO',
        path: '/mujeres/invierno',
        icon: <AiIcons.AiOutlineStar/>,
        cName: 'sub-nav'
      },
      {
        title: 'REMERAS',
        path: '/mujeres/remeras',
       icon: <AiIcons.AiOutlineStar/>,
      },
      
      {
        title: 'INTERIOR',
        path: '/mujeres/interior',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'JEANS',
        path: '/mujeres/jeans',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'CATALOGO',
        path: '/mujeres/catalogo',
       icon: <AiIcons.AiOutlineStar/>,
      }

    ]
  },

  {
    title: 'NIÑOS',
    path: '#',
    icon: <AiIcons.AiFillStar />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'VERANO',
        path: '/niños/verano',
       icon: <AiIcons.AiOutlineStar/>,
      },
      {
        title: 'INVIERNO',
        path: '/niños/invierno',
       icon: <AiIcons.AiOutlineStar/>,
      }
    ]
  },
  {
    title: 'CONTACTO',
    path: '/contacto',
    icon: <IoIcons.IoMdHelpCircle />
  }
];