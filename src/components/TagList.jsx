import React, { useState } from "react";

export default function TagList() {
  const [tags, setTags] = useState(initialTags);

  return (
    <ul className="flex gap-3 mt-2 mb-2">
      {tags.map((tag) => (
        <li>
          <button
            className={`cursor-pointer pt-1.5 pb-1.5 pl-3 pr-3 bg-middle-grey rounded-lg text-sm font-light opacity-80 hover:opacity-100 ${
              tag.selected && "bg-white text-black opacity-100"
            }`}
          >
            {tag.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

const initialTags = [
  { name: "전체", selected: true },
  { name: "음악", selected: false },
  { name: "실시간", selected: false },
  { name: "믹스", selected: false },
  { name: "게임", selected: false },
  { name: "뉴스", selected: false },
  { name: "관광지", selected: false },
  { name: "요리 프로그램", selected: false },
];
