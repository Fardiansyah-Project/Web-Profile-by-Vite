import SocialMediaLinks from "../components/SocialMediaLinks";

const About = () => {
    return (
        <section id="about" className="group pt-36 pb-32 dark:bg-slate-800">
            <div className="container">
                <div className="flex flex-wrap">
                    <div
                        className="w-full px-4 mb-10 lg:w-1/2"
                        data-aos="fade-right"
                        data-aos-delay={300}
                    >
                        <h4 className="font-bold uppercase text-primary mb-3">About Me</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 max-w-md lg:text-4xl dark:text-slate-100">
                            Building a website using frameworks
                        </h2>
                        <p className="text-base font-medium text-secondary max-w-xl lg:text-lg dark:text-slate-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
                            asperiores alias fugit dolores, officiis quia voluptatum.
                        </p>
                    </div>
                    <div
                        className="w-full px-4 lg:w-1/2"
                        data-aos="fade-right"
                        data-aos-delay={100}
                    >
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-slate-100">
                            Follow Me
                        </h3>
                        <p className="font-medium text-base text-secondary mb-6 lg:text-lg dark:text-slate-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                            dignissimos ipsam illo ex vitae laboriosam maxime, voluptatum
                            reprehenderit!
                        </p>
                        <div className="flex items-center">
                            <SocialMediaLinks />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
