const Impact = () => {
  return (
    <section className="">
        <div className="flex flex-col px-5 md:px-10 bg-red-50 pt-20 mt-24 pb-36 md:flex-row">
            <div className="md:w-1/2 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold">We have impacted the lives of <span className="text-red-500">thousands</span> around the world</h2>
                <p className="font-bold text-[19px] pt-2">6,000 trained in 14 months</p>
                <p className="text-[19px] pt-2">Talent Placed in 5 countries</p>
                <div className="flex gap-3 md:gap-5 pt-5">
                    <img src="https://talent.zuri.team/GER.svg" className="w-12 h-12 md:w-20 md:h-20 bg-white p-3 rounded-lg" alt="nation" />
                    <img src="https://talent.zuri.team/ENG.svg" className="w-12 h-12 md:w-20 md:h-20 bg-white p-3 rounded-lg" alt="nation" />
                    <img src="https://talent.zuri.team/ind.svg" className="w-12 h-12 md:w-20 md:h-20 bg-white p-3 rounded-lg" alt="nation" />
                    <img src="https://talent.zuri.team/NIG.svg" className="w-12 h-12 md:w-20 md:h-20 bg-white p-3 rounded-lg" alt="nation" />
                    <img src="https://talent.zuri.team/ussa.svg" className="w-12 h-12 md:w-20 md:h-20 bg-white p-3 rounded-lg" alt="nation" />
                </div>
            </div>
            <div className="pt-20 md:w-1/2 md:pt-6">
                <img src="https://talent.zuri.team/section2.png" className="md:w-96 md:float-right" alt="image" />
            </div>
        </div>

        <div className="px-5 md:px-10 py-24">
            <h2 className="pt-6 pb-9 text-2xl md:text-3xl font-bold md:w-1/2">Skills of our <span className="text-red-500">talents</span> that you will need</h2>
            <div className="grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4 gap-5">
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">UI/UX Designers</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Backend Developers</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">DevOps Engineers</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Frontend Developers</p>
            </div>
            <h2 className="pt-14 pb-9 text-2xl md:text-3xl font-bold">Where our talents work</h2>
            <div className="grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-6 gap-5">
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">GitHub</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Microsoft</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Reskill Americans</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Flutterwave</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Google</p>
                <p className="shadow-lg shadow-slate-400 rounded-lg p-3 hover:-translate-y-3 duration-200">Career Transitioners</p>
            </div>

        </div>
    </section>
  )
}

export default Impact