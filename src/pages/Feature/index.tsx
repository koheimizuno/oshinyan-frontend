import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import FeatureCard from "../../components/basic/FeatureCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { FeatureType } from "../../constant/type";

const FeaturePage = () => {
  const [featureData, setFeatureData] = useState<FeatureType[]>([]);
  useEffect(() => {
    const fetchFeatureData = async () => {
      const { data } = await axios.get("api/feature/");
      setFeatureData(data);
    };
    fetchFeatureData();
  }, []);
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="特集を見るニャ！（一覧）" />
        <Title title="特集（仮）一覧" />
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
  );
};

export default FeaturePage;
