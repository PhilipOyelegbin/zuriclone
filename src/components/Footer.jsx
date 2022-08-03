import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

const Footer = ({classname}) => {
  return (
    <footer className={`flex lg:justify-between ${classname}`}>
      <div className='flex items-center gap-5'>
        <a href='https://mobile.facebook.com/philip.oyelegbin' target='_blank'><FaFacebook className='w-5 h-5'/></a>
        <a href='https://linkedin.com/in/PhilipOyelegbin' target='_blank'><FaLinkedin className='w-5 h-5'/></a>
        <a href='https://mobile.twitter.com/OyelegbinPhilip' target='_blank'><FaTwitter className='w-5 h-5'/></a>
        <a href='https://github.com/PhilipOyelegbin' target='_blank'><FaYoutube className='w-5 h-5'/></a>
      </div>
        <p className='text-sm mt-2 md:mt-0'>&copy; 2022 <a href="https://philipoyelegbin.github.io" className='text-teal-500' target="_blank" rel="noopener noreferrer">MoonShot</a> :: All right reserved</p>
    </footer>
  )
}

export default Footer