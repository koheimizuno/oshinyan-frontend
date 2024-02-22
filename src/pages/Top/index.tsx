import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BannerCarousel from "../../components/common/BannerCarousel";
import MainLayout from "../../layouts/MainLayout";
import RankingBar from "../../components/common/RankingBar";
import ColumnSection from "../../components/common/ColumnSection";
import Notices from "../../components/common/Notices";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import CatCard from "../../components/basic/blog/CatCard";
import axios from "axios";
import { CatObjectType } from "../../constant/type";
import { Notification } from "../../constant/notification";
import SearchBar from "../../components/common/SearchBar";

const Top = () => {
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [advertiseData, setAdvertiseData] = useState<CatObjectType[]>([]);
  const { catLoading } = useSelector((state: any) => state.cat);
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string[]>([]);
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [characterKeyword, selectCharacterKeyword] = useState<string[]>([]);
  const [characterShow, setCharacterShow] = useState(false);
  const [attendanceKeyword, selectAttendanceKeyword] = useState<string[]>([]);
  const [attendanceShow, setAttendanceShow] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  const { authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const { data } = await axios.get("api/randomcat");
        setCatData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    const fetchAdvertiseCatData = async () => {
      try {
        const { data } = await axios.get("api/randomadvertise");
        setAdvertiseData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchCatData();
    fetchAdvertiseCatData();
  }, [isAuthenticated, catLoading, authLoading]);

  const handleMoreDisplay = () => {};

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
    selectPrefectureKeyword([]);
    setPrefectureShow(false);
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
    selectCharacterKeyword([]);
    setCharacterShow(false);
  };

  const submitSearchAttendance = async () => {
    try {
      if (attendanceKeyword.length !== 0) {
        const { data } = await axios.get("api/searchattendance", {
          params: {
            keyword: attendanceKeyword,
          },
        });
        setCatData(data);
      }
    } catch (error) {}
    selectAttendanceKeyword([]);
    setAttendanceShow(false);
  };

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

  console.log(catData);

  return (
    <MainLayout>
      <SocialLinkGroup page="top" />
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
      <Container>
        <RankingBar />
        <div className="mt-[12px]">
          <div className="flex justify-between flex-wrap gap-3">
            {catData.length !== 0 &&
              catData.map((e, i) => (
                <CatCard
                  key={i}
                  id={e.id}
                  is_public={e.is_public}
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
              ))}
          </div>
        </div>
        <div className="bg-white text-center py-[65px] mt-4 mb-[16px]">
          <h3 className="text-[16px]">キャンペーン / AD</h3>
        </div>
        <div>
          <div className="flex justify-between flex-wrap ">
            {advertiseData.length !== 0 &&
              advertiseData.map((e, i) => (
                <CatCard
                  key={i}
                  id={e.id}
                  is_public={e.is_public}
                  advertise="advertise"
                  cat_name={e.cat_name}
                  shop={e.shop}
                  images={e.images}
                  character={e.character}
                  favorite_things={e.favorite_things}
                  attendance={e.attendance}
                  description={e.description}
                  recommend={e.recommend}
                  created_date={e.created_date}
                />
              ))}
          </div>
        </div>
        <div className="pt-[15px] pb-[35px] text-center border-b border-b-solid border-[#CCC]">
          <button
            className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]"
            onClick={handleMoreDisplay}
          >
            <span className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
              もっとみるニャン！
            </span>
          </button>
        </div>
      </Container>
      <Container>
        <div>
          <div className="pt-[48px] pb-[80px]">
            <div className="mb-[24px] hover:opacity-70">
              <Link to="/nyanplace" className="relative">
                <img
                  src="/assets/imgs/nyanplace-banner.webp"
                  alt="nyanplace-banner"
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[32px] text-white font-bold tracking-widest whitespace-nowrap">
                  『看板猫に会える場所』一覧
                </p>
              </Link>
            </div>
            <div className="hover:opacity-70">
              <Link to="/registration">
                <img src="/assets/imgs/member.webp" alt="member" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <ColumnSection />
      <Notices />
    </MainLayout>
  );
};

export default Top;
