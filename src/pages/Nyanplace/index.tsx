import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SignboardSearchBar from "../../components/common/SignboardSearchBar";
import NyanPlaceCard from "../../components/basic/NyanPlaceCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { shopType } from "../../constant/type";

const Nyanplace = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [shopData, setShopData] = useState<shopType[]>([]);
  useEffect(() => {
    const fetchShopData = async () => {
      const { data } = await axios.get("api/shop/");
      setShopData(data);
    };
    fetchShopData();
  }, []);

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
            {shopData &&
              shopData.map((e) => {
                return (
                  <NyanPlaceCard
                    id={e.id}
                    shop_name={e.shop_name}
                    prefecture={e.prefecture}
                    shop_images={e.shop_images}
                    category={e.category}
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
