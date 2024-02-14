import React, { useEffect, useState } from "react";
import PrefectureBtn from "../../basic/CustomButton";

import { PREFECTURE } from "../../../constant";
import Container from "../../basic/Container";
import axios from "axios";

interface SearchProps {
  selectPrefectureKeyword: (val: string) => void;
  selectShopTypeKeyword: (val: string) => void;
  setPrefectureShow: (val: boolean) => void;
  setShopTypeShow: (val: boolean) => void;
  setSearchWord: (val: string) => void;
  prefectureShow: boolean;
  shopTypeShow: boolean;
  searchWord: string;
  handleFreeSearch: () => void;
}
const NyanPlaceSearchBar = ({
  selectPrefectureKeyword,
  setPrefectureShow,
  prefectureShow,
  selectShopTypeKeyword,
  setShopTypeShow,
  shopTypeShow,
  setSearchWord,
  searchWord,
  handleFreeSearch,
}: SearchProps) => {
  const [shopTypeData, setShopTypeData] = useState<
    { id: string; shop_type: string }[]
  >([]);
  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await axios.get("api/shoptype/");
      setShopTypeData(data);
    };
    fetchCharacter();
  }, []);
  return (
    <>
      <div className="relative bg-white">
        <Container>
          <div className=" relative xs:block sm:grid sm:grid-cols-2 p-4">
            <div className="xs:block sm:flex sm:justify-between sm:items-center gap-3 xs:pb-6 sm:pb-0">
              <div className="xs:pb-6 sm:pb-0">
                <p className="text-[16px] whitespace-nowrap">看板猫を探す</p>
              </div>
              <div className="group xs:w-full sm:w-auto flex items-center hover:opacity-70 active:opacity-100">
                <input
                  type="search"
                  name="search"
                  value={searchWord}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchWord(e.target.value)
                  }
                  className="h-[32px] w-full p-2 bg-[#F3F3F3] rounded-l-md shadow-inner focus-visible:outline-none"
                />
                <button
                  onClick={handleFreeSearch}
                  className="rounded-r-md w-8 h-8 bg-[#FBA1B7] flex justify-center items-center"
                >
                  <img src="/assets/imgs/icons/search.webp" alt="search" />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div
                className=" w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100"
                onClick={() => {
                  prefectureShow
                    ? setPrefectureShow(false)
                    : setPrefectureShow(true);
                  setShopTypeShow(false);
                }}
              >
                <button className=" w-[100%] flex justify-between items-center ">
                  <p className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                    エリア
                  </p>
                  <div
                    className="h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px]"
                  ></div>
                </button>
              </div>
              <div className="ml-[24px] w-[128px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100">
                <button
                  className=" w-[100%] flex justify-between items-center "
                  onClick={() => {
                    shopTypeShow
                      ? setShopTypeShow(false)
                      : setShopTypeShow(true);
                    setPrefectureShow(false);
                  }}
                >
                  <p className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)] whitespace-nowrap">
                    カテゴリー
                  </p>
                  <div
                    className="h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[15px] mt-[5px]"
                  ></div>
                </button>
              </div>
            </div>
          </div>
          {prefectureShow && (
            <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[70px] left-0 z-50">
              <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
                <div className="grid xs:grid-cols-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 whitespace-nowrap border-b border-b-solid border-[#EAEAEA]">
                  {PREFECTURE &&
                    PREFECTURE.map((item, index, arr) => {
                      return (
                        <div
                          className="flex justify-center items-center "
                          key={index}
                        >
                          <div
                            key={index}
                            className="mb-[16px] hover:opacity-70"
                            onClick={() => {
                              selectPrefectureKeyword(item[0]);
                            }}
                          >
                            <PrefectureBtn value={item[0]} />
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="pt-[16px] text-center">
                  <button
                    className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70"
                    onClick={() => setPrefectureShow(false)}
                  >
                    <p className="py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]">
                      検索するニャン！
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
          {shopTypeShow && (
            <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[70px] left-0 z-50">
              <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
                <div className="flex flex-wrap gap-4 whitespace-nowrap ">
                  {shopTypeData &&
                    shopTypeData.map((item, index) => (
                      <div
                        className="flex justify-center items-center "
                        key={index}
                      >
                        <div
                          className=" hover:opacity-70"
                          onClick={() => {
                            selectShopTypeKeyword(item.id);
                          }}
                        >
                          <PrefectureBtn value={item.shop_type} />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4 pt-4 text-center border-t border-t-solid border-[#EAEAEA]">
                  <button
                    className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70"
                    onClick={() => setShopTypeShow(false)}
                  >
                    <p className="py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]">
                      検索するニャン！
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default NyanPlaceSearchBar;
