import Heart from "../../../basic/icons/Heart";

interface Props {
  imgUrl: string;
  vote: string;
}

const CatFavorite = ({ imgUrl, vote = "0" }: Props) => {
  return (
    <div className="w-[160px] h-[120px]">
      <div className="w-full h-[120px] relative">
        <img src={imgUrl} alt="cat" />
        <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
          <div className="me-1">
            <Heart />
          </div>
          <div className="text-white text-[12px] leading-4">{vote}</div>
        </div>
      </div>
    </div>
  );
};

export default CatFavorite;