
const Why = () => {
    const benefits = [
        {id: "01", title: "Fully Remote", summary: "100% online classes available to anyone in the world.", class: "bg-red-500 text-white"},
        {id: "02", title: "Hands-on Experience", summary: "We don't just teach you theory, we show you how to build things", class: "bg-white text-gray-800"},
        {id: "03", title: "Collaborative Learning", summary: "We connect you with like minds to grow together.", class: "bg-white text-gray-800"},
        {id: "04", title: "Real-life Projects", summary: "We give CV worthy projects to help you hit the ground running.", class: "bg-white text-gray-800"},
        {id: "05", title: "Beginner Friendly", summary: "We provide step-by-step procedures on how to get things done.", class: "bg-white text-gray-800"},
        {id: "06", title: "In-program Mentorship", summary: "During and after the program you have access to experience seniors.", class: "bg-white text-gray-800"}
    ]

  return (
    <section id="why" className="pt-12 px-5 md:px-10">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 xl:w-1/2">
                <div className="flex justify-center md:justify-end"><img src="https://training.zuri.team/section3wire.svg" className="h-14 md:mr-60 md:h-20" alt="image" /></div>
                <h3 className="text-red-500 text-[18px] md:text-2xl">Why Zuri Training?</h3>
                <h2 className="text-2xl md:text-4xl text-gray-800 font-bold">Here at Zuri, you gain access to enough knowledge to introduce and aid your success in the tech industry.</h2>
            </div>
            <div className="hidden md:block w-1/3 xl:w-1/2">
                <img src="https://training.zuri.team/Star.jpg" className="w-48 mx-auto xl:w-auto" alt="image" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pt-12">
            {benefits?.map(data => {
                return (
                    <div className={` flex flex-col gap-5 px-12 py-16 rounded-xl ${data.class}`} key={data.key}>
                        <p className="text-5xl md:text-6xl font-bold">{data.id}</p>
                        <p className="w-[230px] text-2xl md:text-4xl font-medium">{data.title}</p>
                        <p className="text-[18px]">{data.summary}</p>
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default Why