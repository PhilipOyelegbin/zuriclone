import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Program from './Program';

const Landing = () => {
   
    useEffect(() => {
      document.title = 'Zuri | Learn, Build, Grow.'
    }, [])

  return (
    <>
      <Header/>
      <Program/>
      <Footer/>
    </>
  )
}

export default Landing