import React, { useState } from "react";

export default function Description({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-2.5 bg-middle-grey rounded-xl  flex items-center hover:brightness-125 cursor-pointer ${
        !isOpen ? "h-28" : ""
      }`}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <p className={`${!isOpen ? "h-24 overflow-hidden" : ""}`}>{content}</p>
    </div>
  );
}
