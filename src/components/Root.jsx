import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Aside from "./Aside";

export default function Root() {
  return (
    <div className="bg-black text-white pb-32">
      <Navbar />
      <Outlet />
    </div>
  );
}
