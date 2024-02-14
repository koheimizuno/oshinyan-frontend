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

const Top = () => {
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [advertiseData, setAdvertiseData] = useState<CatObjectType[]>([]);
  const { catLoading } = useSelector((state: any) => state.cat);
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

  return (
    <MainLayout>
      <SocialLinkGroup page="top" />
      <BannerCarousel />
      <div className="h-[60px]"></div>
      <Container>
        <RankingBar />
        <div className="mt-[12px]">
          <div className="flex justify-between flex-wrap gap-3">
            {catData.length !== 0 ? (
              catData.map((e, i) => (
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
                  last_update={e.last_update}
                />
              ))
            ) : (
              <p className="py-10 block w-full text-center text-xl">
                お探しの看板猫はありません
              </p>
            )}
          </div>
        </div>
        <div className="bg-white text-center py-[65px] mb-[16px]">
          <h3 className="text-[16px]">キャンペーン / AD</h3>
        </div>
        <div>
          <div className="flex justify-between flex-wrap ">
            {advertiseData.length !== 0 ? (
              advertiseData.map((e, i) => (
                <CatCard
                  key={i}
                  id={e.id}
                  advertise="advertise"
                  cat_name={e.cat_name}
                  shop={e.shop}
                  images={e.images}
                  character={e.character}
                  favorite_things={e.favorite_things}
                  attendance={e.attendance}
                  description={e.description}
                  recommend={e.recommend}
                  last_update={e.last_update}
                />
              ))
            ) : (
              <p className="py-10 block w-full text-center text-xl">
                お探しの看板猫はありません
              </p>
            )}
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
                <img src="/assets/imgs/signboard.webp" alt="signboard" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[32px] text-white font-bold tracking-widest whitespace-nowrap">
                  『看板猫に会える場所』一覧
                </p>
              </Link>
            </div>
            <div className="hover:opacity-70">
              <Link to="/shopresister">
                <img src="/assets/imgs/member.webp" alt="" />
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
