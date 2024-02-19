import { Link } from "react-router-dom";

const FeatureCard = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  return (
    <div className="max-w-[312px] h-[328px] bg-white m-auto mb-4">
      <div className="w-full h-[234px] text-center">
        <Link to="/feature/1">
          <img className="max-h-[234px]" src={imgUrl} alt={imgUrl} />
        </Link>
      </div>
      <div className="pt-[19px] px-4 pb-[10px] h-[65px] text-[20px] leading-[27px] font-bold text-ellipsis">
        {text}
      </div>
    </div>
  );
};
export default FeatureCard;
