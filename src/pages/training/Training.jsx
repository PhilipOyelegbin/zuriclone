import { useEffect } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Why from './Why';
import Stacks from './Stacks';
import FAQs from './FAQs';
import Structure from './Structure';
import Footer from '../../components/Footer';

const Training = () => {
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
      <Footer background="bg-white" color="text-black" logo="https://training.zuri.team/logo.svg" width="w-72" socialcolor="text-red-500" copyright="2022 Zuri Training" linktext1="Privacy Policy" linktext2="Ingress For Good"/>
    </div>
  )
}

export default Training