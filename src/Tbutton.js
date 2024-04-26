import React, { useState } from "react";

function Tbutton(props) {
  function functionCaller() {
    props.onAdd(!props.value);
  }
  let bg = props.value ? "bg-blue-400 " : "";
  let cl = props.value ? "before:translate-x-8 " : "";

  return (
    <label className="  relative ml-5  inline-block  w-16 bg-red">
      <input className=" opacity-0 w-0 h-0" type="checkbox" />
      <span
        onClick={functionCaller}
        className={`${cl} ${bg}${"slider"} ${"absolute cursor-pointer rounded-3xl before:rounded-full  top-0 left-0 right-0 bottom-0 bg-[#ccc] before:absolute before:h-6 before:top-1 before:w-6 before:left-1 before:bottom-1  before:transition:1s  before:bg-white  "}`}
      />
    </label>
  );
}

export default Tbutton;
