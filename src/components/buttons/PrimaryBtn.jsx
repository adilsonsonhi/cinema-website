import React from "react";

function PrimaryBtn({ text }) {
  return (
    <button className="leading-5 py-3 px-6 bg-white text-[#000] rounded-[6px] inline-block h-[44px] neo-medium uppercase tracking-[-0.4px]">
      {text}
    </button>
  );
}

export default PrimaryBtn;
