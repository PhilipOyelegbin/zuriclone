import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import thumbs from '../../assets/thumbs.png';

const Nav = () => {

  const menuContent = [
    {id: 1, link: '/zuriclone'},
    {id: 2, link: '/training'},
    {id: 3, link: '/talent'},
    {id: 4, link: '/#About', label: "About"},
    {id: 5, link: '/#WhyUs', label: "Why Us?"},
    {id: 6, link: '/#stacks', label: "Stacks Covered"},
    {id: 7, link: '/#faqs', label: "FAQs"}
  ];
  return (
    <nav className="fixed w-screen bg-[#fffdf5] flex justify-between items-center px-5 md:px-10 py-3">
      <img src="https://training.zuri.team/logo.svg" className='w-36 md:w-60 xl:w-auto' alt="logo" />
      <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
        {menuContent.map((contents) => (
          <li className="text-[18px] text-xl" key={contents.id}><NavLink className={({isActive}) => isActive ? 'line-through' : ''} to={contents.link}>{contents.label}</NavLink></li>
        ))}
      </ul>
      <div className='flex items-center'>
        <img src={thumbs} className="bg-red-500 p-3 rounded-full h-14 w-14 md:h-20 md:w-20 z-30" alt="image" />
        <a href="#" className="btn bg-red-500 text-white rounded-full h-16 md:h-auto -ml-4 md:-ml-7 px-5 md:px-10">Enroll Now</a>
      </div>
    </nav>
  )

}

export default Nav