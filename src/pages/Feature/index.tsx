import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import FeatureCard from "../../components/basic/FeatureCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const features = new Array(12).fill({
  imgUrl: "/assets/imgs/cats/feature_cat.webp",
  text: "特集内容コピー特集内容コピー特集内容コピー特集内容コピー",
});

const FeaturePage = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="特集を見るニャ！（一覧）" />
        <Title title="特集（仮）一覧" />
        <div className="mt-[32px] mb-[56px] flex flex-wrap justify-between">
          {features &&
            features.map((e, key) => {
              return <FeatureCard imgUrl={e.imgUrl} text={e.text} key={key} />;
            })}
        </div>
        <div className="flex justify-center mt-[48px] mb-[52px]">
          <Pagination
            count={5}
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
