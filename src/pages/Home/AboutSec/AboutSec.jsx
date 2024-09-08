import road from '../../../assets/pic/road.png';
import './AboutSec.css'
import aboutCard from '../../../assets/pic/about-card.png'
import flower from '../../../assets/pic/sunflower.png'

const AboutSec = () => {
    return (
        <div className="bg-[#FF8FB5] aboutSec overflow-hidden">
            <div className="container relative">
                <img className='w-[90%] md:max-w-2xl z-10 mx-auto absolute top-0 left-1/2 -translate-x-1/2' src={road} alt="" />

                <div className=' pt-40 pb-32 md:pb-36 md:pt-96'>
                    <div className='relative w-[90%]  md:w-[60%] mx-auto z-20 bg-white md:p-12 p-4 rounded-3xl border-2 border-black rotate-1 md:rotate-3'>
                        <img className='z-40 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-48 md:w-60' src={flower} alt="" />
                        <div className='bg-[#03BAFC] relative w-full p-3 md:p-10 rounded-2xl'>
                            <img className='absolute top-10 -translate-y-1/4' src={aboutCard} alt="" />

                            <div className="imgOver"></div>

                            <div className='z-40 relative pt-24 pb-10'>
                                <h2 className='about-title md:text-[5rem] text-[3rem]'>ABOUT US</h2>
                                <p className='md:text-2xl text-[15px] text-center md:p-4 p-2'>
                                    Fofar is a community-driven meme coin that brings fun and engagement to the crypto space. Inspired by the internet's love for quirky and cute characters, Fofar combines humor and innovation to create a unique digital asset. Our mission is to build a vibrant and inclusive community, offering a rewarding experience for our supporters while driving the adoption of meme coins. At Fofar, we believe that crypto should be enjoyable and accessible to everyone. Join us in creating an ecosystem where everyone can participate, share, and benefit, making the future of crypto fun for all!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;