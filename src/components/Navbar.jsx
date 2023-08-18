import { navLinks } from "../constants";
import { close, hamburger } from "../assets";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    };

    const handleLinkClick = () => {
        if (toggle) {
            handleToggle();
        }
    };

    return (
        <nav className="w-full flex justify-between items-center py-6 pl-12 sm:pr-16 pr-3 border-b-4 border-slate-100 bg-white fixed z-20 top-0">
            <h3 className="font-poppins tracking-widest font-bold text-xl text-slate-800">
                Portfolio
            </h3>
            <ul className={`sm:flex hidden ${toggle ? "block" : "hidden"} justify-end items-center flex-1 gap-5`}>
                {navLinks.map(nav => (
                    <li
                        key={nav.id}
                        className="font-poppins text-lg font-semibold text-stone-700 tracking-tight cursor-pointer hover:text-red-400 transition duration-400"
                    >
                        <a href={`#${nav.id}`} onClick={handleLinkClick}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex sm:hidden flex-1 justify-end items-center">
                <img
                    src={toggle ? close : hamburger}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={handleToggle}
                />
            </div>
            <div
                className={`${toggle ? "flex top-20 right-0 sidebar" : "hidden"} w-full h-full bg-white fixed`}
            >
                <ul className="w-full flex flex-col justify-start items-center gap-10 mt-20">
                    {navLinks.map(nav => (
                        <li
                            key={nav.id}
                            className="font-poppins text-2xl font-medium text-black tracking-tight cursor-pointer"
                        >
                            <a href={`#${nav.id}`} onClick={handleLinkClick}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
