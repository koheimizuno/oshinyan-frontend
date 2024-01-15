import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import CatCard from "../../components/basic/blog/CatCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const Cats = [
  {
    imgUrl: ["/assets/imgs/cats/cat1.png", "/assets/imgs/cats/cat1-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat2.png", "/assets/imgs/cats/cat2-2.png"],
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat3.png", "/assets/imgs/cats/cat3-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat4.png", "/assets/imgs/cats/cat4-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat5.png", "/assets/imgs/cats/cat5-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat6.png", "/assets/imgs/cats/cat6-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat7.png", "/assets/imgs/cats/cat7-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat8.png", "/assets/imgs/cats/cat8-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat9.png", "/assets/imgs/cats/cat9-2.png"],
    isNew: true,
    isChu: false,
  },
];

const isChu = true;
const isNew = false;

const FeatureDetail = () => {
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
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="特集を見るニャ！（各特集）" />
        <Title title="特集（仮）一覧" />
        <div className="mt-[24px] text-[20px] leading-[27px]">
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
          <br />
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
        </div>
        <div className="mt-[32px] mb-[56px] flex flex-wrap justify-between">
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
                  isNew={isNew}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-[32px] mb-[68px]">
          <Pagination
            count={10}
            defaultPage={1}
            boundaryCount={1}
            color="secondary"
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Container>
    </MainLayout>
  );
};

export default FeatureDetail;
