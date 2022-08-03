import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Training = () => {

    useEffect(() => {
        const data = sessionStorage.getItem('data');
        const userinput = JSON.parse(data)
        setUserinfo(userinput);
        document.title = 'Zuri';
    }, [])
    
  return (
    <></>
  )
}

export default Training