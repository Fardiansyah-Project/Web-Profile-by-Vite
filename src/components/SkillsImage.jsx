import React from "react";
import Python from "../assets/python.svg";
import Tailwindcss from "../assets/svg/tailwindcss.svg";
import Js from "../assets/svg/js.svg";
import Php from "../assets/svg/php.svg";

const iconSkills = [
  {
    location: Python,
    nameLanguage: "Python Language",
  },
  {
    location: Js,
    nameLanguage: "Javascript Language",
  },
  {
    location: Php,
    nameLanguage: "PHP Language",
  },
  {
    location: Tailwindcss,
    nameLanguage: "C++ Language",
  }
];

const SkillsImage = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center"
      data-aos="fade-up"
      data-aos-duration={900}
    >
      {iconSkills.map(({ location, nameLanguage }, index) => (
        <a
          key={index}
          data-aos-delay={150}
          href="#"
          className="max-w-[120px] mx-4 py-4 grayscale opacity-70 transition duration-200 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-6"
        >
          <img src={location} width={100} alt={nameLanguage} />
        </a>
      ))}
    </div>
  );
};

export default SkillsImage;
