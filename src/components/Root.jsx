import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
