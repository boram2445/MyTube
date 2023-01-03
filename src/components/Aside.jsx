import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay, BsFileEarmarkPlay } from "react-icons/bs";

export default function Aside() {
  return (
    <aside className="pt-3 pl-2 pr-2 flex flex-col w-20 gap-3">
      <button className="text-2xl flex flex-col justify-center items-center gap-2 p-3 font-thin hover:rounded-lg hover:bg-middle-grey">
        <MdHomeFilled />
        <p className="text-xs">홈</p>
      </button>

      <button className="text-xl flex flex-col justify-center items-center gap-2 p-3 font-thin hover:rounded-lg hover:bg-middle-grey">
        <BsCollectionPlay />
        <p className="text-xs">구독</p>
      </button>
      <button className="text-xl flex flex-col justify-center items-center gap-2 p-3 font-thin hover:rounded-lg hover:bg-middle-grey">
        <BsFileEarmarkPlay />
        <p className="text-xs">보관함</p>
      </button>
    </aside>
  );
}
