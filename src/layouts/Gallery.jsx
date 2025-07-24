import React from "react"
import Card1 from '../assets/img/pena-project.png'
import CardGallery from "../components/CardGallery"

export default function Gallery() {
    return (
        <section id="gallery" className="pt-36 pb-16 bg-slate-100 dark:bg-dark">
            <div className="container">
                <div className="w-full px-4" data-aos="zoom-in">
                    <div className="max-w-xl mx-auto text-center mb-9">
                        <h4 className="font-semibold text-lg uppercase text-primary mb-2 lg:text-2xl">
                            Gallery
                        </h4>
                        <h2 className="font-bold text-3xl text-dark dark:text-slate-100 mb-4 sm:text-4xl lg:text-5xl dark:text-slate-100">
                            Project Inside
                        </h2>
                        <p className="font-medium text-md text-secondary md:text-lg dark:text-slate-400">
                            Kumpulan dokumentasi projek-projek yang telah kami
                            bangun
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
                    <CardGallery 
                        photo = {Card1}
                        title="Web Sistem Inventaris Barang" 
                        text = "Web ini digunakan untuk menyimpan data dan kondisi barang pada organisasi PENA" 
                    />
                </div>
            </div>
        </section>
    )
}