import './Roadmap.css'
import lnch from '../../../assets/pic/lounch.png';
import airdrop from '../../../assets/pic/airdrop.png'
import fofoImg from '../../../assets/pic/fofo-img.png'
import car from '../../../assets/pic/car.png'
const Roadmap = () => {
    return (
        <div className="roadmap">
            <div className="container py-14 p-2">
                <h2 className='roadmap-title text-cente text-[3rem] md:text-[5rem]'>ROADMAP</h2>

                <div className='mb-32  py-16 w-full sm:max-w-md md:max-w-2xl grid grid-cols-1 md:grid-cols-2 mx-auto'>
                    <div className='p-1'>
                        <div className='min-w-sm p-4 py-8 min-h-[400px] bg-[#F792BE] border-4 border-white rounded flex flex-col justify-end items-center text-center relative z-40 md:rotate-[20deg] md:top-16'>
                            <img className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 w-[100%]' src={lnch} alt="" />
                            <h4 className='road-stroke text-white text-2xl'>Launch Fofar</h4>
                            <p className='text-[18px] font-sans font-semibold py-2'>
                                We launched Fofar, introducing our unique meme coin to the crypto world.
                            </p>
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='min-w-sm p-4 py-8 min-h-[400px] bg-[#02BBFC] border-4 border-white rounded flex flex-col justify-start items-center text-center relative z-30 md:-rotate-[12deg]'>

                            <h4 className='road-stroke text-white text-2xl'>Partnerships with Influencers</h4>
                            <p className='text-[18px] font-sans font-semibold py-2'>
                                We're partnering with influential personalities to expand our reach and bring more attention to Fofar.
                            </p>

                            <img className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80%] z-50 md:rotate-[10deg]' src={fofoImg} alt="" />
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='min-w-sm p-4 py-8 min-h-[400px] bg-[#E4F976] border-4 border-white rounded flex flex-col justify-end items-center text-center relative z-50 md:-rotate-6 md:top-6'>
                            <img className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-2 w-[60%]' src={airdrop} alt="" />
                            <h4 className='road-stroke text-white text-2xl'>Community Events and Airdrops</h4>
                            <p className='text-[18px] font-sans font-semibold py-2'>
                                Join our events and airdrops to earn Fofar tokens and connect with fellow enthusiasts.
                            </p>
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='min-w-sm p-4 py-8 min-h-[440px] bg-[#00D24D] border-4 border-white rounded flex flex-col justify-end items-center text-center relative z-10 md:rotate-12 md:-top-12'>
                            
                            <h4 className='road-stroke text-white text-2xl '>Introduction of Fofar NFTs</h4>
                            <p className='text-[18px] font-sans font-semibold py-2'>
                                In the last quarter of the year, we will introduce Fofar NFTs. These unique digital collectibles will offer new ways for our community to engage with and invest in the Fofar ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative md:h-[260px] h-[140px]'>
                <div className='container'>
                    <img className='md:max-w-xl w-full absolute bottom-0 left-1/2 -translate-x-1/2' src={car} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;