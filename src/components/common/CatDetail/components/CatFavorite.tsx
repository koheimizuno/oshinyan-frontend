import Heart from "../../../basic/icons/Heart";

interface Props {
  imgUrl: string;
  vote: string;
  onClick?: () => void;
}

const CatFavorite = ({ imgUrl, vote = "0", onClick }: Props) => {
  return (
    <div
      className="w-[160px] h-[120px] relative overflow-x-hidden border-2 p-[1px]"
      onClick={onClick}
    >
      <img src={imgUrl} alt="cat" className="h-full m-auto" />
      <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
        <div className="me-1">
          <Heart />
        </div>
        <div className="text-white text-[12px] leading-4">{vote}</div>
      </div>
    </div>
  );
};

export default CatFavorite;
