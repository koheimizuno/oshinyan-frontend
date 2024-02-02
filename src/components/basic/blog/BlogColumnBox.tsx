import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface Props {
  imgUrl: string;
  isNew?: boolean;
  isChu?: boolean;
  name?: string;
  cafe?: string;
  vote?: number;
  character?: string[] | null;
  description?: string | null;
}

const BlogColumnBox = ({
  imgUrl = "",
  isNew = false,
  isChu = false,
  name,
  cafe,
  vote,
  character,
  description,
}: Props) => {
  const navigate = useNavigate();
  const goCatDetail = (id: number) => {
    navigate(`/oshinyan/${id}`);
  };
  return (
    <>
      <>
        <div
          className=" w-[312px] h-[384px] mb-[15px] hover:opacity-70 bg-white"
          onClick={() => {
            goCatDetail(1);
          }}
        >
          <div className="relative w-[312px] h-[234px]">
            <img src={imgUrl} className="cover" alt="" />
            {isChu ? (
              <span className="absolute top-[8px] right-[8px]">
                <img src="/assets/imgs/icons/recommend.svg" alt="" />
              </span>
            ) : (
              <span className="absolute top-[8px] right-[8px]">
                <img src="/assets/imgs/icons/btn-foot.svg" alt="" />
              </span>
            )}
            {isNew && (
              <span className="absolute top-0 left-0">
                <img src="/assets/imgs/icons/parts-new.svg" alt="" />
              </span>
            )}
          </div>
          <div className="p-4">
            <p className="py-2 tracking-tighter text-xl border-b border-[#ccc]">
              まるで狛「猫」！15年間お店を見守る名物看板猫ちゃんの…
            </p>
            <div className="flex justify-between py-4">
              <div className="flex gap-2">
                <img src="/assets/imgs/icons/pen.png" alt="pen" />
                <Link to="#" className="border-b border-black">
                  猫太郎
                </Link>
              </div>
              <p>2024.00.00</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default BlogColumnBox;
