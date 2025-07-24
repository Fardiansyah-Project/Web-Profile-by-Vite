import React from "react"
import Foto from "../assets/img/foto.png"

function HeroSection() {
    return (
        <section id="hero-section" className="group pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">Hai, My name is <span className="block font-bold text-4xl lg:text-5xl">Fardiansyah</span></h1>
                        <h2 className="font-medium text-slate-600 text-lg mb-5 lg:text-2xl">Web & Mobile Developer</h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id libero distinctio eos?</p>
                        <a href="#" className="bg-primary text-base font-semibold text-white py-3 px-6 rounded-full hover:shadow-xl hover:bg-cyan-600 transition duration-200 ease-in-out">Contact Me</a>
                    </div>
                    <div className="w-full mb-20 self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-10 sm:mx-12 lg:right-0 rounded-xl h-100 w-100 lg:h-50 lg:w-50 ">
                            <img src={Foto} alt="Fardiansyah" className="max-w-full w-2/3 mx-auto mb-4 bg-primary rounded-full" />
                            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection