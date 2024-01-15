import { useNavigate } from "react-router-dom";
import PrefectureBtn from "../CustomButton";

interface Props {
  imgUrl: string;
  cafe: string;
  prefecture: string;
}

const SignboardCard = ({ imgUrl, cafe, prefecture = "0" }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="w-[312px] bg-white">
      <div
        className="w-full h-[234px] cursor-pointer"
        onClick={() => navigate("/nyanplace/:id")}
      >
        <img src={imgUrl} alt="cat" className="h-auto w-full" />
      </div>
      <div className="m-4 mt-[19px] flex-wrap flex flex-end">
        <div className="w-full">
          店名店名店名店名店名店名店名店名店名店名店名店名店名店名
        </div>
        <div className="ms-auto mt-[10px] flex gap-2">
          <PrefectureBtn value={cafe}></PrefectureBtn>
          <PrefectureBtn value={prefecture}></PrefectureBtn>
        </div>
      </div>
    </div>
  );
};

export default SignboardCard;
