import React from "react";

const Items = ({
  section_name,
  page_name,
  isActive,
}: {
  section_name: string;
  page_name: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={`items-center py-1 px-10 gap-2 flex text-sm rounded-3xl font-medium ${
        isActive ? "bg-[#00B24F] text-white" : "bg-[#909090] text-black"
      } `}
    >
      <p className="">{`${section_name}`}</p>
    </div>
  );
};

export default Items;
