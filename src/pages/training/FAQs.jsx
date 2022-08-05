import { useState } from "react";
import {FaPlus, FaTwitter} from "react-icons/fa"

const FAQs = () => {
    const [show, setShow] = useState(false);

    const faq = [
        {id: 1, title: "Would I have to pay to enroll for the training?", summary: "No, the program is completely free thanks to Ingressive For Good"},
        {id: 2, title: "What are the things I would need to participate?", summary: "You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship."},
        {id: 3, title: "What happens if i join and I’m not active?", summary: "Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long"},
        {id: 4, title: "Can I switch from the part-time track to full-time and vice versa?", summary: "Unfortunately, no, you cannot switch from part-time to full-time and vice-versa"},
        {id: 5, title: "Will I get paid?", summary: "We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical."},
    ]

    const handleShow = () => {
        // if (faq?.map(data => data.id === 1)) {
        //     setShow((prev) => !prev);
        // } 
        // else {
        //     setShow(false);
        // }
    }

  return (
    <section id="faqs" className='md:px-10 px-3 pt-12 border-y-2'>
        <div><img src="https://training.zuri.team/section7wire.svg" className="h-12 ml-[10%] md:h-24 md:ml-32" alt="image" /></div>
        <p className="text-red-500 text-[18px] md:text-2xl text-center">Got Questions?</p>
        <h3 className="text-2xl md:text-4xl font-bold text-center pb-24">Frequently Asked Questions</h3>
        <div className="cursor-pointer">
            {faq?.map(data => {
                return (
                    <div className="py-5 px-2 border" key={data.id}>
                        <p className="flex items-center justify-between md:text-[18px] md:font-semibold py-2"><label className="w-2/3 md:w-auto">{data.title}</label> <FaPlus id={data.id} onClick={() => setShow((prev) => !prev)}/></p>
                        <p className={`${show ? "block" : "hidden"}`}>{data.summary}</p>
                    </div>
                )
            })}
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-16 pb-10 md:flex-row">
            <p className="md:text-[18px]">Still got questions?</p>
            <a href="#" className="flex items-center gap-2 bg-red-500 text-white rounded-full px-6 py-2"><FaTwitter/>Tweet them at us</a>
        </div>
    </section>
  )
}

export default FAQs