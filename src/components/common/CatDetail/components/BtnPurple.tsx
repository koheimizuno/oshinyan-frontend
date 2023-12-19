const BtnPurple = ({
  text,
  isShowIcon,
  onClick,
}: {
  text: string;
  isShowIcon?: boolean;
  onClick: (e: any)=> void;
}) => {
  return (
    <button className="px-[38px] py-[6px] text-base bg-[#FBA1B7] text-white rounded-full relative" style={{textWrap: "nowrap"}} onClick={onClick}>
      {text}
      {isShowIcon && (
        <span className="absolute right-2 top-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.899"
            height="9.899"
            viewBox="0 0 9.899 9.899"
          >
            <path
              id="Path_682"
              data-name="Path 682"
              d="M497-1749v6h-6"
              transform="translate(890.247 1588.869) rotate(-45)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default BtnPurple;
