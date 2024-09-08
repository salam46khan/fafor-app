import './Banner.css'
import car from '../../../assets/pic/car.png'
const Banner = () => {
    return (
        <div className="banner relative">
            <div className="container text-5xl">
                <h1 className=' text-center head-title text-[5rem] md:text-[10rem] lg:text-[15rem]'>FOFAR</h1>
            </div>

            <img className='w-full max-w-2xl z-20 absolute bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2' src={car} alt="" />
        </div>
    );
};

export default Banner;