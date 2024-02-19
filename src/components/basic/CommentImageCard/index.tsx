import { useDispatch } from "react-redux";
import { CommentImageType } from "../../../constant/type";
import Heart from "../icons/Heart";
import { CommentImageDeleteAction } from "../../../slices/cat";

const CommentImageCard = ({
  id,
  imgs,
  created_date,
  comment_images_recommend,
}: CommentImageType) => {
  const dispatch = useDispatch();
  const handleCommendImageDelete = () => {
    dispatch(CommentImageDeleteAction(id));
  };
  return (
    <div className="m-auto w-[288px] h-[241px]">
      <div className="relative overflow-x-hidden flex justify-center">
        <div className="h-[216px] m-auto">
          <img src={imgs} alt="cat" className="h-full" />
          <div className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
            <div className="me-1">
              <Heart />
            </div>
            <div className="text-white text-[12px] leading-4">
              {comment_images_recommend}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[9px] flex justify-between">
        <span className="text-[12px] text-[#767676] leading-4">
          {created_date}
        </span>
        <button
          className="text-[12px] text-[#767676] leading-4 underline cursor-pointer"
          onClick={handleCommendImageDelete}
        >
          × 削除する
        </button>
      </div>
    </div>
  );
};

export default CommentImageCard;
