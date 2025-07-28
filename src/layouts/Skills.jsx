import React from "react";
import SkillsImage from "../components/SkillsImage";

function Skills() {
  return (
    <section id="skills" className="pt-36 pb-32 bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="mx-auto text-center mb-16"
            data-aos="fade-up"
            data-aos-duration={900}
            data-aos-delay={100}
          >
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-2xl">
              Skills
            </h4>
            <h2 className="font-bold text-3xl text-white mb-4 sm:text-4xl lg:text-5xl">
              Programing Language
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Ini adalah list bahasa pemgrograman yang telah saya pelajari
            </p>
          </div>
        </div>
        <div className="w-full px-3">
          <SkillsImage/>
        </div>
      </div>
    </section>
  );
}

export default Skills