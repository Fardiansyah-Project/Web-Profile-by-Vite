import React, { useEffect, useRef } from "react";
import NavMenu from "../components/navMenu";

export default function Header() {
    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#hero-section" className="font-bold text-lg text-primary block py-6">Fardiansyah</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-menu bg-secondary origin-top-left"></span>
                            <span className="hamburger-menu bg-secondary"></span>
                            <span className="hamburger-menu bg-secondary origin-bottom-left"></span>
                        </button>
                    
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" >
                            <ul className="block lg:flex text-dark">
                                <NavMenu href="#hero-section" text="Home" />
                                <NavMenu href="#about" text="About" />
                                <NavMenu href="#gallery" text="Gallery" />
                                <NavMenu href="#skills" text="Skills" />
                                <NavMenu href="#contact" text="Contact" />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
