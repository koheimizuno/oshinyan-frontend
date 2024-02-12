import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { FileUpload } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import Title from "../../components/common/Typography/Title";
import PrivacyComponent from "../../components/common/PrivacyComponent";
import Button from "../../components/basic/Button";
import CatDetailCarousel from "../../components/common/CatDetail/components/Carousel";
import axios from "axios";
import { CatObjectType, ImageType } from "../../constant/type";
import { useSelector } from "react-redux";
import { Notification } from "../../constant/notification";

function Comment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [retrieveCat, setRetrieveCat] = useState({ cat_name: "" });
  const [comment, setComment] = useState("");
  const [catDetailImages, setCatDetailImages] = useState<string[]>([]);
  const { user } = useSelector((state: any) => state.user);
  useEffect(() => {
    const RetrieveCat = async () => {
      try {
        let list: string[] = [];
        const { data } = await axios.get(`api/cats/${id}/`);
        setRetrieveCat(data);
        data.images &&
          data.images.forEach((item: ImageType) => {
            list.push(item.imgs);
          });
        data.admin_images &&
          data.admin_images.forEach((it: ImageType) => {
            list.push(it.imgs);
          });
        setCatDetailImages(list);
      } catch (error) {
        console.log(error);
      }
    };
    RetrieveCat();
  }, []);

  const handleUpload = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("comment", comment);
    formData.append("cat", String(id));
    formData.append("user", user.user_id);
    if (selectedFiles != null) {
      const files = Array.from(selectedFiles);
      files.forEach((file) => formData.append("imgs", file));
    }
    if (checked) {
      try {
        const res = await axios.post("api/comment/", formData);
        Notification("success", "未登録店舗の登録が成功しました。");
        setTimeout(() => {
          navigate(`/oshinyan/${id}`);
        }, 2000);
      } catch (error: any) {
        if (error.response.status === 400)
          Notification("error", "店舗は既に存在します。");
        else Notification("error", "Server Error!");
      }
    }
  };

  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="コメント入力ページ" />
        <Title title="推しコメント入力" />
        <section className="flex items-center py-9">
          <div className="flex items-center gap-4 mr-10">
            <img
              src="/assets/imgs/icons/cat_avatar_3.webp"
              alt="cat_avatar_3"
            />
            <Link to="#" className="border-b border-[#6d6d6d]">
              {user.username}
            </Link>
          </div>
          <div className="mr-5">
            <img src="/assets/imgs/icons/pink-arrow.webp" alt="pink-arrow" />
          </div>
          <div className="flex items-center gap-4 mr-12">
            <img src="/assets/imgs/icons/face_empty.webp" alt="face_empty" />
            <p className="text-xl font-medium">{retrieveCat.cat_name}</p>
          </div>
          <p>への投稿をするニャー</p>
        </section>
        <form className="bg-white pt-14 pb-12 mb-24" onSubmit={handleSubmit}>
          <div className="w-[640px] m-auto border-b pb-[27px] border-[#CCC]">
            {/* row 1 */}
            <CatDetailCarousel data={catDetailImages} />
            <div>
              <p className="text-xl mt-8 pb-4 border-b border-[#ccc]">
                コメントを入力するニャー
              </p>
              <p className="py-4">
                推し猫への想い／推し猫の行動や性格／お店のおススメポイントなど（000文字以内）
              </p>
            </div>
            <textarea
              className="w-full h-60 border border-[#CCC] focus:outline-none p-2"
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setComment(e.target.value)
              }
            ></textarea>
            <div>
              <p className="text-xl mt-8 pb-4 border-b border-[#ccc]">
                写真を登録するニャ
              </p>
              <p className="py-4">
                許可されていない人や動物の写真を撮らないようにお願いします
              </p>
            </div>
            <div>
              <button
                type="button"
                className="w-full mt-[24px] h-[48px] flex justify-center bg-[#F3F3F3] py-3"
                onClick={handleUpload}
              >
                <FileUpload />{" "}
                <span className="test-[14px] leading-[19px] ms-[10px]">
                  画像をドラック＆ドロップまたはファイル名選択
                </span>
                {selectedFiles && selectedFiles.length > 0 && (
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedFiles.length} file(s)
                    selected
                  </span>
                )}
                <input
                  type="file"
                  ref={hiddenFileInput}
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={selectFiles}
                />
              </button>
            </div>
            <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
            <PrivacyComponent />
            <div className="w-full flex justify-center mt-[27px]">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e: any) => setChecked(e.target.checked)}
                  />
                }
                label="同意するニャン"
              />
            </div>
          </div>
          <div className="mt-[47px] text-center">
            <button
              type="submit"
              className={`text-[24px] ${
                checked ? "bg-[#FBA1B7]" : "bg-[#f8c6d2]"
              }  h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white`}
            >
              確認ニャ！
            </button>
          </div>
        </form>
      </Container>
    </MainLayout>
  );
}

export default Comment;
