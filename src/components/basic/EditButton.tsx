import React from "react";

const EditButton = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      className="w-[56px] h-[24px] justify-center text-center text-[12px] leading-[16px] flex items-center bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] rounded-[8px]"
      onClick={(e) => {
        onClick(e);
      }}
    >
      編 集
    </button>
  );
};

export default EditButton;