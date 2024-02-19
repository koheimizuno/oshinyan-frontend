import Heart from "../../../basic/icons/Heart";

interface Props {
  imgUrl: string;
  recommend: number;
  onClick?: () => void;
}

const CatFavorite = ({ imgUrl, recommend, onClick }: Props) => {
  return (
    <div className="relative overflow-x-hidden" onClick={onClick}>
      <img src={imgUrl} alt={imgUrl} className="m-auto h-[120px] " />
      <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
        <div className="me-1">
          <Heart />
        </div>
        <div className="text-white text-[12px] leading-4">{recommend}</div>
      </div>
    </div>
  );
};

export default CatFavorite;
