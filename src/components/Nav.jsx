import {NavLink} from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {

  const menuContent = [
    {id: 1, link: '/zuriclone'},
    {id: 2, link: '/training'},
    {id: 3, link: '/talent'},
    {id: 4, link: '/#About', label: "About"},
    {id: 5, link: '/#WhyUs', label: "Why Us"},
    {id: 5, link: '/#stacks', label: "Stacks Covered"},
    {id: 5, link: '/#faqs', label: "FAQs"}
  ];
  return (
    <nav className="flex justify-between items-center px-5 py-3">
      <img src={logo} alt="logo" />
      <ul className={`fixed gap-2 w-full pl-3 py-4 top-12 transition-all ease-in-out duration-300 md:flex md:items-center md:static md:w-auto md-pl-0 md:py-0 right-0 -right-full'}`}>
        {menuContent.map((contents) => (
          <li className="text-xl" key={contents.id}><NavLink className={({isActive}) => isActive ? 'line-through' : ''} to={contents.link}>{contents.label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )

}

export default Nav