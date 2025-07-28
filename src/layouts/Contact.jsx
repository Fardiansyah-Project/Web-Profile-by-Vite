import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="container">
        <h1 className="text-center text-primary font-semibold text-2xl">
          Contact Me
        </h1>
        <p className="text-center text-slate-400 py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          odit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full lg:w-2/3 rounded-md">
          <div className="w-full py-5 px-3 bg-slate-300">
            <form action="">
              <div className="w-full px-4 mb-6">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 border-primary"
                />
              </div>
              <div className="w-full px-4 mb-6">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 border-primary"
                />
              </div>
              <div className="w-full px-4 mb-6">
                <label htmlFor="" className="text-base font-bold text-primary">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 border-primary h-32"
                />
              </div>
              <button className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full w-full hover:bg-cyan-700 hover:shadow-lg transition duration-200">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full py-5 px-5 bg-slate-700">
            <div className="mb-2">
              <h4 className="text-primary py-5">
                Address
                <i className="fa-solid fa-location-dot"></i>
              </h4>
              <div className="px-4 mb-6">
                <p className="text-base text-white">
                  Street : Jl.Malontara BTN Banua Gaya
                </p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-base text-white">City : Palu</p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-base text-white">
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
                <p className="text-base text-white">
                  Email : fardiansyahadhiguna@gmail.com
                </p>
              </div>
              <div className="px-4 mb-6">
                <p className="text-base text-white">Telp : +6282-4254-2842</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
