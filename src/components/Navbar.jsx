import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setText((text) => setText(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };

  return (
    <nav className="flex pl-5 pr-36 pt-2 pb-2 text-xl items-center gap-8 ">
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-none p-2.5 hover:bg-middle-grey hover:rounded-full"
        >
          <RxHamburgerMenu />
        </button>
        <Link
          to={"/"}
          className="flex font-semibold items-center cursor-pointer"
        >
          <h1 className="flex gap-1">
            <img src={logo} alt="" className="w-7" />
            <span>MyTube</span>
          </h1>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="m-auto flex justify-center max-w-xl flex-1 border-2 border-middle-grey rounded-full"
      >
        <input
          type="text"
          placeholder="검색"
          value={text || ""}
          onChange={handleChange}
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
