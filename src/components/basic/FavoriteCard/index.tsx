import Heart from "../icons/Heart";

interface Props {
  imgUrl: string;
  date: string;
  vote: string;
}

export default ({ imgUrl, date, vote = "0" }: Props) => {
  return (
    <div className="w-[288px] h-[241px]">
      <div className="w-full h-[216px] relative">
        <img src={imgUrl} alt="cat" />
        <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
          <div className="me-1">
            <Heart />
          </div>
          <div className="text-white text-[12px] leading-4">{vote}</div>
        </div>
      </div>
      <div className="mt-[9px] flex justify-between">
        <span className="text-[12px] text-[#767676] leading-4">{date}</span>
        <span className="text-[12px] text-[#767676] leading-4 underline cursor-pointer">
          × 削除する
        </span>
      </div>
    </div>
  );
};
