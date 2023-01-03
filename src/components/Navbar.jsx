import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex pl-5 pr-36 pt-2 pb-2  text-xl items-center gap-8 ">
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-none p-2.5 hover:bg-middle-grey hover:rounded-full"
        >
          <RxHamburgerMenu />
        </button>
        <h1 className=" flex gap-1 font-semibold items-center">
          <img src={logo} alt="" className="w-7" />
          <span>MyTube</span>
        </h1>
      </div>

      <form className="m-auto flex justify-center max-w-xl flex-1 border-2 border-middle-grey rounded-full">
        <input
          type="text"
          placeholder="검색"
          className="flex-1 p-2 pl-3 mr-1 rounded-l-full bg-transparent text-base outline-2 outline-blue"
        />
        <button
          type="submit"
          className=" right-0 bg-dark-grey w-16 rounded-r-full flex items-center justify-center "
        >
          <CiSearch />
        </button>
      </form>
    </nav>
  );
}
