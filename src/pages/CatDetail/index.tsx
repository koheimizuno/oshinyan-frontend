import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import CatDetail from "../../components/common/CatDetail";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";

const CatDetailPage = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <div className="mt-4">
          <PageBar page="看板猫詳細" />
        </div>
        <div className="mt-2">
          <CatDetail />
        </div>
      </Container>
    </MainLayout>
  );
};

export default CatDetailPage;
