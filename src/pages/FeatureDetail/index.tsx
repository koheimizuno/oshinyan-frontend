import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";
import Title from "../../components/common/Typography/Title";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import { Pagination } from "@mui/material";
import { FeatureType } from "../../constant/type";
import { Notification } from "../../constant/notification";
const CatCard = lazy(() => import("../../components/basic/blog/CatCard"));

const FeatureDetail = () => {
  const { id } = useParams();
  const [featureData, setFeatureData] = useState<FeatureType>();
  useEffect(() => {
    const fetchFeatureData = async () => {
      try {
        const { data } = await axios.get(`api/feature/${id}/`);
        setFeatureData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchFeatureData();
  }, [id]);

  return (
    <>
      <HelmetPage
        title={`推しニャン｜特集ページ_特集タイトル ${
          featureData?.character
            ? "性格 「" + featureData?.character + "」猫の特集"
            : featureData?.prefecture + "の猫の特集"
        }`}
        description={`特集タイトル ${
          featureData?.character
            ? "性格 「" + featureData?.character + "」猫の特集"
            : featureData?.prefecture + "の猫の特集"
        }｜推しニャンの特集ページ`}
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="特集を見るニャ！（各特集）" />
          <Title
            title={`${
              featureData?.character
                ? "性格 「" + featureData?.character + "」猫の特集"
                : featureData?.prefecture + "の猫の特集"
            }`}
          />
          <div className="mt-[24px] text-[20px] leading-[27px]">
            {featureData?.description}
          </div>
          <div className="mt-[32px] mb-[56px] flex justify-between flex-wrap gap-3">
            {featureData &&
              featureData.cats &&
              featureData.cats.map((e, i) => (
                <CatCard
                  key={i}
                  id={e.id}
                  is_public={e.is_public}
                  cat_name={e.cat_name}
                  shop={e.shop}
                  images={e.images}
                  admin_images={e.admin_images}
                  character={e.character}
                  attendance={e.attendance}
                  description={e.description}
                  recommend={e.recommend}
                  created_date={e.created_date}
                />
              ))}
          </div>
          <div className="flex justify-center mt-[32px] mb-[68px]">
            <Pagination
              count={featureData?.cats.length}
              defaultPage={1}
              boundaryCount={1}
              color="secondary"
              variant="outlined"
              shape="rounded"
            />
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default FeatureDetail;
