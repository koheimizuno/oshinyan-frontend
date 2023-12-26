import React, { useState } from "react";
import CustomButton from "../../basic/BasicButton";

import { PREFECTURE } from "../../../constant";
import Container from "../../basic/Container";

interface Props {
  list: string[];
  setList: (val: string[]) => void;
}
const SearchBar = ({ list, setList }: Props) => {
  const [check, setCheck] = useState(false);
  const [showPreperties, setShowProperties] = useState(false);

  const selectRegion = (item: string) => {
    const exist = list.find((e) => e === item);
    if (exist) {
      const temps = list.filter((e) => e !== item);
      setList(temps);
    } else {
      setList([...list, item]);
    }
  };

  return (
    <>
      <div className="relative bg-white">
        <Container>
          <div className=" relative xs:block sm:grid sm:grid-cols-2 py-4">
            <div className="xs:block sm:flex sm:justify-between sm:items-center gap-3 xs:pb-6 sm:pb-0">
              <div className="xs:pb-6 sm:pb-0">
                <p className="text-[16px]">看板猫を探す</p>
              </div>
              <div className="group xs:w-full sm:w-auto flex items-center hover:opacity-70 active:opacity-100">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="h-[32px] w-full bg-[#F3F3F3] rounded-l-sm shadow-inner focus-visible:border focus-visible:border-[#707070] focus-visible:border-solid focus-visible:outline-none"
                />
                <div>
                  <img src="/assets/imgs/search.svg" alt="search" />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div
                className=" w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100"
                onClick={() => {
                  check ? setCheck(false) : setCheck(true);
                  setShowProperties(false);
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
              <div className="ml-[24px] w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100">
                <button
                  className=" w-[100%] flex justify-between items-center "
                  onClick={() => {
                    check ? setShowProperties(false) : setShowProperties(true);
                    setCheck(false);
                  }}
                >
                  <p className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                    性 格
                  </p>
                  <div
                    className="h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px]"
                  ></div>
                </button>
              </div>
            </div>
          </div>
          {check && (
            <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[70px] left-0 z-50">
              <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
                <div className="grid xs:grid-cols-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 whitespace-nowrap border-b border-b-solid border-[#EAEAEA]">
                  {PREFECTURE.map((item, index, arr) => {
                    return (
                      <div className="flex justify-center items-center ">
                        <div
                          key={index}
                          className={`mb-[16px] hover:opacity-70 ${
                            list.includes(item) ? "opacity-70" : ""
                          }`}
                          onClick={() => {
                            selectRegion(item);
                          }}
                        >
                          <CustomButton value={item} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-[16px] text-center">
                  <button
                    className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70"
                    onClick={() => setCheck(false)}
                  >
                    <p className="py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]">
                      検索するニャン！
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
          {showPreperties && (
            <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[70px] left-0 z-50">
              <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
                <div className="flex flex-wrap whitespace-nowrap border-b border-b-solid border-[#EAEAEA]">
                  <div
                    className={`mb-[16px] mr-[16px] w-[78px] hover:opacity-70`}
                  >
                    <CustomButton value={"性格"} />
                  </div>
                </div>
                <div className="pt-[16px] text-center">
                  <button
                    className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70"
                    onClick={() => {
                      setShowProperties(false);
                    }}
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

export default SearchBar;
