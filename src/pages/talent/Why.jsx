const Why = () => {
    const reasons = [
        {id: 1, image: "https://talent.zuri.team/people.svg", description: "Zuri Team has a highly skilled set of talents that are built on referral and successful partnerships."},
        {id: 2, image: "https://talent.zuri.team/mech.svg", description: "Our recruiters are exceptionally skilled in identifying top talent around the globe and matching them with the client's needs."},
        {id: 3, image: "https://talent.zuri.team/hand.svg", description: "We have an 85% fill ratio for every open position we partner for."},
        {id: 4, image: "https://talent.zuri.team/write.svg", description: "Contract renewal rate for our consultant is 90 percent."},
        {id: 5, image: "https://talent.zuri.team/many.svg", description: "60% of our consultants are converted to full-time employees."},
    ]

  return (
    <section className='bg-red-50 px-10 pb-20'>
        <h2 className="text-2xl md:text-4xl text-center font-bold pt-24">Why Hire our <span className="text-red-500">Talents</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20">
            {reasons?.map(reason => {
                return (
                    <div className="w-full bg-white hover:bg-gray-800 hover:text-white rounded-br-xl py-11 px-2 mx-auto md:w-auto" key={reason.id}>
                        <img src={reason.image} className="mx-auto" alt="icon" />
                        <p className="text-center pt-4">{reason.description}</p>
                    </div>
                )
            })}
        </div>
        <div className='flex justify-center gap-5 mt-16'>
                <a href="" className='w-28 md:w-auto btn bg-red-500 text-white rounded-br-lg px-3'>Hire Talent</a>
                <a href="" className='w-40 md:w-auto btn bg-gray-700 text-white rounded-br-lg px-3'>Join Talent pool</a>
            </div>
    </section>
  )
}

export default Why