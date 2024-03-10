import { TextField } from "@mui/material";
import React from "react";

const Review = () => {
  const comName = "w-full";
  return (
    <>
      <div className="font-normal text-center bg-blue-900 pl-10 pt-16 text-3xl min-h-screen">
        <p className="text-white font-bold">Rate your Company, anonymously!</p>
        <p className="text-white text-2xl">
          Your voice matters, make it heard.
        </p>
        <div className="flex max-w-screen-2xl h-screen pl-24 pt-10 mt-5 rounded-xl bg-white mx-auto ">
          <div>
            <img
              src={require("../images/green.png")}
              alt=""
              className="w-9 h-9"
            /> <br />
          </div>

          <div>
            <TextField
              className={comName}
              id="outlined-basic"
              label="Company Name*"
              variant="outlined"
            />
            <TextField
              className={comName}
              id="outlined-basic1"
              label="Designation/Job Title*"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
