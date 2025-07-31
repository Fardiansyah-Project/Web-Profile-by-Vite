import React from "react";

const ButtonInput = (props) => {
  return (
    <button className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full w-full hover:bg-cyan-700 hover:shadow-lg transition duration-200">
      {props.label}
    </button>
  )
};

export default ButtonInput;
