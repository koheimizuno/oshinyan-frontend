import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BannerCarousel from "../../components/common/BannerCarousel";
import MainLayout from "../../layouts/MainLayout";
import RankingBar from "../../components/common/RankingBar";
import ColumnSection from "../../components/common/ColumnSection";
import Notices from "../../components/common/Notices";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import axios from "axios";
import { CatObjectType, ImgTagType } from "../../constant/type";
import { Notification } from "../../constant/notification";
import SearchBar from "../../components/common/SearchBar";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";
import SuspenseContent from "../../components/basic/SuspenseContent";
import CatCard from "../../components/basic/blog/CatCard";
import { MEM_BNR_IMG, MEM_BNR_SP_IMG } from "./constants";

const Top = () => {
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [catMoreBtnShow, setCatMoreBtnShow] = useState(true);
  const [advertiseData, setAdvertiseData] = useState<CatObjectType[]>([]);
  const [advertiseMoreBtnShow, setAdvertiseMoreBtnShow] = useState(true);
  const { catLoading } = useSelector((state: any) => state.cat);
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string[]>([]);
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [characterKeyword, selectCharacterKeyword] = useState<string[]>([]);
  const [characterShow, setCharacterShow] = useState(false);
  const [attendanceKeyword, selectAttendanceKeyword] = useState<string[]>([]);
  const [attendanceShow, setAttendanceShow] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  const [nypHeight, setNypHeight] = useState<string>();
  const [nypImg, setNypImg] = useState<ImgTagType[]>([]);
  const [memBnrImg, setMemBnrImg] = useState<ImgTagType[]>([]);
  const [memGap, setMemGap] = useState("");
  const { authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const { data } = await axios.get("api/randomcat/");
        setCatData(data.data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    const fetchAdvertiseCatData = async () => {
      try {
        const { data } = await axios.get("api/advertise/");
        setAdvertiseData(data.data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchCatData();
    fetchAdvertiseCatData();
  }, [isAuthenticated, catLoading, authLoading]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 452) {
        setNypHeight("h-[208px]");
        setMemBnrImg(MEM_BNR_IMG);
        setMemGap("gap-3");
        setNypImg([
          {
            src: "/assets/imgs/nyp-bnr-1.webp",
            alt: "nyp-bnr-1.webp",
            width: 240,
            height: 204,
          },
          {
            src: "/assets/imgs/nyp-bnr-2.webp",
            alt: "nyp-bnr-2.webp",
            width: 240,
            height: 204,
          },
          {
            src: "/assets/imgs/nyp-bnr-3.webp",
            alt: "nyp-bnr-3.webp",
            width: 240,
            height: 204,
          },
          {
            src: "/assets/imgs/nyp-bnr-4.webp",
            alt: "nyp-bnr-4.webp",
            width: 240,
            height: 204,
          },
        ]);
      } else {
        setNypHeight("h-[128px]");
        setMemBnrImg(MEM_BNR_SP_IMG);
        setMemGap("gap-2");
        setNypImg([
          {
            src: "/assets/imgs/nyp-bnr-sp-1.webp",
            alt: "nyp-bnr-sp-1.webp",
            width: 113,
            height: 128,
          },
          {
            src: "/assets/imgs/nyp-bnr-sp-2.webp",
            alt: "nyp-bnr-sp-2.webp",
            width: 113,
            height: 128,
          },
          {
            src: "/assets/imgs/nyp-bnr-sp-3.webp",
            alt: "nyp-bnr-sp-3.webp",
            width: 113,
            height: 128,
          },
          {
            src: "/assets/imgs/nyp-bnr-sp-4.webp",
            alt: "nyp-bnr-sp-4.webp",
            width: 113,
            height: 128,
          },
        ]);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMoreDisplay = async (count: number) => {
    try {
      const { data } = await axios.get(`api/randomcat/?count=${count + 6}`);
      setCatData(data.data);
      setCatMoreBtnShow(data.end);
    } catch (error) {
      Notification("error", "サーバーエラー");
    }
  };

  const handleAdvertiseMoreDisplay = async (count: number) => {
    try {
      const { data } = await axios.get(`api/advertise/?count=${count + 6}`);
      setAdvertiseData(data.data);
      setAdvertiseMoreBtnShow(data.end);
    } catch (error) {
      Notification("error", "サーバーエラー");
    }
  };

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
    <>
      <HelmetPage
        title="推しニャン｜看板猫がいる全国のお店が探せる・推せるサイト"
        description="看板猫がいるお店や看板猫の情報を検索できるサイト。好みの看板猫を推しニャンサイトで探し、訪問して写真投稿をしたり、推しボタンを推せたりするサイトです。"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
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
            <div className="flex justify-start flex-wrap gap-3">
              <Suspense fallback={<SuspenseContent />}>
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
              </Suspense>
            </div>
            {catMoreBtnShow && (
              <div className="w-full py-[35px] text-center border-b border-b-solid border-[#CCC]">
                <button
                  className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]"
                  onClick={() => handleMoreDisplay(catData.length)}
                >
                  <span className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
                    もっとみるニャン！
                  </span>
                </button>
              </div>
            )}
          </div>
          {advertiseData.length !== 0 && (
            <>
              <div className="bg-white text-center py-[65px] mt-4 mb-[16px]">
                <h3 className="text-[16px]">キャンペーン / AD</h3>
              </div>
              <div>
                <div className="flex justify-start flex-wrap gap-3">
                  {advertiseData &&
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
                        attendance={e.attendance}
                        description={e.description}
                        recommend={e.recommend}
                        created_date={e.created_date}
                      />
                    ))}
                </div>
              </div>
              {advertiseMoreBtnShow && (
                <div className="w-full py-[35px] text-center border-b border-b-solid border-[#CCC]">
                  <button
                    className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]"
                    onClick={() =>
                      handleAdvertiseMoreDisplay(advertiseData.length)
                    }
                  >
                    <span className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
                      もっとみるニャン！
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
          <div>
            <div className="pt-[40px] pb-[48px] md:pt-[48px] md:pb-[80px]">
              <div className="mb-[24px] hover:opacity-70">
                <Link to="/nyanplace" className="relative block">
                  <div className={`relative flex overflow-hidden ${nypHeight}`}>
                    <img
                      src={nypImg[0]?.src}
                      alt={nypImg[0]?.alt}
                      className="absolute left-0"
                      width={nypImg[0]?.width}
                      height={nypImg[0]?.height}
                    />
                    <img
                      src={nypImg[1]?.src}
                      alt={nypImg[1]?.alt}
                      className="absolute left-[25%]"
                      width={nypImg[0]?.width}
                      height={nypImg[0]?.height}
                    />
                    <img
                      src={nypImg[2]?.src}
                      alt={nypImg[2]?.alt}
                      className="absolute left-[50%]"
                      width={nypImg[0]?.width}
                      height={nypImg[0]?.height}
                    />
                    <img
                      src={nypImg[3]?.src}
                      alt={nypImg[3]?.alt}
                      className="absolute left-[75%]"
                      width={nypImg[0]?.width}
                      height={nypImg[0]?.height}
                    />
                  </div>
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] sm:text-[25px] md:text-[32px] text-white font-medium tracking-widest whitespace-nowrap">
                    『看板猫に会える場所』一覧
                  </p>
                </Link>
              </div>
              <div className="hover:opacity-70">
                <Link
                  to="/registration"
                  className={`bg-[#F6F0BC] flex flex-col justify-between m-auto ${nypHeight} p-2`}
                >
                  <div className="h-[48px] overflow-hidden">
                    <div className={`flex flex-wrap ${memGap} justify-between`}>
                      {memBnrImg
                        .slice(8)
                        .map((item: ImgTagType, key: number) => (
                          <img
                            key={key}
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="h-[48px] overflow-hidden">
                    <div className={`flex ${memGap} justify-center`}>
                      {memBnrImg
                        .slice(0, 4)
                        .map((item: ImgTagType, key: number) => (
                          <img
                            key={key}
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                          />
                        ))}
                      <p className="text-[20px] sm:text-[25px] md:text-[32px] text-[#C38154] font-medium whitespace-nowrap pl-3 pr-6">
                        『推しニャン！会員』登録
                      </p>
                      {memBnrImg
                        .slice(4, 8)
                        .map((item: ImgTagType, key: number) => (
                          <img
                            key={key}
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="h-[48px] overflow-hidden">
                    <div className={`flex flex-wrap ${memGap} justify-between`}>
                      {memBnrImg
                        .reverse()
                        .slice(8)
                        .map((item: ImgTagType, key: number) => (
                          <img
                            key={key}
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                          />
                        ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <ColumnSection />
        <Notices />
      </MainLayout>
    </>
  );
};

export default Top;
