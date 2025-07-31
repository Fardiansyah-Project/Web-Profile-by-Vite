import NavMenu from "../components/NavMenu";
import ScrollBack from "../components/ScrollBack";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function Footer() {
    return (
        <footer className="bg-slate-700 pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 text-white font-medium md:w-1/2">
                        <h3 className="font-bold text-2xl mb-2">Addrees</h3>
                        <p>fardiansyahadhiguna@gmail.com</p>
                        <p>Jl. Malontara Blok.A</p>
                        <p>Palu, Sulawesi Tengah</p>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/2">
                        <h3 className="font-semibold text-xl text-white mb-3">Linked</h3>
                        <ul className="text-slate-300">
                            <NavMenu href="#hero-section" text="Home" />
                            <NavMenu href="#about" text="About" />
                            <NavMenu href="#gallery" text="Gallery" />
                            <NavMenu href="#skills" text="Skills" />
                            <NavMenu href="#contact" text="Contact" />
                        </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-100">
                    <div className="flex items-center justify-center mb-5">
                        <SocialMediaLinks/>
                    </div>
                    <p className="font-medium text-xs text-white text-center">
                        Create by{" "}
                        <a
                            href="https://www.instagram.com/_f4rdyyh/"
                            target="_blank"
                            className="font-bold text-primary"
                        >
                            Fardiansyah
                        </a>
                        , using{" "}
                        <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            className="font-bold text-sky-500"
                        >
                            Tailwind Css
                        </a>{" "}
                        with <span className="text-red-500">❤</span>
                    </p>
                </div>
            </div>
            <ScrollBack/>
        </footer>
    )
}
