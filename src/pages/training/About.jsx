const About = () => {
  return (
    <section id="about" className="flex flex-col justify-between items-center px-5 md:px-10 border-y my-12 lg:flex-row">
        <p className="lg:w-[330px] lg:text-left text-center text-xl md:text-2xl lg:text-xl font-semibold pt-7">INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN DONATION...</p>
        <img src="https://training.zuri.team/ingresive.jpg" alt="image" />
        <p className="lg:w-[330px] text-center md:text-right text-[18px] pt-7 pb-10">to help increase the earning power of African youths by providing them with tech skills, community, tools, resources, and jobs... <a href="#" className="text-green-400 underline">Read More</a></p>
    </section>
  )
}

export default About