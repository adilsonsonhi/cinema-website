import React from "react";

function SmallBadge({ children }) {
  return (
    <p className="text-[12px] py-1 px-4 border border-[#3D3D3D] rounded-[32px] leading-5">
      {children}
    </p>
  );
}

export default SmallBadge;
