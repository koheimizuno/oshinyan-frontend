import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import LargeCatCard from "../../components/basic/LargeCatCard";
import CatCard from "../../components/basic/blog/CatCard";
import { CapSecond } from "../../components/basic/icons/CapSecond";
import { CapThird } from "../../components/basic/icons/CapThird";
import SmallCatCard from "../../components/basic/SmallCatCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const TotalRanking = () => {
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string | null>(
    null
  );
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const { authLoading } = useSelector((state: any) => state.user);
  const { catLoading } = useSelector((state: any) => state.cat);
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("cat/totalrankingcat");
        setCatData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [isAuthenticated, catLoading, authLoading]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        if (prefectureKeyword !== null) {
          const { data } = await axios.get(
            "cat/searchprefecture?keyword=" + prefectureKeyword
          );
          setCatData(data);
        }
      } catch (error) {}
    };
    fetchSearchData();
    setPrefectureShow(false);
  }, [prefectureKeyword]);

  const handleFreeSearch = async () => {
    try {
      if (searchWord !== null) {
        const { data } = await axios.get(
          "cat/searchword?keyword=" + searchWord
        );
        setCatData(data);
      }
    } catch (error) {}
  };

  return (
    <MainLayout>
      <SocialLinkGroup />
      <SearchBar
        selectPrefectureKeyword={selectPrefectureKeyword}
        setPrefectureShow={setPrefectureShow}
        prefectureShow={prefectureShow}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        handleFreeSearch={handleFreeSearch}
      />
      <div className="bg-[#F5F4EC]">
        <div className="  w-[960px] m-auto ">
          <RankingBar />
          <div className="ranking-1 mt-[24px] mb-[24px]">
            {catData.length !== 0 ? (
              <div className="ranking-1-tle flex gap-[8px]">
                <img src="/assets/imgs/icons/ranking-1-cap.svg" alt="cat" />{" "}
                <span className="text-[24px] font-bold leading-[32px]">
                  1位
                </span>
              </div>
            ) : (
              <p className="py-10 block w-full text-center text-xl">
                お探しの看板猫はありません
              </p>
            )}
          </div>
          {catData[0] && (
            <LargeCatCard
              id={catData[0].id}
              cat_name={catData[0].cat_name}
              shop={catData[0].shop}
              cat_images={catData[0].cat_images}
              cat_admin_images={catData[0].cat_admin_images}
              character={catData[0].character}
              favorite_things={catData[0].favorite_things}
              attendance={catData[0].attendance}
              description={catData[0].description}
              recommend={catData[0].recommend}
              last_update={catData[0].last_update}
            />
          )}
          <div className="mt-[24px]">
            <div className="flex justify-between flex-wrap ">
              {catData &&
                catData.slice(1, 4).map((e, i) => (
                  <div className="flex flex-col" key={i}>
                    <div className="flex leading-[27px] mb-[7px]">
                      {i === 0 && (
                        <div className="w-[36px] h-[26px] me-[12px]">
                          <CapSecond />
                        </div>
                      )}
                      {i === 1 && (
                        <div className="w-[36px] h-[26px] me-[12px]">
                          <CapThird />
                        </div>
                      )}
                      {i + 2}位
                    </div>
                    <CatCard
                      key={i}
                      id={e.id}
                      cat_name={e.cat_name}
                      shop={e.shop}
                      cat_images={e.cat_images}
                      cat_admin_images={e.cat_admin_images}
                      character={e.character}
                      favorite_things={e.favorite_things}
                      attendance={e.attendance}
                      description={e.description}
                      recommend={e.recommend}
                      last_update={e.last_update}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`flex-wrap mt-[16px] grid grid-cols-2 gap-x-[24px] gap-y-[16px] border-b border-[#CBB279] ${
              catData.length !== 0 && "pb-[65px]"
            }`}
          >
            {catData &&
              catData.slice(4, 10).map((e, i) => (
                <div className="flex flex-col" key={i}>
                  <div className="flex leading-[27px] mb-[7px]">{i + 5}位</div>
                  <SmallCatCard
                    id={e.id}
                    cat_name={e.cat_name}
                    shop={e.shop}
                    cat_images={e.cat_images}
                    cat_admin_images={e.cat_admin_images}
                    character={e.character}
                    favorite_things={e.favorite_things}
                    attendance={e.attendance}
                    description={e.description}
                    recommend={e.recommend}
                    last_update={e.last_update}
                  />
                </div>
              ))}
          </div>
          <div>
            <div className="pt-[65px] pb-[80px]">
              <div className="mb-[24px] hover:opacity-70">
                <Link to="/nyanplace" className="relative">
                  <img src="/assets/imgs/signboard.png" alt="signboard" />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] text-white font-bold tracking-widest">
                    『看板猫に会える場所』一覧
                  </p>
                </Link>
              </div>
              <div className="hover:opacity-70">
                <Link to="/shopresister">
                  <img src="/assets/imgs/member.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Store />
      <Notices />
    </MainLayout>
  );
};

export default TotalRanking;
