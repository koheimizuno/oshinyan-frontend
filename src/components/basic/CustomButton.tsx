import React from "react";

interface Props {
  value: string;
  className?: any;
}

const PrefectureBtn = ({ value, className }: Props) => {
  return (
    <>
      <span
        className={`text-[14px] h-[24px] border-solid rounded border-[#C38154] border px-[10px] py-[2px] text-[#C38154] translate-x-0.5 cursor-pointer whitespace-nowrap ${className} `}
      >
        {value}
      </span>
    </>
  );
};

export default PrefectureBtn;
