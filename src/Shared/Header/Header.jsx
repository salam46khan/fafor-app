import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/pic/Logo.png'
import './Header.css'
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="bg-[#E7F774] text-xl border-b-2 border-black">
            <div className="container p-0">
                <div className="flex items-stretch justify-between w-full navbar m-0 p-0 px-1">
                    <div className=" flex gap-2 items-center ">
                        <img className="h-10 w-10" src={logo} alt="" />
                        <h3 className="uppercase text-[2rem] text-[#F792BE] stroke-black myStroke">Fofar</h3>
                    </div>
                    <div className="flex-1 flex justify-end">
                        {/* for pc ------- */}
                        <div className=" justify-end items-center md:gap-4 gap-2 hidden sm:flex" id="nav">
                            <ul className="flex items-stretch lg:gap-3 text-[0.9rem] Pc-menu menu menu-horizontal">
                                <li><NavLink to={'/'}>About us</NavLink></li>
                                <li><NavLink to={'/about'}>How to Buy</NavLink></li>
                                <li><NavLink to={'/roadmap'}>Roadmap</NavLink></li>
                            </ul>
                            <button className="px-4 py-1 lg:ml-14 md:ml-8 sm:ml-3 border text-[0.9rem] border-black rounded-full">Buy Now</button>
                        </div>

                        {/* for mobile  */}
                        <div className="flex justify-end sm:hidden relative">
                            <button onClick={() => setNavOpen(!navOpen)} className="p-1 bg-[]">
                            <FaBars className="text-2xl" />
                            </button>
                            <div className={`absolute p-3 mobile-Nav ring-0 duration-200 min-w-[180px] top-16 bg-[#E7F774] ${navOpen ? "top-16 opacity-1 z-20" : "top-32 opacity-0 -z-30"}`}>

                                <ul className="flex items-stretch lg:gap-3 text-[0.9rem] Pc-menu menu menu-horizontal w-full">
                                    <li><NavLink to={'/'}>About us</NavLink></li>
                                    <li><NavLink to={'/about'}>How to Buy</NavLink></li>
                                    <li><NavLink to={'/roadmap'}>Roadmap</NavLink></li>
                                </ul>
                                <button className="px-4 w-full py-1 lg:ml-14 md:ml-8 sm:ml-3 border text-[0.9rem] border-black rounded-full">Buy Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;