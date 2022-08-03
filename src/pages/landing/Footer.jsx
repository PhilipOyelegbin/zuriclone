import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';
import zurilogo from '../../assets/zuri-logo-full.svg';

const Footer = () => {
  return (
    <footer className='mt-52 px-5'>
        <div className='flex flex-col items-center p-5 mb-12 md:flex-row md:justify-between md:items-start'>
            <div className="w-fit">
                <img src={zurilogo} className="w-40 h-[25px] mb-4 md:w-auto md:h-auto md:mb-0" alt="footer-image" />
            </div>
            <div className='flex flex-col text-center w-fit md:text-left'>
                <h3 className='font-medium text-2xl mt-5 mb-2 md:text-base md:mt-0'>Links</h3>
                <p className='text-red-500 mb-4'>Store</p>
                <p className='text-red-500 mb-4'>Blog</p>
            </div>
            <div className='flex flex-col text-center w-fit md:text-left'>
                <h3 className='font-medium text-2xl mt-5 mb-2 md:text-base md:mt-0'>Contact</h3>
                <p className='text-sm mb-4'>8 Jubliee-CMD Road, Magodo,<br/> Lagos State</p>
                <a className='inner-link text-sm mb-4' href="#">hello@zuri.team</a>
            </div>
            <div className="w-fit text-center md:text-left">
                <h3 className='font-medium text-2xl mt-5 mb-2 md:text-base md:mt-0'>Follow Us</h3>
                <div className='flex justify-center items-center gap-2'>
                    <a href='https://mobile.facebook.com/philip.oyelegbin' target='_blank'><FaFacebook className='w-5 h-5'/></a>
                    <a href='https://mobile.twitter.com/OyelegbinPhilip' target='_blank'><FaTwitter className='w-5 h-5'/></a>
                    <a href='https://github.com/PhilipOyelegbin' target='_blank'><FaInstagram className='w-5 h-5'/></a>
                    <a href='https://linkedin.com/in/PhilipOyelegbin' target='_blank'><FaLinkedin className='w-5 h-5'/></a>
                </div>
            </div>
        </div>
        <div><hr className='m-4 border border-solid' /></div>
        <div>
            <p className='text-center font-bold mt-8 mb-4 pb-24 md:mt-0'>&copy; 2022 ZURI TEAM</p>
        </div>
    </footer>
  )
}

export default Footer