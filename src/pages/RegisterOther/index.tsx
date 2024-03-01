import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import ShopRegisterForm from "../../components/common/ShopRegisterForm";
import AmbassadorRegisterFrom from "../../components/common/AmbassadorRegisterFrom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import { useNavigate } from "react-router-dom";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";

const RegisterOther = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.location.href.includes("shopresister") && setTabValue(1);
    window.location.href.includes("ambassador") && setTabValue(2);
  }, []);

  const redirectShopRegister = () => {
    setTabValue(1);
    navigate("/shopresister");
  };

  const redirectAmbassadorRegister = () => {
    setTabValue(2);
    navigate("/ambassador");
  };

  return (
    <>
      <HelmetPage
        title={
          tabValue === 1
            ? "推しニャン｜看板猫がいるお店の登録ページ"
            : "推しニャンアンバサダーの申請ページ"
        }
        description={
          tabValue === 1
            ? "推しニャンサイトでは、看板猫さんが登録されていないお店を大募集。このページから看板猫さんがいるお店を登録してください"
            : "推しニャンサイトでは、看板猫さんが大好きな方を大募集しております。アンバサダーとして猫の未来を一緒に作っていきましょう。"
        }
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar
            page={tabValue === 1 ? "未登録店舗登録" : "アンバサダー登録"}
          />
          <Tabs className="mt-10 mb-24">
            <TabList className="flex">
              <Tab
                className={`text-center rounded-tl-lg rounded-tr-lg ${
                  tabValue === 1
                    ? "bg-[#CBB279] text-white"
                    : "bg-white text-[#B7B7B7]"
                }`}
              >
                <button
                  className="text-[20px] md:text-2xl md:max-w-[364px] md:w-[370px] text-2xl py-2 px-6 whitespace-nowrap"
                  onClick={redirectShopRegister}
                >
                  看板猫登録
                </button>
              </Tab>
              <Tab
                className={`text-center rounded-tl-lg rounded-tr-lg ${
                  tabValue === 2
                    ? "bg-[#CBB279] text-white"
                    : "bg-white text-[#B7B7B7]"
                }`}
              >
                <button
                  className="text-[20px] md:text-2xl md:max-w-[364px] md:w-[370px] text-2xl py-2 px-6 whitespace-nowrap"
                  onClick={redirectAmbassadorRegister}
                >
                  {window.innerWidth < 580
                    ? "アンバサダー"
                    : "推しニャンアンバサダー募集"}
                </button>
              </Tab>
            </TabList>
            <TabPanel>
              <ShopRegisterForm />
            </TabPanel>
            <TabPanel>
              <AmbassadorRegisterFrom />
            </TabPanel>
          </Tabs>
        </Container>
      </MainLayout>
    </>
  );
};

export default RegisterOther;
