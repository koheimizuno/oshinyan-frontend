import { Link } from "react-router-dom";

const FeatureCard = ({
  id,
  imgUrl,
  title,
}: {
  id: number;
  imgUrl: string;
  title: string;
}) => {
  return (
    <div className="w-[312px] h-[328px] bg-white m-auto mb-4">
      <div className="w-full h-[234px] text-center">
        <Link to={`/feature/${id}`}>
          <img className="max-h-[234px] m-auto" src={imgUrl} alt={imgUrl} />
        </Link>
      </div>
      <div className="flex h-[94px] justify-center items-center">
        <span className="text-[20px] font-bold text-ellipsis">{title}</span>
      </div>
    </div>
  );
};
export default FeatureCard;
