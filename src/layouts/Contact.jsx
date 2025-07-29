import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InputForm from "../components/InputForm";
import TextareaInput from "../components/TextareaInput";
import ButtonInput from "../components/buttonInput";
import BaseForm from "../components/BaseForm";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="container">
        <h1 className="text-center text-primary font-semibold text-2xl">
          Contact Me
        </h1>
        <p className="text-center text-slate-400 py-5">
          Contact me by filling out the form below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full lg:w-2/3 rounded-md">
            <BaseForm>
              <InputForm subKey="name" label="Name" type="text"/>
              <InputForm subKey="email" label="Email" type="email"/>
              <TextareaInput subKey="message" label="Message"  />
              <ButtonInput label="Submit" />
            </BaseForm>
          <div className="w-full py-5 px-3 bg-slate-700">
            <div className="mb-2">
              <h4 className="text-primary py-5">
                Address
                <i className="fa-solid fa-location-dot"></i>
              </h4>
              <div className="px-4 mb-6">
                <p className="text-sm md:text-base text-white">
                  Street : Jl.Malontara BTN Banua Gaya
                </p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-sm md:text-base text-white">City : Palu</p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-sm md:text-base text-white">
                  Province : Sulawesi Tengah
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-primary py-5">
                Contact Person
                <i className="fa-solid fa-address-book"></i>
              </h4>
              <div className="px-4 mb-6">
                <p className="text-sm md:text-base text-white ">
                  Email : fardiansyahadhiguna@gmail.com
                </p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-sm md:text-base text-white ">Telp : +6282-4254-2842</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
