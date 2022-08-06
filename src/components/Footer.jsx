import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

const Footer = ({background, color, logo, width, socialcolor, copyright, linktext1, linktext2}) => {
  return (
    <footer className={`px-5 md:px-10 ${background} ${color}`}>
      <div className='flex flex-col justify-between items-center pt-20 md:flex-row'>
        <img src={logo} className={`h-10 ${width}`} alt="logo" />
        <div className='flex items-center gap-5 pt-4 md:pt-0'>
          <a href='#' target='_blank'><FaFacebook className={`w-11 h-9 ${socialcolor}`}/></a>
          <a href='#' target='_blank'><FaLinkedin className={`w-11 h-9 ${socialcolor}`}/></a>
          <a href='#' target='_blank'><FaTwitter className={`w-11 h-9 ${socialcolor}`}/></a>
          <a href='#' target='_blank'><FaYoutube className={`w-11 h-9 ${socialcolor}`}/></a>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between items-center py-5 md:flex-row'>
        <p className='text-sm text-center mt-2 md:mt-0 my-4'>&copy; {copyright}</p>
        <hr className='w-full md:hidden' />
        <div className='flex flex-col-reverse justify-center md:gap-5 md:flex-row'>
          <a href="" className='mx-auto my-4 md:my-0'>{linktext1}</a>
          <a href="" className='mx-auto my-4 md:my-0'>{linktext2}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer