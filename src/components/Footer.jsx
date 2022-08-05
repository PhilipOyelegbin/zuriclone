import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

const Footer = ({classname}) => {
  return (
    <footer className="px-5 md:px-10">
      <div className='flex flex-col justify-between items-center pt-20 md:flex-row'>
        <img src="https://training.zuri.team/logo.svg" className='w-72 h-10' alt="logo" />
        <div className='flex items-center gap-5 pt-4 md:pt-0'>
          <a href='#' target='_blank'><FaFacebook className='w-11 h-9 text-red-500'/></a>
          <a href='#' target='_blank'><FaLinkedin className='w-11 h-9 text-red-500'/></a>
          <a href='#' target='_blank'><FaTwitter className='w-11 h-9 text-red-500'/></a>
          <a href='#' target='_blank'><FaYoutube className='w-11 h-9 text-red-500'/></a>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between items-center py-5 md:flex-row'>
        <p className='text-sm mt-2 md:mt-0 my-4'>&copy; 2022 Zuri Training</p>
        <hr className='w-full md:hidden' />
        <div className='flex flex-col-reverse justify-center md:flex-row'>
          <a href="" className='mx-auto my-4 md:my-0'>Privacy Policy</a>
          <a href="" className='mx-auto my-4 md:my-0'>Ingressive For Good</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer