import React from "react";

interface Props {
  value: string;
}

const PrefectureBtn = ({ value }: Props) => {
  return (
    <>
      <div className="text-[14px] h-[24px] border-solid rounded border-[#C38154] border px-[10px] text-[#C38154] translate-x-0.5 ">
        {value}
      </div>
    </>
  );
};

export default PrefectureBtn;
