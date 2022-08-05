import { useEffect, useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Why from './Why';
import Stacks from './Stacks';
import FAQs from './FAQs';
import Structure from './Structure';
import Footer from '../../components/Footer';

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
      <FAQs/>
      <Structure/>
      <Footer/>
    </div>
  )
}

export default Training