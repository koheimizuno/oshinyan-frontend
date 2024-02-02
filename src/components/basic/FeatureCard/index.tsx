import { Link } from "react-router-dom";

const LargeCatCard = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  return (
    <div className="w-[312px] h-[328px] bg-white">
      <div className="w-full h-[234px] text-center">
        <Link to="/feature/1">
          <img className="max-h-[234px]" src={imgUrl} alt="cat" />
        </Link>
      </div>
      <div className="pt-[19px] px-4 pb-[10px] h-[65px] text-[20px] leading-[27px] font-bold text-ellipsis">
        {text}
      </div>
    </div>
  );
};
export default LargeCatCard;
