import React from "react";

const MoreButton = () => {
  return (
    <>
      <div className="mt-[36px] flex justify-end cursor-pointer">
        <p className="pr-[7px] text-[16px] underline tracking-[-.2em] leading-3">
          全てみるニャン
        </p>
        <span className="material-symbols-outlined ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.799"
            height="19.799"
            viewBox="0 0 19.799 19.799"
          >
            <path
              id="Path_143"
              data-name="Path 143"
              d="M503-1749v12H491"
              transform="translate(890.955 1593.819) rotate(-45)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default MoreButton;
