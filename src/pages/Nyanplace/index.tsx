import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import NyanPlaceCard from "../../components/basic/NyanPlaceCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { shopType } from "../../constant/type";
import NyanPlaceSearchBar from "../../components/common/NyanPlaceSearchBar";

const Nyanplace = () => {
  const [shopData, setShopData] = useState<shopType[]>([]);
  const [prefectureKeyword, selectPrefectureKeyword] = useState<string | null>(
    null
  );
  const [shopTypeKeyword, selectShopTypeKeyword] = useState<string | null>(
    null
  );
  const [prefectureShow, setPrefectureShow] = useState(false);
  const [shopTypeShow, setShopTypeShow] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  useEffect(() => {
    const fetchShopData = async () => {
      const { data } = await axios.get("api/shop/");
      setShopData(data);
    };
    fetchShopData();
  }, []);

  useEffect(() => {
    const fetchPrefectureSearchData = async () => {
      try {
        if (prefectureKeyword !== null) {
          const { data } = await axios.get(
            `api/shop/?prefecture=${prefectureKeyword}`
          );
          setShopData(data);
        }
      } catch (error) {}
    };
    fetchPrefectureSearchData();
    const fetchShopTypeSearchData = async () => {
      try {
        if (shopTypeKeyword !== null) {
          const { data } = await axios.get(
            `api/shop/?shop_type=${shopTypeKeyword}`
          );
          setShopData(data);
        }
      } catch (error) {}
    };
    fetchShopTypeSearchData();
    setPrefectureShow(false);
    setShopTypeShow(false);
  }, [prefectureKeyword, shopTypeKeyword]);

  const handleFreeSearch = async () => {
    try {
      if (searchWord !== null) {
        const { data } = await axios.get(`api/shop/?search=${searchWord}`);
        setShopData(data);
      }
    } catch (error) {}
  };

  return (
    <>
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="看板猫に会える場所一覧" />
          <Title title="『看板猫』に会える場所一覧" />
          <div className="bg-white mt-[24px]">
            <NyanPlaceSearchBar
              selectPrefectureKeyword={selectPrefectureKeyword}
              setPrefectureShow={setPrefectureShow}
              prefectureShow={prefectureShow}
              setSearchWord={setSearchWord}
              searchWord={searchWord}
              handleFreeSearch={handleFreeSearch}
              selectShopTypeKeyword={selectShopTypeKeyword}
              setShopTypeShow={setShopTypeShow}
              shopTypeShow={shopTypeShow}
            />
          </div>
          <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-y-4">
            {shopData &&
              shopData.map((e, key) => (
                <NyanPlaceCard
                  key={key}
                  id={e.id}
                  shop_name={e.shop_name}
                  prefecture={e.prefecture}
                  shop_images={e.shop_images}
                  shop_type={e.shop_type}
                />
              ))}
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Nyanplace;
