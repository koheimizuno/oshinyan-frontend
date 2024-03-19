import { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const ShopRegisterForm = lazy(
  () => import("../../components/common/ShopRegisterForm")
);
const AmbassadorRegisterFrom = lazy(
  () => import("../../components/common/AmbassadorRegisterFrom")
);

const RegisterOther = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.href.includes("shopresister")) {
      setTabValue(1);
      navigate("/shopresister");
    } else {
      setTabValue(2);
      navigate("/ambassador");
    }
  }, [navigate]);

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
            <TabList className="flex" value={tabValue || undefined}>
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
                  {window.location.href ===
                  "https://oshinyan.love/shopresister" ? (
                    <h1>看板猫登録</h1>
                  ) : (
                    <span>看板猫登録</span>
                  )}
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
                  {window.location.href ===
                  "https://oshinyan.love/ambassador" ? (
                    <h1>
                      {window.innerWidth < 580
                        ? "アンバサダー"
                        : "推しニャンアンバサダー募集"}
                    </h1>
                  ) : (
                    <span>
                      {window.innerWidth < 580
                        ? "アンバサダー"
                        : "推しニャンアンバサダー募集"}
                    </span>
                  )}
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
