const Stacks = () => {
    const stacks = [
        {id: 1, title: "Frontend Development", image1: "https://training.zuri.team/html.svg", image2: "https://training.zuri.team/css-3%20logo.svg", image3: "https://training.zuri.team/javascript%20logo.svg", image4: " ", description: "This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface."},
        {id: 2, title: "Backend Development", image1: "https://training.zuri.team/php2%20logo.svg", image2: "https://training.zuri.team/python-4%20logo.svg", image3: "https://training.zuri.team/javascript%20logo.svg", image4: " ", description: "This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database."},
        {id: 3, title: "Product Design", image1: "https://training.zuri.team/adobe-xd%20logo.svg", image2: "https://training.zuri.team/Figma%20logo.svg", image3: " ", image4: " ", description: "This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with."},
        {id: 4, title: "DevOPS", image1: "https://training.zuri.team/Ubuntu%20logo.svg", image2: "https://training.zuri.team/Bash%20logo.svg", image3: "https://training.zuri.team/aws%20logo.svg", image4: " ", description: "The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use."},
        {id: 5, title: "Fullstack Development", image1: "https://training.zuri.team/html.svg", image2: "https://training.zuri.team/css-3%20logo.svg", image3: "https://training.zuri.team/javascript%20logo.svg", image4: "https://training.zuri.team/python-4%20logo.svg", description: "A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training."},
        {id: 6, title: "Frameworks", image1: "https://training.zuri.team/Ubuntu%20logo.svg", image2: "https://training.zuri.team/React%20logo.svg", image3: "https://training.zuri.team/Django%20logo.svg", image4: " ", description: "During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster."},
    ]

  return (
    <section id="stacks" className="mt-36">
        <div className="bg-red-500 px-5 md:px-3">
            <div className="flex flex-col justify-center gap-2 pt-12 text-white md:px-7 xl:flex-row">
                <div className="xl:w-[40%] md:pt-6">
                    <div className="flex justify-center md:justify-end"><img src="https://training.zuri.team/section5wire.svg" className="h-10 md:mr-36 md:h-20" alt="image" /></div>
                    <p className="text-[18px]">We will help you get started</p>
                    <h3 className="md:w-11/12 text-3xl md:text-4xl font-bold">High quality training with hands-on practice</h3>
                    <p className="xl:w-[70%] text-[18px] pt-10 mb-8">We give you weekly tasks, ranging from easy to complex, as you progress from stage to stage; making it to the final stage means you are now ready to continue learning and growing independently.</p>
                    <a href="http://" className="bg-white text-red-500 px-7 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Enroll Now</a>
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-5 mt-9">
                        <a href="#" className="flex gap-2 items-center border-2 border-white rounded-full md:pl-3 py-3"><img src="https://training.zuri.team/hand.svg" className="w-6 h-6 md:w-12 md:h-12" alt="icon" />Teamwork</a>

                        <a href="#" className="flex gap-2 items-center border-2 border-white rounded-full pl-3 py-3"><img src="https://training.zuri.team/mentor.svg" className="w-6 h-6 md:w-12 md:h-12" alt="icon" />Mentorship</a>

                        <a href="#" className="flex gap-2 items-center border-2 border-white rounded-full pl-3 py-3"><img src="https://training.zuri.team/practice.svg" className="w-6 h-6 md:w-12 md:h-12" alt="icon" />Practise</a>

                        <a href="#" className="flex gap-2 items-center border-2 border-white rounded-full pl-3 py-3"><img src="https://training.zuri.team/games.svg" className="w-6 h-6 md:w-12 md:h-12" alt="icon" />Fun & Games</a>
                    </div>
                </div>
                <div className="xl:w-[55%] pt-6"><img src="https://training.zuri.team/section5-image.png" className="mx-auto" alt="images" /></div>
            </div>
            <img src="https://training.zuri.team/dotsection5.svg" className="w-28 h-28 lg:w-60 lg:h-60 p-9" alt="image" />
        </div>
        <div className="px-5 lg:px-10 pt-16">
            <p className="text-red-500 text-[18px] md:text-2xl">Scope Of Program</p>
            <h3 className="text-2xl md:text-4xl font-bold xl:w-[40%]">Here is the list of areas that will be explored in the training.</h3>
            <img src="https://training.zuri.team/section6.svg" className="h-28 lg:h-40 mx-auto" alt="" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {stacks?.map(data => {
                    return (
                        <div className="bg-white rounded-3xl p-10" key={data.id}>
                            <h3 className="text-[20px] font-semibold pb-5">{data.title}</h3>
                            <div className="flex justify-start items-center gap-1">
                                <img src={data.image1} className="h-8 md:h-12" alt="logo" />
                                <img src={data.image2} className="h-8 md:h-12" alt="logo" />
                                <img src={data.image3} className="h-8 md:h-12" />
                                <img src={data.image4} className="h-8 md:h-12" />
                            </div>
                            <p className="py-10">{data.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center my-16"><a href="#" className="bg-red-500 text-white text-[18px] rounded-full py-2 px-8">Enroll Now</a></div>
        </div>
    </section>
  )
}

export default Stacks