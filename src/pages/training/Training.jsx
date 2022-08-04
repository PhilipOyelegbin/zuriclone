import { useEffect, useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Why from './Why';
import Stacks from './Stacks';

const Training = ({props}) => {
    useEffect(() => {
        document.title = 'Zuri'
      }, [])
    
  return (
    <div className='bg-[#fffdf5]'>
      <Nav/>
      <Header/>
      <About/>
      <Why/>
      <Stacks/>
    </div>
  )
}

export default Training