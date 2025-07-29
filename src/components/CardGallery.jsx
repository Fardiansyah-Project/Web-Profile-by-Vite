const CardGallery = (props) => {
    return (
        <div className="mb-12 p-4 md:w-1/2" data-aos="zoom-in-down" data-aos-duration={500} data-aos-delay={100} >
            <div className="rounded-md shadow-md overflow-hidden">
                <img src={props.photo} alt="My Portofolio" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                {props.title}
            </h3>
            <p className="font-medium text-base text-secondary">
                {props.text}
            </p>
        </div>
    )
}

export default CardGallery