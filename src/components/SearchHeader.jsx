import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full flex pl-5 pr-36 pt-2 pb-2 text-xl items-center gap-8 ">
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-none p-2.5 hover:bg-middle-grey hover:rounded-full"
        >
          <RxHamburgerMenu />
        </button>
        <Link
          to="/"
          className="flex gap-1 font-semibold items-center cursor-pointer"
        >
          <img src={logo} alt="" className="w-7" />
          <h1>MyTube</h1>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="m-auto flex justify-center max-w-xl flex-1 border border-middle-grey rounded-full"
      >
        <input
          type="text"
          placeholder="검색"
          value={text || ""}
          onChange={handleChange}
          className="flex-1 p-2 pl-3 mr-1 rounded-l-full bg-transparent text-base focus:outline outline-blue"
        />
        <button
          type="submit"
          className=" right-0 bg-dark-grey w-16 rounded-r-full flex items-center justify-center "
        >
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
