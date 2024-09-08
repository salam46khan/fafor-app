import './Buy.css'
import wallet from '../../../assets/pic/wallet.png'
import coin from '../../../assets/pic/coin.png'
import bag from '../../../assets/pic/bag.png'
import blnc from '../../../assets/pic/blnc.png'
import flower from '../../../assets/pic/sunflower.png'

const Buy = () => {
    return (
        <div className='buy'>
            <div className="container py-14">
                <h2 className='buy-title text-cente text-[3rem] md:text-[5rem]'>HOW TO BUY</h2>

                <div className=' grid grid-cols-1 md:grid-cols-2 w-full sm:max-w-md md:max-w-3xl mx-auto p-3 my-10'>
                    <div className='p-3'>
                        <div className='p-5 bg-[#00D24D] -rotate-6 h-full'>
                            <div className='w-full h-full bg-white p-4 py-8'>
                                <img className='h-32 w-32' src={wallet} alt="" />
                                <h4 className='buy-stroke text-white text-3xl'>Set Up a Crypto Wallet</h4>
                                <p className='text-[14px] font-sans pt-4'>
                                    To begin, you'll need a crypto wallet that supports Ethereum or BNB, such as MetaMask or Trust Wallet. Download and install your preferred wallet and follow the setup instructions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='p-5 bg-[#E4F976] -rotate-6 h-full'>
                            <div className='w-full h-full bg-[#F792BE] p-4 py-8 overflow-hidden relative '>
                                <img className=' w-1/2 absolute top-0 right-0 -translate-y-1/3 translate-x-1/3' src={flower} alt="" />
                                <img className='h-32 w-32' src={coin} alt="" />
                                <h4 className='buy-stroke text-white text-3xl'>Purchase Ethereum or BNB</h4>
                                <p className='text-[14px] font-sans pt-4 text-white'>
                                    Next, buy Ethereum (ETH) or Binance Coin (BNB) through an exchange like Coinbase, Binance, or another reputable platform. You'll need these to swap for Fofar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='p-5 bg-[#ffffff] -rotate-6 h-full'>
                            <div className='w-full h-full bg-[#04BDFE] p-4 py-8'>
                                <img className='h-32 w-32' src={bag} alt="" />
                                <h4 className='buy-stroke text-white text-3xl'>Connect Your Wallet</h4>
                                <p className='text-[14px] font-sans pt-4'>
                                    Once you have Ethereum or BNB in your wallet, connect your wallet to [Platform/Exchange] where Fofar is available. Ensure you’re using a trusted and secure platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='p-5 bg-[#F792BE] -rotate-6 h-full'>
                            <div className='w-full h-full bg-[#00D24D] p-4 py-8'>
                                <img className='h-32 w-32' src={blnc} alt="" />
                                <h4 className='buy-stroke text-white text-3xl'>Connect Your Wallet</h4>
                                <p className='text-[14px] font-sans pt-4'>
                                    Once you have Ethereum or BNB in your wallet, connect your wallet to [Platform/Exchange] where Fofar is available. Ensure you’re using a trusted and secure platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;