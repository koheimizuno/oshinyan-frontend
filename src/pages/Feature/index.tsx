import { lazy, useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";
import Title from "../../components/common/Typography/Title";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import { Pagination } from "@mui/material";
import { FeatureType } from "../../constant/type";
import { Notification } from "../../constant/notification";
const FeatureCard = lazy(() => import("../../components/basic/FeatureCard"));

const FeaturePage = () => {
  const [featureData, setFeatureData] = useState<FeatureType[]>([]);
  useEffect(() => {
    const fetchFeatureData = async () => {
      try {
        const { data } = await axios.get("api/feature/");
        setFeatureData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchFeatureData();
  }, []);
  return (
    <>
      <HelmetPage
        title="推しニャン｜特集ページ一覧"
        description="全国の看板猫が簡単に検索できる特集ページです。自分の家の近くや、好みの看板猫を特集から探してみてください！"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="特集を見るニャ！（一覧）" />
          <Title title="特集一覧" />
          <div className="mt-[32px] mb-[56px] flex flex-wrap justify-between">
            {featureData &&
              featureData.map((e, key) => {
                return (
                  <FeatureCard
                    key={key}
                    id={e.id}
                    imgUrl={e.image.imgs}
                    title={e.title}
                  />
                );
              })}
          </div>
          <div className="flex justify-center mt-[48px] mb-[52px]">
            <Pagination
              count={featureData.length}
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

export default FeaturePage;
