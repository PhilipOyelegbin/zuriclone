import zuritraining from '../../assets/zuri-training-img.svg';
import zuriinternship from '../../assets/zuri-internship-img.svg';
import zuritalent from '../../assets/zuri-talent-img.svg';

const Program = () => {
    const cards = [
        {id: 1, image: zuritraining, description: "We understand a complete beginner cannot become a professional after a few weeks, the aim here is to get you familiar enough with each the tools such that you’ll be able to continue learning on your own with minimal support.", linktext: "I want to be trained >", link: "#"},
        {id: 2, image: zuriinternship, description: "We place you in a work simulation. We give you tasks every week, the tasks ranges from easy to hard as you progress from stage to stage, making it to the final stage means you are ready for actual work.", linktext: "I want to join the internship >", link: "#"},
        {id: 3, image: zuritalent, description: "Keeping pace with projects and being on the look out for the extremely talented individuals has become ever more challenging. Here is where Zuri Team comes into play to bring the best suited talent for your company", linktext: "I am looking for talent >", link: "#"}
    ];

  return (
    <section className='px-5'>
        <h3 className='text-red-500 text-sm text-center mt-16 mb-2 md:mt-36'>BY ZURI TEAM</h3>
        <p className='text-2xl text-center mb-16'>We cater for every level of <br/> expertise and needs in the industry.</p>
        <div className='card-container'>
            {cards?.map(card => {return (
                <div className='card' key={card.id}>
                    <img src={card.image} className='mb-12' alt="" />
                    <p className='mb-4'>{card.description}</p>
                    <a href={card.link} className="text-red-500 mb-2">{card.linktext}</a>
                </div>
            )})}
        </div>
    </section>
  )
}

export default Program