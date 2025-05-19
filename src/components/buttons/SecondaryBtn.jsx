import React from "react";

function SecondaryBtn({ text, imageSource }) {
  return (
    <button className="flex gap-2 align-center leading-5 py-3 px-6  text-[#fff] rounded-[6px] border border-[#333] h-[44px] neo-medium uppercase tracking-[-0.4px]">
      <img className="w-20px" src={imageSource} alt="" />
      {text}
    </button>
  );
}

export default SecondaryBtn;
