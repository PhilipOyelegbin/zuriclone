const Structure = () => {
  return (
    <section class="px-5 md:px-10 pt-8">
        <div className="flex justify-between">
            <img src="https://training.zuri.team/section7wire.svg" className="h-10 ml-[10%] md:h-24 md:ml-32" alt="image" />
            <img src="https://training.zuri.team/Star1.svg" className="h-10 mr-[5%] md:h-24 md:mr-32" alt="image" />
        </div>
        <p className="text-[18px] md:text-xl text-red-500 text-center">Structure</p>
        <h3 className="text-2xl md:text-3xl text-center font-bold pb-5">Program Structure</h3>
        <p className="md:text-[18px] text-center pb-14">There are 2 broad paths in this program based on your availability.</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="bg-gray-800 text-white rounded-[50px] py-16 px-12">
                <h2 className="text-4xl font-bold pb-4">Full-time</h2>
                <p className="pb-4">Requires at least 25 hours weekly on program content.</p>
                <p className="text-[18px] font-semibold">Available Tracks:</p>
                <ul className="list-disc list-inside pb-4">
                    <li className="indent-1">Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS, JavaScript) & DevOps</li>
                    <li>Design: Figma, Adobe XD</li>
                </ul>
                <p className="text-[18px] font-semibold">Phases:</p>
                <ul className="list-disc list-inside pb-4">
                    <li>Training Phase</li>
                    <li>Project Phase</li>
                </ul>
                <p className="text-[18px] font-semibold">Post Program:</p>
                <ul className="list-disc list-inside pb-4">
                    <li>Certification of Attendance</li>
                    <li>Zuri Internship</li>
                    <li>Laptop Reward (upgrade or new one)</li>
                    <li>Job Placement</li>
                    <li>Zuri Talent Pool</li>
                    <li>More Training:</li>
                    <p>Interview Prep</p>
                    <p>Algorithms & Data Structure</p>
                    <p>Freelance Setup & Training</p>
                    <p>LinkedIn Optimization</p>
                    <p>CV Review</p>
                </ul>
            </div>

            <div className="bg-gray-800 text-white rounded-[50px] py-16 px-12">
                <h2 className="text-4xl font-bold pb-4">Part-time</h2>
                <p className="pb-4">Requires at least 11 hours weekly on program content.</p>
                <p className="text-[18px] font-semibold">Available Tracks:</p>
                <ul className="list-disc list-inside pb-4">
                    <li className="pb-4">Frontend:<br/>HTML, CSS, JavaScript</li>
                    <li className="pb-4">Backend: Can only select one backend language<br/>Python,<br/>PHP,<br/>JavaScript</li>
                    <li className="pb-4">Design:<br/>Figma</li>
                </ul>
                <p className="text-[18px] font-semibold">Phases:</p>
                <ul className="list-disc list-inside pb-4"><li>Training Phase</li></ul>
                <p className="text-[18px] font-semibold">Post Program:</p>
                <ul className="list-disc list-inside">
                    <li>Certification of Attendance</li>
                    <li>Zuri Internship</li>
                </ul>
            </div>
        </div>
        <div className="w-1/3 xl:w-1/2 pt-12 mb-7">
            <img src="https://training.zuri.team/circle.png" className="hidden md:block h-24 xl:w-auto" alt="image" />
        </div>
        <div className="text-white bg-red-500 rounded-3xl grid grid-col">
            <p className="text-[18px] text-center pt-16">Get Started</p>
            <h2 className="text-5xl text-center font-bold pt-5 mx-auto md:w-[40%] pb-10">Break into the tech industry like a Pro</h2>
            <a href="#" className="bg-white text-red-500 text-[18px] rounded-full py-2 px-6 mx-auto">Enroll Now</a>
            <div className="flex justify-end">
                <img src="https://training.zuri.team/circle.png" className="w-48" alt="image" />
            </div>
        </div>
    </section>
  )
}

export default Structure