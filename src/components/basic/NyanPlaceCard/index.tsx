import PrefectureBtn from "../CustomButton";
import { ShopType } from "../../../constant/type";
import "lazysizes";

const NyanPlaceCard = (props: ShopType) => {
  return (
    <div className="w-[312px] h-[328px] bg-white">
      <div
        className="w-full h-[234px] cursor-pointer"
        onClick={() => (window.location.href = `/nyanplace/${props.id}`)}
      >
        {props.shop_images && (
          <img
            src={props.shop_images[0].imgs}
            alt={props.shop_images[0].imgs?.substring(
              props.shop_images[0].imgs.lastIndexOf("/") + 1
            )}
            className="lazyload max-h-[234px] h-full m-auto object-cover"
          />
        )}
      </div>
      <div className="m-4 mt-[19px]">
        <div className="w-full">{props.shop_name}</div>
        <div className="ms-auto mt-[10px] flex justify-end flex-wrap gap-2">
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
