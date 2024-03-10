import React from "react";
import {} from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <>
      <div className="flex justify-around my-6">
        <Link to={`/`}>
          <img
            src={require("../images/logo.png")}
            alt=""
            className="logo"
            // onClick={() => {
            // window.location.href = "http://localhost:3000/";
            // }}
          />
        </Link>
        <div className="flex items-center">
          <Link to={`review`}>
            <p className="px-16 text-left font-bold">Write Review</p>
          </Link>
          <Link to={`/submit`}>
            <p className="pr-16 font-bold">Submit Your Startup</p>
          </Link>
          <Link to={`login`}>
            <button className="btn1 px-4 py-1 rounded bg-slate-100 mx-4 font-bold hover:bg-slate-300">
              LOGIN
            </button>
          </Link>
          <Link to={`sign up`}>
            <button className="btn2 px-4 py-1 rounded bg-blue-500 text-white font-bold  hover:bg-blue-600 mr-8">
              SIGN UP
            </button>
          </Link>
          <BiSolidMoon className="text-5xl border-[3px] rounded-xl p-2 border-slate-200 text-sky-400 hover:bg-slate-300" />
        </div>
      </div>
      <p className=" bg-slate-200 w-full h-[1px]"></p>
    </>
  );
};
