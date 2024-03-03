import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import CatDetail from "../../components/common/CatDetail";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";

const OshinyanDetail = () => {
  return (
    <>
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="看板猫詳細" />
          <div className="mt-2">
            <CatDetail />
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default OshinyanDetail;
