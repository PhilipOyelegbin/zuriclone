import { useEffect, useState } from 'react';
import Header from './Header';

const Training = () => {
    useEffect(() => {
        document.title = 'Zuri'
      }, [])
  return (
    <>
      <Header/>
    </>
  )
}

export default Training