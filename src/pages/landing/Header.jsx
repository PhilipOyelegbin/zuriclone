import { Link } from 'react-router-dom';
import zurilogo from '../../assets/zuri-logo-full.svg'

const Header = () => {
  return (
    <header className='bg-red-50 bg-opacity-30 flex flex-col items-center px-5 md:h-screen'>
      <div className='mb-[69px] pt-[69px] md:mb-0 md:pt-0'><img src={zurilogo} className="pt-12 mb-5 md:pt-16 md:mb-16" alt="logo" /></div>
      <div className='flex flex-col items-center text-center md:w-4/6'>
        <h2 className='text-[26px] font-[500] mb-[36px]'>Learn, Build, Grow.</h2>
        <p className='mb-[16px]'>Unlock your Brillance with our hands-on <a href="#" className='inner-link'>beginner</a> and <a href="#" className='inner-link'>expert training</a>. Zuri Team has been immensely successful in creating a global network of a highly adept intelligent workspace that can help your company achieve their mission-critical <a href="#" className='inner-link'>projects and goals</a></p>
        <div className='flex flex-col gap-5 mt-[92px] mb-12 md:gap-10 md:mb-0 md:flex-row'>
          <Link to="/training" className="btn bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500">I'm new to the Industry</Link>
          <Link to="/talent" className="btn bg-white hover:bg-red-500 text-red-500 border hover:text-white border-red-500">I need industry experience</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
