const Nav = () => {
  const menuContent = [
    {id: 1, link: '#home', label: "Home"},
    {id: 2, link: '#impact', label: "Impact"},
    {id: 3, link: '#why-us', label: "Why Us"}
  ];
  return (
    <nav className="fixed w-screen bg-white flex justify-between items-center px-3 py-1 md:px-10 md:py-3">
      <img src="https://talent.zuri.team/logo2.svg" className='w-36 md:w-60 xl:w-auto' alt="logo" />
      <ul className="hidden lg:flex items-center gap-10 xl:gap-7">
        {menuContent?.map((contents) => (
          <li className="text-[18px] text-xl my-4 hover:border-b-2 border-red-500" key={contents.id}><a href={contents.link}>{contents.label}</a></li>
        ))}
      </ul>
      <div className='flex items-center'>
        <a href="#" className="w-28 md:w-auto btn py-1 bg-red-500 text-white rounded-br-lg md:py-2">Hire talents</a>
      </div>
    </nav>
  )

}

export default Nav