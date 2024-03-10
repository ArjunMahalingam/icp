import React from "react";
import { Link, Outlet } from "react-router-dom";

const Review2 = () => {
  return (
    <div>
      <Link to={`review/revi/rev/re`}>
        <p className=" font-bold text-9xl">Sethaan.....</p>
      </Link>
      <Outlet />
    </div>
  );
};

export default Review2;
