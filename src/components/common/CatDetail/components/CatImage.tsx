import Heart from "../../../basic/icons/Heart";

interface Props {
  imgUrl: string;
  personName: string;
  vote: number;
}
const CatImage = ({ imgUrl, personName, vote }: Props) => {
  return (
    <div className="h-[241px] pt-6">
      <div className="relative overflow-x-hidden">
        <img src={imgUrl} alt="cat" className="h-[216px] m-auto" />
        <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
          <div className="me-1">
            <Heart />
          </div>
          <div className="text-white text-[12px] leading-4">{vote}</div>
        </div>
      </div>
      <p className="mt-[9px] text-[12px] text-[#767676] leading-4 underline">
        {personName}
      </p>
    </div>
  );
};

export default CatImage;
