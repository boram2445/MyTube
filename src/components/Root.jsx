import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function Root() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex ">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
}
