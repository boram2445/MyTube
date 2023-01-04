import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay, BsFileEarmarkPlay } from "react-icons/bs";

export default function Aside() {
  return (
    <aside className="pt-3 pl-2 pr-2 w-20 hidden lg:block">
      <button className="w-full pt-3 pb-3 text-2xl flex flex-col justify-center items-center gap-2 font-thin hover:rounded-lg hover:bg-middle-grey">
        <MdHomeFilled />
        <p className="text-xs">홈</p>
      </button>

      <button className="w-full pt-3 pb-3 text-xl flex flex-col justify-center items-center gap-2 font-thin hover:rounded-lg hover:bg-middle-grey">
        <BsCollectionPlay />
        <p className="text-xs">구독</p>
      </button>
      <button className=" w-full pt-3 pb-3 text-xl flex flex-col justify-center items-center gap-2 font-thin hover:rounded-lg hover:bg-middle-grey">
        <BsFileEarmarkPlay />
        <p className="text-xs">보관함</p>
      </button>
    </aside>
  );
}
