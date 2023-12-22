import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import BlogBox from "../../components/basic/blog/BlogBox";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/cat1.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat2.png",
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: "/assets/imgs/cats/cat3.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat4.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat5.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat6.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat7.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat8.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat9.png",
    isNew: true,
    isChu: false,
  },
];

const FeatureDetail = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="各特集" />
        <Title title="特集（仮）一覧" />
        <div className="mt-[24px] text-[20px] leading-[27px]">
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
          <br />
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
        </div>
        <div className="mt-[32px] mb-[56px] flex flex-wrap justify-between">
          <div className="flex justify-between flex-wrap ">
            {Cats.map((e, i) => (
              <BlogBox
                key={i}
                imgUrl={e.imgUrl}
                isNew={e.isNew}
                isChu={e.isChu}
                name={"heracles"}
                cafe={"cafe"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={"this is description"}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[32px] mb-[68px]">
          <Pagination
            count={1000}
            defaultPage={10}
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
