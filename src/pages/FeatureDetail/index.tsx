import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import BlogBox from "../../components/basic/blog/BlogBox";

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
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <MainLayout>
        <Carousel />
        <Container>
          <div className="mt-4">
            <PageBar page="特集" />
          </div>
          <div className="text-[32px] leading-[43px] mt-4 pb-[14px] border-b border-[#CBB279]">
            特集（仮）一覧
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
          <div className="flex justify-center mt-[48px] mb-[52px]">
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
    </>
  );
};

export default FeatureDetail;
