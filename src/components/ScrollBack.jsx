import React from "react";

const ScrollBack = () =>{
    return(
        <a className="hidden fixed bg-primary rounded-full py-3 px-3 bottom-5 right-3 text-white lg:py-5 lg:px-5 transition duration-200 ease-in-out" id="btn-scroll" href="#hero-section">
            <i className="fa-solid fa-chevron-up lg:text-2xl"></i>
        </a>
    )
}

export default ScrollBack;