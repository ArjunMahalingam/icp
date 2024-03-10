import React from "react";
import { Link, Outlet } from "react-router-dom";

const Review1 = () => {
  return (
    <div>
      <Link to={`review/revi/rev`}><p className=" font-extrabold text-9xl">Suttan..</p></Link>

      <Outlet />
    </div>
  );
};

export default Review1;
