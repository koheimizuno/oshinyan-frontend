import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import BlogBox from "../../components/basic/blog/BlogBox";
import EditButton from "../../components/basic/EditButton";
import FavoriteCard from "../../components/basic/FavoriteCard";
import SearchBar from "../../components/common/SearchBar";
import SignboardSearchBar from "../../components/common/SignboardSearchBar";
import SignboardCard from "../../components/basic/SignboardCard";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
];

export default () => {
  const [page, setPage] = useState<number>(0);
  const [regions, setRegions] = useState<string[]>([]);

  return (
    <>
      <MainLayout>
        <Carousel />
        <Container>
          <div className="mt-4">
            <PageBar page="各特集" />
          </div>
          <div className="text-[32px] leading-[43px] mt-4 pb-[14px] border-b border-[#CBB279]">
            『看板猫』に会える場所一覧
          </div>
          <div className="bg-white mt-[24px]">
            <SignboardSearchBar  list={regions} setList={setRegions}/>
          </div>
          <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-y-4">
            {Cats.map((e) => {
              return (
                <SignboardCard imgUrl={e.imgUrl} cafe={e.cafe} prefecture={e.prefecture} />
              );
            })}
          </div>
        </Container>
      </MainLayout>
    </>
  );
};
