import { lazy } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
const CatDetail = lazy(() => import("../../components/common/CatDetail"));

const OshinyanDetail = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="看板猫詳細" />
        <div className="mt-2">
          <CatDetail />
        </div>
      </Container>
    </MainLayout>
  );
};

export default OshinyanDetail;
