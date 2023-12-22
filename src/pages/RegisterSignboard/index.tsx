import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SignboardRegisterForm from "../../components/common/SignboardRegisterForm";
import RecruitRegisterFrom from "../../components/common/RecruitRegisterFrom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";

const RegisterSignboard = () => {
  const [tabValue, setTabValue] = useState(1);
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="未登録看板猫情報募集" />
        <Tabs className="mt-10">
          <TabList className="flex">
            <Tab
              className={`text-center rounded-tl-lg rounded-tr-lg ${
                tabValue === 1
                  ? "bg-[#CBB279] text-white"
                  : "bg-white text-[#B7B7B7]"
              }`}
            >
              <button
                className="w-[370px] text-2xl py-2"
                onClick={() => setTabValue(1)}
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
                className="w-[370px] text-2xl py-2"
                onClick={() => setTabValue(2)}
              >
                推しニャンアンバサダー募集
              </button>
            </Tab>
          </TabList>
          <TabPanel>
            <SignboardRegisterForm />
          </TabPanel>
          <TabPanel>
            <RecruitRegisterFrom />
          </TabPanel>
        </Tabs>
      </Container>
    </MainLayout>
  );
};

export default RegisterSignboard;
