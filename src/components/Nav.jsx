import {NavLink} from 'react-router-dom';
<<<<<<< HEAD
import { useState } from 'react';

const Nav = () => {
=======
import {FaHamburger, FaTimes} from 'react-icons/fa'
import { useState } from 'react';

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleMenuContent = () => {
    setShow(!show)
  };  
>>>>>>> 5c036b65f8f8dead80ccea492e3f31f49561eb48

  const menuContent = [
    {id: 1, link: '/'},
    {id: 2, link: '/training'},
    {id: 3, link: '/talent'}
  ];

<<<<<<< HEAD
  // return (
  //   <nav className="flex justify-between items-center px-5 py-3">
  //     <h1 className="text-2xl font-mono font-black">Zuri</h1>
  //     <ul className={`fixed gap-2 w-full pl-3 py-4 top-12 transition-all ease-in-out duration-300 md:flex md:items-center md:static md:w-auto md-pl-0 md:py-0 right-0 -right-full'}`}>
  //       {menuContent.map((contents) => (
  //         <li className="text-xl" key={contents.id}><NavLink className={({isActive}) => isActive ? 'line-through' : ''} to={contents.link}></NavLink></li>
  //       ))}
  //     </ul>
  //   </nav>
  // )
=======
  return (
    <nav className="flex justify-between items-center bg-slate-200 text-black px-5 py-3">
      <h1 className="text-2xl font-mono font-black">Techathon</h1>
      <button className="text-4xl cursor-pointer md:hidden block" onClick={handleMenuContent}>
        {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <FaHamburger className={`md:hidden h-6 w-6 ${show ? 'hidden' : 'block'}`} />

        {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
        <FaTimes className={`h-6 w-6 ${show ? 'block' : 'hidden'}`} />
      </button>
      <ul className={`fixed bg-slate-200 gap-2 w-full pl-3 py-4 top-12 transition-all ease-in-out duration-300 md:flex md:items-center md:static md:w-auto md-pl-0 md:py-0 ${show ? 'right-0' : '-right-full'}`}>
        {menuContent.map((contents) => (
          <li className="text-xl" key={contents.id}><NavLink className={({isActive}) => isActive ? 'line-through' : ''} to={contents.link} onClick={handleMenuContent}>{contents.label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
>>>>>>> 5c036b65f8f8dead80ccea492e3f31f49561eb48
}

export default Nav