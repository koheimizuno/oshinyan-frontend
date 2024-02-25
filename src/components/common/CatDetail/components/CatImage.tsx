import Heart from "../../../basic/icons/Heart";

interface Props {
  imgUrl: string;
  username: string;
  recommend: number;
}
const CatImage = ({ imgUrl, username, recommend }: Props) => {
  return (
    <div className="h-[241px] overflow-hidden pt-6">
      <div className="relative overflow-x-hidden">
        <img src={imgUrl} alt={imgUrl} className="h-[216px] m-auto" />
        <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
          <div className="me-1">
            <Heart />
          </div>
          <div className="text-white text-[12px] leading-4">{recommend}</div>
        </div>
        <p className="mt-[9px] text-[12px] text-[#767676] leading-4 underline">
          {username}
        </p>
      </div>
    </div>
  );
};

export default CatImage;
