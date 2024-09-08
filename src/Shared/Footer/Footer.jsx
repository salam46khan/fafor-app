import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/pic/Logo.png'
import { FaXTwitter } from 'react-icons/fa6';
import unKnownLogo1 from '../../assets/pic/unknown-1.png'
import unKnownLogo2 from '../../assets/pic/unknown-2.png'
import unKnownLogo3 from '../../assets/pic/unknown-3.png'
import { SiCoinmarketcap } from 'react-icons/si';
const Footer = () => {
    return (
        <div className="bg-[#F792BE] py-10 md:py-20">
            <div className="container text-center">
                <img className='mx-auto py-3' src={logo} alt="" />
                <p className='text-white py-3 text-2xl'>contact@fofar.xyz</p>
                <div className='py-3 flex justify-center gap-2 items-center flex-wrap'>
                    <div className='h-14 w-14 border-2 text-white rounded-full flex justify-center items-center'>
                        <FaTelegramPlane className='text-3xl' />
                    </div>
                    <div className='h-14 w-14 border-2 text-white rounded-full flex justify-center items-center'>
                        <FaXTwitter className='text-3xl' />
                    </div>

                    <div className='h-14 w-14 border-2 text-white rounded-full flex justify-center items-center'>
                        <img className='h-8 w-8' src={unKnownLogo1} alt="" />
                    </div>
                    <div className='h-14 w-14 border-2 text-white rounded-full flex justify-center items-center'>
                        <SiCoinmarketcap className='text-3xl' />
                    </div>

                    <div className='h-14 w-14 border-2 text-white rounded-full flex justify-center items-center'>
                        <img className='h-8 w-8' src={unKnownLogo2} alt="" />
                    </div>
                    <div className='h-14 w-14 border text-white rounded-full flex justify-center items-center'>
                        <img className='h-full w-full' src={unKnownLogo3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;