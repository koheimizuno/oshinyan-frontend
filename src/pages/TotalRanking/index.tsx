import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import Store from "../../components/common/ColumnSection";
import Notices from "../../components/common/Notices";
import LargeCatCard from "../../components/basic/LargeCatCard";
import CatCard from "../../components/basic/blog/CatCard";
import { CapSecond } from "../../components/basic/icons/CapSecond";
import { CapThird } from "../../components/basic/icons/CapThird";
import SmallCatCard from "../../components/basic/SmallCatCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import axios from "axios";
import { CatObjectType } from "../../constant/type";
import Container from "../../components/basic/Container";
import BannerCarousel from "../../components/common/BannerCarousel";

const TotalRanking = () => {
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string[]>([]);
  const [characterKeyword, selectCharacterKeyword] = useState<string[]>([]);
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [characterShow, setCharacterShow] = useState(false);
  const [attendanceKeyword, selectAttendanceKeyword] = useState<string[]>([]);
  const [attendanceShow, setAttendanceShow] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const { authLoading } = useSelector((state: any) => state.user);
  const { catLoading } = useSelector((state: any) => state.cat);
  const { isAuthenticated } = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("api/totalrankingcat");
        setCatData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [isAuthenticated, catLoading, authLoading]);

  const submitSearchPrefecture = async () => {
    try {
      if (prefectureKeyword.length !== 0) {
        const { data } = await axios.get("api/searchprefecture", {
          params: {
            keyword: prefectureKeyword,
          },
        });
        setCatData(data);
      }
    } catch (error) {}
    setPrefectureShow(false);
    selectPrefectureKeyword([]);
  };

  const submitSearchCharacter = async () => {
    try {
      if (characterKeyword.length !== 0) {
        const { data } = await axios.get("api/searchcharacter", {
          params: {
            keyword: characterKeyword,
          },
        });
        setCatData(data);
      }
    } catch (error) {}
    setCharacterShow(false);
    selectCharacterKeyword([]);
  };

  const submitSearchAttendance = () => {};

  const handleFreeSearch = async () => {
    try {
      if (searchWord !== null) {
        const { data } = await axios.get(
          `api/searchword?keyword=${searchWord}`
        );
        setCatData(data);
      }
    } catch (error) {}
  };

  return (
    <MainLayout>
      <SocialLinkGroup className="h-[60px]" />
      <BannerCarousel />
      <SearchBar
        prefectureKeyword={prefectureKeyword}
        selectPrefectureKeyword={selectPrefectureKeyword}
        prefectureShow={prefectureShow}
        setPrefectureShow={setPrefectureShow}
        submitSearchPrefecture={submitSearchPrefecture}
        characterKeyword={characterKeyword}
        selectCharacterKeyword={selectCharacterKeyword}
        characterShow={characterShow}
        setCharacterShow={setCharacterShow}
        submitSearchCharacter={submitSearchCharacter}
        attendanceKeyword={attendanceKeyword}
        selectAttendanceKeyword={selectAttendanceKeyword}
        attendanceShow={attendanceShow}
        setAttendanceShow={setAttendanceShow}
        submitSearchAttendance={submitSearchAttendance}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        handleFreeSearch={handleFreeSearch}
      />
      <div className="bg-[#F5F4EC]">
        <Container>
          <RankingBar />
          <div className="xs:max-w-[480px] xs:w-full xs:m-auto xs:mt-[24px] xs:mb-[24px] md:ml-0 ranking-1">
            {catData.length !== 0 ? (
              <div className="ranking-1-tle flex gap-[8px]">
                <img
                  src="/assets/imgs/icons/ranking-1-cap.svg"
                  alt="ranking-1-cap"
                />
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
              images={catData[0].images}
              admin_images={catData[0].admin_images}
              character={catData[0].character}
              favorite_things={catData[0].favorite_things}
              attendance={catData[0].attendance}
              description={catData[0].description}
              recommend={catData[0].recommend}
              created_date={catData[0].created_date}
            />
          )}
          <div className="md:flex md:justify-between md:flex-wrap ">
            {catData &&
              catData.slice(1, 4).map((e, i) => (
                <div className="flex flex-col" key={i}>
                  <div className="xs:max-w-[480px] xs:w-full xs:m-auto xs:mt-[24px] xs:mb-[15px] md:ml-0 flex leading-[27px]">
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
                    images={e.images}
                    admin_images={e.admin_images}
                    character={e.character}
                    favorite_things={e.favorite_things}
                    attendance={e.attendance}
                    description={e.description}
                    recommend={e.recommend}
                    created_date={e.created_date}
                  />
                </div>
              ))}
          </div>
          <div
            className={`flex-wrap m-auto mt-[16px] grid grid-cols-2 gap-x-[24px] gap-y-[16px] border-b border-[#CBB279] ${
              catData.length !== 0 && "pb-[65px]"
            }`}
          >
            {catData &&
              catData.slice(4, 10).map((e, i) => (
                <div
                  className="xs:max-w-[300px] md:max-w-none flex flex-col m-auto w-full"
                  key={i}
                >
                  <div className="m-auto">
                    <div className="flex leading-[27px] mb-[7px]">
                      {i + 5}位
                    </div>
                    <SmallCatCard
                      id={e.id}
                      cat_name={e.cat_name}
                      shop={e.shop}
                      images={e.images}
                      admin_images={e.admin_images}
                      character={e.character}
                      favorite_things={e.favorite_things}
                      attendance={e.attendance}
                      description={e.description}
                      recommend={e.recommend}
                      created_date={e.created_date}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div className="pt-[65px] pb-[80px]">
              <div className="mb-[24px] hover:opacity-70">
                <Link to="/nyanplace" className="relative">
                  <img src="/assets/imgs/signboard.webp" alt="signboard" />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] text-white font-bold tracking-widest">
                    『看板猫に会える場所』一覧
                  </p>
                </Link>
              </div>
              <div className="hover:opacity-70">
                <Link to="/shopresister">
                  <img src="/assets/imgs/member.webp" alt="member" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Store />
      <Notices />
    </MainLayout>
  );
};

export default TotalRanking;
