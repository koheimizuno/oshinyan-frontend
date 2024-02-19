import { useNavigate } from "react-router-dom";
import PrefectureBtn from "../CustomButton";
import { ShopType } from "../../../constant/type";

const NyanPlaceCard = (props: ShopType) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[312px] bg-white m-auto">
      <div
        className="w-full h-[234px] cursor-pointer"
        onClick={() => navigate(`/nyanplace/${props.id}`)}
      >
        {props.shop_images && (
          <img
            src={props.shop_images[0].imgs}
            alt={props.shop_images[0].imgs}
            className="h-full m-auto"
          />
        )}
      </div>
      <div className="m-4 mt-[19px] flex-wrap flex flex-end">
        <div className="w-full">{props.shop_name}</div>
        <div className="ms-auto mt-[10px] flex gap-2">
          {props.shop_type && (
            <PrefectureBtn value={props.shop_type.shop_type}></PrefectureBtn>
          )}
          <PrefectureBtn value={props.prefecture}></PrefectureBtn>
        </div>
      </div>
    </div>
  );
};

export default NyanPlaceCard;
