const BtnPurple = ({
  text,
  isShowIcon,
}: {
  text: string;
  isShowIcon?: boolean;
}) => {
  return (
    <button className="px-[38px] py-[6px] text-base bg-[#FBA1B7] text-white rounded-full relative" style={{textWrap: "nowrap"}}>
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default BtnPurple;
