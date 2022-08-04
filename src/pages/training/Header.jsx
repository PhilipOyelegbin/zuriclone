import lady1 from '../../assets/lady1.jpg';

const Header = () => {
  return (
<header className='pt-24 xl:pt-48 px-10'>
    <div className="flex flex-col items-center xl:flex-row">
        <img src="https://training.zuri.team/lady1.jpg" className="md:h-[600px] lg:h-[700px] xl:h-80" alt="image" />
        <div className="text-center text-[18px] text-gray-800">
            <h3 className='text-red-500'>And now your search has ended...</h3>
            <h2 className='font-semibold text-2xl md:text-[37px] lg:text-[49px] pt-2'>Gain knowledge to help you scale through the tech industry for free.</h2>
            <div className='flex justify-end mb-7 mr-4 md:mr-8'>
              <img src="https://training.zuri.team/line.svg" className='w-[35%] xl:w-1/2' alt="image" />
            </div>
            <p className='pb-10 md:mx-44 xl:mx-24'>A basic introduction to software development and product design aimed at complete beginners, which anyone can join</p>
            <a href="#" className="btn bg-red-500 text-white rounded-full px-8 py-2">Enroll Now</a>
            <div className='flex justify-end m-auto'>
              <img src="https://training.zuri.team/section1wire.svg" className='h-20 md:h-auto md:mr-64 xl:mr-48' alt="image" />
            </div>
        </div>
        <img src="https://training.zuri.team/male1.jpg" className='hidden h-80 xl:block' alt="image" />
    </div>
</header>
  )
}

export default Header