import React from "react";
import { FaSadTear, FaSmile, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <div className="flex justify-center my-8 space-x-2">
        <FaSadTear className=" text-yellow-600 mt-5  text-3xl" />
        <div className=" flex items-center justify-around border-[3px] border-slate-300 rounded-full w-[10%] h-10 mt-4">
          <FaStar className=" text-yellow-500 text-xl" />
          <FaStar className=" text-yellow-500 text-xl" />
          <FaStar className=" text-yellow-500 text-xl" />
          <FaStar className=" text-yellow-500 text-xl" />
          <FaStar className=" text-yellow-500 text-xl" />
        </div>
        <FaSmile className=" text-yellow-400 mt-5 text-3xl space-x-2" />
      </div>
      <div className="flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold mb-4">
          Startup Company Reviews Done Right!!! Find the best startup for you
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Read honest and unbiased reviews from real users and experts
        </p>
        <div className="w-full max-w-lg flex items-center border shadow-lg border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search on 12567 startup companies"
            className="flex-grow px-4 py-2"
          />
          <button className="bg-blue-600 px-4 py-2 shadow-lg text-white hover:bg-blue-500">
            Search
          </button>
        </div>
        <div className="flex justify- text-sm font-semibold mt-3">
          <p className="text-gray-400">
            {" "}
            Are You an Startup Founder ?
            <Link to={"page"}>
              <span className=" text-blue-400">
                {" "}
                Create a page for your business
              </span>
            </Link>
          </p>
        </div>
        <div className=" flex justify-around items-center space-x-[40%]">
          <img
            src={require("../images/image1.png")}
            alt=""
            className=" w-[40%] h-[30%]"
          />
          <img
            src={require("../images/image2.png")}
            alt=""
            className="w-[40%] h-[30%]"
          />
        </div>
        <div className="bg-slate-100 w-full h-20 flex items-center justify-center">
          <p className="font-bold">
            {" "}
            578 startup companies
            <span className=" text-slate-500"> have been reviewed</span>
          </p>
        </div>
      </div>
    </>
  );
};
