import { useEffect, useState } from "react";
import Heart from "../../../basic/icons/Heart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CommentImageRecommentAction } from "../../../../slices/cat";

interface Props {
  imgUrl: string;
  comment_images_id: number;
  onClick?: () => void;
}

const CatFavorite = ({ imgUrl, comment_images_id, onClick }: Props) => {
  const dispatch = useDispatch();
  const [commentImgRecommendCount, setCommentImgRecommendCount] = useState(0);
  const { user } = useSelector((state: any) => state.user);
  const { catLoading } = useSelector((state: any) => state.cat);
  useEffect(() => {
    const fetchCommentImageRecommend = async () => {
      const { data } = await axios.get(
        `api/commentimagerecommendbyimgsid/?comment_image_id=${comment_images_id}`
      );
      setCommentImgRecommendCount(data.length);
    };
    fetchCommentImageRecommend();
  }, [comment_images_id, catLoading]);

  const handleCommentImgRecommend = () => {
    const actionData = {
      user_id: user.user_id,
      comment_image_id: comment_images_id,
    };
    dispatch(CommentImageRecommentAction(actionData));
  };

  return (
    <div className="relative overflow-x-hidden">
      <img
        src={imgUrl}
        alt={imgUrl}
        className="m-auto h-[120px]"
        onClick={onClick}
      />
      <div
        className="absolute flex w-[48px] h-[18px] right-[5px] bottom-[5px] cursor-pointer"
        onClick={handleCommentImgRecommend}
      >
        <div className="me-1">
          <Heart />
        </div>
        <div className="text-white text-[12px] leading-4">
          {commentImgRecommendCount}
        </div>
      </div>
    </div>
  );
};

export default CatFavorite;
