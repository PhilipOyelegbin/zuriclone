const Header = () => {
  return (
    <section className='flex flex-col items-center pt-32 lg:pt-52 px-10 lg:flex-row'>
        <div className='lg:w-1/2'>
            <h2 className='text-4xl text-center font-bold md:text-left'>Vetted and Trusted <span className='text-red-500'>talents</span></h2>
            <div className='flex justify-end'>
                <img src="https://talent.zuri.team/thick2.svg" className='mr-[16%] w-24' alt="image" />
            </div>
            <p className='pt-4 text-[19px] text-center md:text-left'>At Zuri Team, we train, test and place talent in various industries. We have access to the best pool of skills in the tech Industry.</p>
            <div className='flex justify-center md:justify-start gap-2 mt-8'>
                <a href="" className='btn w-28 md:w-auto bg-red-500 text-white rounded-br-lg'>Hire Talent</a>
                <a href="" className='btn w-36 md:w-auto bg-gray-700 text-white rounded-br-lg'>Join Talent pool</a>
            </div>
        </div>
        <div className='pt-10 lg:pt-0 lg:w-1/2'>
            <img src="https://talent.zuri.team/section1.png" className='lg:w-96 lg:float-right' alt="image" />
        </div>
    </section>
  )
}

export default Header