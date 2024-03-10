import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Submit = () => {
const alert = ()=>{
  alert("Submitted Successfully")
}
  return (
    <div>
      <p className="flex px-16 font-light">
        <Link to={"/"}>HOME</Link> {">"} SUBMIT MY STARTUP
      </p>
      <h2 className=" px-16 pt-5 font-semibold text-4xl text-gray-400">
        SUBMIT MY STARTUP
      </h2>
      <h1 className="text-center font-extrabold text-4xl mt-6">
        Wish to get your startup profiled on Incubeplay.com?
      </h1>
      <p className=" text-center text-xl pt-2">
        Just answer the following questions in detail.
      </p>
      <section>
        <form action="">
          <div className=" px-48">
            <h6 className=" text-xl pt-4">
              NAME OF STARTUP :<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Name"></label>
            <input
              type="text"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              FOUNDED IN (Year) :<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Year"></label>
            <input
              type="number"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              FOUNDER'S NAME :<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Name"></label>
            <input
              type="text"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              THE IDEA: What is the problem being solved by your startup /
              business? :<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Idea"></label>
            <textarea
              id="message"
              placeholder="50 Words or more"
              className="border border-gray-800 w-1/2 h-24 rounded pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              THE FOUNDER'S STORY: When and how did you come up with the idea
              for the business?:<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Story"></label>
            <textarea
              id="message"
              placeholder="I came up with the idea when.....(write at least 50 words)"
              className="border border-gray-800 w-1/2 h-24 rounded pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              WHO IS THE CUSTOMER: What is the typical profile of your target
              customer? Where would they be located?
            </h6>
            <label htmlFor="Customer"></label>
            <textarea
              id="message"
              placeholder="50 Words or more"
              className="border border-gray-800 w-1/2 h-24 rounded pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              LESSONS TO SHARE: What 3 key lessons from your startup journey
              you'd like to share with aspiring entrepreneurs?:
              <span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Lesson" className=" w-72"></label>
            <textarea
              id="message"
              placeholder="The three key lessons from my journey I'd like to share are....(Wordcount: 50 words or more)"
              className="border border-gray-800 w-1/2 h-24 rounded pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              Email<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Email"></label>
            <input
              type="email"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              City<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="City"></label>
            <input
              type="text"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              Website URL<span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="URL"></label>
            <input
              type="URL"
              className="border border-gray-800 w-1/3 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <h6 className=" text-xl pt-4">
              Number of Employees<span className=" text-red-600">*</span>
            </h6>
            <select className=" border border-slate-700 rounded-lg w-52 h-10 bg-blue-50">
              <option>Select</option>
              <option>5-10</option>
              <option>10-30</option>
              <option>30-50</option>
              <option>50-100</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
            <h6 className=" text-xl pt-4">
              SLUGLINE: Describe Your Startup's Solution In One Line
              <span className=" text-red-600">*</span>
            </h6>
            <label htmlFor="Line"></label>
            <input
              type="text"
              className="border border-gray-800 w-1/2 h-12 rounded-full pl-1 text-lg bg-blue-50"
            />
            <br />
            <br />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Profile Submitted By:
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Marketing Agency"
                  control={<Radio />}
                  label="Marketing Agency"
                />
                <FormControlLabel
                  value="Company Founder/Staff"
                  control={<Radio />}
                  label="Company Founder/Staff"
                />
              </RadioGroup>
            </FormControl>
            <h6 className=" text-xl pt-8">
              NOTE: Request to meet wordcount to make the submission eligible.
              In case of any queries, please email us at{" "}
              <span className=" text-blue-500 underline pb-8">
                <Link to="connect@incubeplay.com">connect@incubeplay.com</Link>
              </span>
            </h6>
            <p className=" text-sm text-slate-400 pt-4">
              By clicking submit, I consent to receive communication including
              newsletters on other innovative startups.
            </p>
            <Checkbox />
            Consent
            <span className=" text-red-600">*</span> <br></br>
            <button className=" w-32 h-10 items-center rounded-lg mb-4 mt-3 hover:bg-blue-900 hover:text-white bg-blue-400" type="submit" onSubmit={alert}>
              Submit
            </button>
          </div>
        </form>
      </section>

      <Outlet />
    </div>
  );
};

export default Submit;
