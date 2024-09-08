import './Fofomic.css'
import line from '../../../assets/pic/line.svg'
import fofoimg from '../../../assets/pic/fofo-img.png'
const Fofomic = () => {
    return (
        <div className='fofomic overflow-hidden relative'>
            <div className="container ">
                <div className='relative flex justify-center items-center w-full'>
                    <div className='px-10 pt-4 pb-6 mt-14 bg-white inline-block border-dashed border-4 border-black relative'>
                        <img className='absolute -bottom-1/3 left-5 -translate-y-2/4 md:-translate-y-3/4' src={line} alt="" />
                        <img className='absolute -bottom-1/3 right-5 -translate-y-2/4 md:-translate-y-3/4' src={line} alt="" />
                        <h2 className='fafo-title text-[3rem] md:text-[5rem]'>FOFOMICS</h2>
                    </div>
                </div>

                <div className='relative w-full max-w-lg p-3 mt-10  mx-auto py-10 pb-48 md:mb-40'>
                    <div className='h-[260px] w-[260px] md:h-[370px] md:w-[370px] rounded-full bg-[#02BBFC] fofo-shadow flex flex-col justify-center items-center'>
                        <h5 className='fofo-stroke text-white text-xl'>Total supply</h5>
                        <p className='fofo-stroke text-white text-3xl'>1,00,00,00</p>
                    </div>
                    <div className='h-[220px] w-[220px] md:h-[300px] md:w-[300px] rounded-full bg-[#F792BE] fofo-shadow flex flex-col justify-center items-center absolute bottom-16 right-0'>
                        <h5 className='fofo-stroke text-white text-xl'>Total Liqudty</h5>
                        <p className='fofo-stroke text-white text-3xl'>5,00,00</p>
                    </div>
                    <div className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] rounded-full bg-[#00D24D] fofo-shadow flex flex-col justify-center items-center absolute bottom-3 left-1/3 -translate-x-1/2'>
                        <h5 className='fofo-stroke text-white text-xl'>Airdrop</h5>
                        <p className='fofo-stroke text-white text-3xl'>25%</p>
                    </div>
                    <div className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] rounded-full bg-[#E4F976] fofo-shadow flex flex-col justify-center items-center absolute md:top-20 top-0 md:right-3 right-0'>
                        <h5 className='fofo-stroke text-white text-xl'>Marketing</h5>
                        <p className='fofo-stroke text-white text-2xl'>10%</p>
                    </div>
                </div>

                <div className='relative container h-36 md:h-10'>
                    <img className='absolute left-0  md:max-w-sm w-1/2 bottom-0 translate-y-16' src={fofoimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Fofomic;