import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { FileUpload } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Title from "../../components/common/Typography/Title";

function Comment() {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="コメント入力ページ" />
        <Title title="推しコメント入力" />
        <section className="flex items-center py-9">
          <div className="flex items-center gap-4 mr-10">
            <img src="/assets/imgs/icons/cat_avatar_3.png" alt="cat_avatar_3" />
            <a href="#" className="border-b border-[#6d6d6d]">
              猫好きさん
            </a>
          </div>
          <div className="mr-5">
            <img src="/assets/imgs/icons/pink-arrow.png" alt="pink-arrow" />
          </div>
          <div className="flex items-center gap-4 mr-12">
            <img src="/assets/imgs/icons/face_empty.png" alt="face_empty" />
            <p className="text-xl font-medium">なまむぎなまごめ</p>
          </div>
          <p>への投稿をするニャー</p>
        </section>
        <div className="bg-white pt-14 pb-12 mb-24">
          <div className="w-[640px] m-auto border-b pb-[27px] border-[#CCC]">
            {/* row 1 */}
            <div>
              <img
                src="/assets/imgs/cats/cat_detail_carousel.png"
                alt="cat_detail_carousel"
              />
            </div>
            <div>
              <p className="text-xl mt-8 pb-4 border-b border-[#ccc]">
                コメントを入力するニャー
              </p>
              <p className="py-4">
                推し猫への想い／推し猫の行動や性格／お店のおススメポイントなど（000文字以内）
              </p>
            </div>
            <textarea className="w-full h-60 border border-[#CCC]"></textarea>
            <div>
              <p className="text-xl mt-8 pb-4 border-b border-[#ccc]">
                写真を登録するニャ
              </p>
              <p className="py-4">
                許可されていない人や動物の写真を撮らないようにお願いします
              </p>
            </div>
            <button className="w-full mt-[24px] h-[48px] flex justify-center bg-[#F3F3F3] py-3">
              <FileUpload />{" "}
              <span className="test-[14px] leading-[19px] ms-[10px]">
                画像をドラック＆ドロップまたはファイル名選択
              </span>
            </button>
            <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
            {/* row 5 */}
            <div className="pt-[32px] flex justify-between items-center flex-wrap">
              <div className="w-full flex justify-center">
                <label className="text-[16px]" htmlFor="privacy">
                  個人情報の取扱い方針
                </label>
              </div>
              <div className="w-full flex justify-center mt-[19px]">
                <textarea
                  name="privacy"
                  id="privacy"
                  className="h-[160px] w-[536px] border border-[#CCCCCC]"
                ></textarea>
              </div>
              <div className="w-full flex justify-center mt-[27px]">
                <FormControlLabel
                  control={<Checkbox />}
                  label="同意するニャン"
                />
              </div>
            </div>
          </div>
          <div className="mt-[47px] text-center">
            <button
              className={
                "text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white"
              }
            >
              確認ニャ！
            </button>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}

export default Comment;
