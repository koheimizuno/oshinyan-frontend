import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import CatCard from "../../components/basic/blog/CatCard";
import EditButton from "../../components/basic/EditButton";
import FavoriteCard from "../../components/basic/FavoriteCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
];

const imgUrl: object[] = [
  {
    imgUrl: ["/assets/imgs/cats/cat1.png", "/assets/imgs/cats/cat1-2.png"],
  },
];

const isChu = true;
const isNew = false;

const MyPage = () => {
  const [catData, setCatData] = useState<CatObjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("cat");
        setCatData(res.data.serializer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="マイページ" />
          <Title title="マイページ" />
          <div className="p-[24px] pb-[16px] bg-white">
            <div className="flex pb-[24px] border-b border-[#CCCCCC]">
              <div className="w-[72px] h-[72px] me-[40px]">
                <img
                  className="w-full"
                  src="/assets/imgs/info_cat.png"
                  alt="cat"
                />
              </div>
              <div className="grow flex justify-between items-center me-[32px]">
                <div className="text-[24px] font-bold leading-[32px]">
                  猫好きさん
                </div>
                <div>
                  <EditButton onClick={() => {}} />
                </div>
              </div>
              <div className="text-[24px] leading-[32px] ps-[32px] border-s border-[#CCCCCC]">
                Oshy-Nyan ID : 0000222
              </div>
            </div>
            <div className="flex mt-[16px]">
              <div className="w-[152px] me-[24px] text-[16px] leading-[21px]">
                登録メールアドレス
              </div>
              <div className="me-auto text-[16px] leading-[21px] font-bold">
                tetsuro.yoneda@xxxxx.co.jp
              </div>
              <div>
                <EditButton onClick={() => {}} />
              </div>
            </div>
          </div>
          <div className="mt-[40px] text-[20px] leading-[27px]">
            マイページには自分の推しニャン（サイト内で推しボタンを押した猫）が一覧で出てくるニャー
          </div>
          <div className="mt-[32px] mb-[48px] flex flex-wrap justify-between">
            <div className="flex justify-between flex-wrap ">
              {catData &&
                catData.map((e, i) => (
                  <CatCard
                    key={i}
                    id={e.id}
                    cat_name={e.cat_name}
                    shop_name={e.shop_name}
                    prefecture={e.prefecture}
                    cat_images={e.cat_images}
                    character={e.character}
                    favorite_things={e.favorite_things}
                    description={e.description}
                    attendance={e.attendance}
                    recommend_user={e.recommend_user}
                    isNew={false}
                  />
                ))}
            </div>
          </div>
          <div className="mb-4 text-[24px] leading-[32px] border-b border-[#CBB279] pb-[16px]">
            投稿した推しニャン画像
          </div>
          <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-4">
            {Cats &&
              Cats.map((e) => {
                return (
                  <FavoriteCard
                    imgUrl={e.imgUrl}
                    date="2023.01.01"
                    vote="000"
                  />
                );
              })}
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default MyPage;
