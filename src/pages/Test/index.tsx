import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import { CatObjectType } from "../../constant/type";
import { Notification } from "../../constant/notification";
const BannerCarousel = lazy(
  () => import("../../components/common/BannerCarousel")
);
const CatCard = lazy(() => import("../../components/basic/blog/CatCard"));

const Test = () => {
  const navigate = useNavigate();
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const { catLoading } = useSelector((state: any) => state.cat);
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string[]>([]);
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [characterKeyword, selectCharacterKeyword] = useState<string[]>([]);
  const [characterShow, setCharacterShow] = useState(false);
  const [attendanceKeyword, selectAttendanceKeyword] = useState<string[]>([]);
  const [attendanceShow, setAttendanceShow] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  const { user, authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) user.username !== "admin" && navigate("/");
  }, [isAuthenticated, navigate, user.username]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        if (user.username === "admin") {
          const { data } = await axios.get("api/catstest/");
          setCatData(data);
        }
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchCatData();
  }, [isAuthenticated, catLoading, authLoading, user.username]);

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
        <div className="my-[12px]">
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
                  attendance={e.attendance}
                  description={e.description}
                  recommend={e.recommend}
                  created_date={e.created_date}
                />
              ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Test;
