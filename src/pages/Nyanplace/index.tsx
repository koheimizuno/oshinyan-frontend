import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SignboardSearchBar from "../../components/common/SignboardSearchBar";
import SignboardCard from "../../components/basic/SignboardCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

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

const Nyanplace = () => {
  const [regions, setRegions] = useState<string[]>([]);

  return (
    <>
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="看板猫に会える場所一覧" />
          <Title title="『看板猫』に会える場所一覧" />
          <div className="bg-white mt-[24px]">
            <SignboardSearchBar list={regions} setList={setRegions} />
          </div>
          <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-y-4">
            {Cats &&
              Cats.map((e) => {
                return (
                  <SignboardCard
                    imgUrl={e.imgUrl}
                    cafe={e.cafe}
                    prefecture={e.prefecture}
                  />
                );
              })}
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Nyanplace;
