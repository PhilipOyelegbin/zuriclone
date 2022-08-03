import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Talent = () => {
  
  useEffect(() => {
    const user = sessionStorage.getItem('data');
    const savedData = JSON.parse(user);
    setUserinfo(savedData);
    document.title = 'Zuri';
}, []);

  return (
    <></>
  )
}

export default Talent