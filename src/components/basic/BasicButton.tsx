import React from "react";

export interface Props {
  value: string;
}

const CustomButton = ({ value }: Props) => {
  return (
    <>
      <button className="text-[14px] h-[24px] border-solid rounded border-[#C38154] border px-[10px] text-[#C38154] translate-x-0.5 ">
        {value}
      </button>
    </>
  );
};

export default CustomButton;
