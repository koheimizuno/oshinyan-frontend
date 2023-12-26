import React from "react";
import CustomButton from "../BasicButton";
import { useNavigate } from "react-router-dom";

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

const BlogBox = ({
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
    navigate(`/cat/detail/${id}`);
  };
  return (
    <div
      className="m-auto w-[312px] h-[512px] mb-[15px] hover:opacity-70"
      onClick={() => {
        goCatDetail(1);
      }}
    >
      <div className="w-full">
        <div className="relative w-[312px] h-[234px]">
          <img src={imgUrl} className="cover" alt="" />
          {isChu ? (
            <span className="absolute top-[8px] right-[8px]">
              <img src="/assets/imgs/mark_chu.png" alt="" />
            </span>
          ) : (
            <span className="absolute top-[8px] right-[8px]">
              <img src="/assets/imgs/btn-foot.svg" alt="" />
            </span>
          )}
          {isNew && (
            <span className="absolute top-0 left-0">
              <img src="/assets/imgs/parts-new.svg" alt="" />
            </span>
          )}
        </div>
        <div className=" px-[16px]  bg-white h-[278px]">
          <div>
            <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
              なまむぎなまごめ
            </h3>
          </div>
          <div className="flex justify-between">
            <div>
              <a
                href="javascript:;"
                className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap "
              >
                にゃんにゃんカフェ
              </a>
            </div>
            <div>
              <CustomButton value={"東京都"}></CustomButton>
            </div>
          </div>
          <div className="flex justify-content-start items-center mt-[15px] mb-[8px]">
            <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
              <img
                src="/assets/imgs/recommend.svg"
                className=" align-items-center "
                alt=""
              />
            </span>
            <h2 className="text-[24px] d-inline-block">000ニャン</h2>
          </div>
          <hr className="border border-[#CCC]" />
          <div className="flex justify-content-start items-center pt-[10px] pb-[19px] ">
            <div>
              <img src="/assets/imgs/hear-yellow.svg" alt="" />
            </div>
            <div className="pl-[8px]">
              <p>性格</p>
            </div>
            <div className="pl-[8px]">
              <CustomButton value={"やさしい"} />
            </div>
            <div className="pl-[8px]">
              <CustomButton value={"気分屋さん"} />
            </div>
          </div>
          <div className=" pb-[43px]">
            <p className="break-words	text-[16px] text-ellipsis overflow-hidden whitespace-wrap ">
              □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
