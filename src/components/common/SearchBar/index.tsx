import React, { FormEvent, useEffect, useState } from "react";
import PrefectureBtn from "../../basic/CustomButton";
import { PREFECTURE } from "../../../constant";
import Container from "../../basic/Container";
import axios from "axios";

interface SearchProps {
  prefectureKeyword: string[];
  selectPrefectureKeyword: (val: string[]) => void;
  prefectureShow: boolean;
  setPrefectureShow: (val: boolean) => void;
  submitSearchPrefecture: () => void;
  characterKeyword: string[];
  selectCharacterKeyword: (val: string[]) => void;
  characterShow: boolean;
  setCharacterShow: (val: boolean) => void;
  submitSearchCharacter: () => void;
  attendanceKeyword: string[];
  selectAttendanceKeyword: (val: string[]) => void;
  attendanceShow: boolean;
  setAttendanceShow: (val: boolean) => void;
  submitSearchAttendance: () => void;
  setSearchWord: (val: string) => void;
  searchWord: string;
  handleFreeSearch: () => void;
}

const attendanceData = [
  "100%います",
  "ほぼいます",
  "確率50％",
  "重役出勤",
  "会えたらラッキー",
  "会えたら神",
  "SNSをチェック",
];

const SearchBar = ({
  prefectureKeyword,
  selectPrefectureKeyword,
  prefectureShow,
  setPrefectureShow,
  submitSearchPrefecture,
  characterKeyword,
  selectCharacterKeyword,
  characterShow,
  setCharacterShow,
  submitSearchCharacter,
  attendanceKeyword,
  selectAttendanceKeyword,
  attendanceShow,
  setAttendanceShow,
  submitSearchAttendance,
  setSearchWord,
  searchWord,
  handleFreeSearch,
}: SearchProps) => {
  const [characterData, setCharacterData] = useState<{ character: string }[]>(
    []
  );
  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await axios.get("api/character/");
      setCharacterData(data);
    };
    fetchCharacter();
  }, []);

  const handlePrefecture = (prefecture: string) => {
    !prefectureKeyword.includes(prefecture) &&
      selectPrefectureKeyword([...prefectureKeyword, prefecture]);
  };

  const handleCharacter = (character: string) => {
    !characterKeyword.includes(character) &&
      selectCharacterKeyword([...characterKeyword, character]);
  };

  const handleAttendance = (attendance: string) => {
    !attendanceKeyword.includes(attendance) &&
      selectAttendanceKeyword([...attendanceKeyword, attendance]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFreeSearch();
  };

  return (
    <div className="relative bg-white">
      <Container>
        <div className=" relative xs:block md:grid md:grid-cols-2 md:items-center gap-5 py-4">
          <div className="xs:block md:flex md:justify-between md:items-center gap-3 pb-6 md:pb-0">
            <div className="xs:pb-6 md:pb-0">
              <p className="text-[16px]">看板猫を探す</p>
            </div>
            <form
              className="group xs:w-full sm:w-auto flex items-center hover:opacity-70 active:opacity-100"
              onSubmit={handleSubmit}
            >
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
                type="submit"
                className="rounded-r-md w-8 h-8 bg-[#FBA1B7] flex justify-center items-center"
              >
                <img src="/assets/imgs/icons/search.webp" alt="search" />
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-3">
            <div className="w-full md:w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100">
              <button
                className=" w-[100%] flex justify-between items-center"
                onClick={() => {
                  prefectureShow
                    ? setPrefectureShow(false)
                    : setPrefectureShow(true);
                  setCharacterShow(false);
                  setAttendanceShow(false);
                }}
              >
                <span className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                  エリア
                </span>
                <span
                  className={`h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px] ${
                              prefectureShow ? "transform rotate-180" : ""
                            }`}
                ></span>
              </button>
            </div>
            <div className="w-full md:w-[105px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100">
              <button
                className="w-[100%] flex justify-between items-center"
                onClick={() => {
                  characterShow
                    ? setCharacterShow(false)
                    : setCharacterShow(true);
                  setPrefectureShow(false);
                  setAttendanceShow(false);
                }}
              >
                <span className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                  性 格
                </span>
                <span
                  className={`h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px] ${
                              characterShow ? "transform rotate-180" : ""
                            }`}
                ></span>
              </button>
            </div>
            <div className="h-[32px] md:w-[130px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px] hover:opacity-70 active:opacity-100">
              <button
                className="w-[100%] flex justify-between items-center"
                onClick={() => {
                  attendanceShow
                    ? setAttendanceShow(false)
                    : setAttendanceShow(true);
                  setPrefectureShow(false);
                  setCharacterShow(false);
                }}
              >
                <span className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                  出没頻度
                </span>
                <span
                  className={`h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
                            border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px] ${
                              attendanceShow ? "transform rotate-180" : ""
                            }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        {prefectureShow && (
          <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[64px] left-0 z-50">
            <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
              <div className="grid xs:grid-cols-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 whitespace-nowrap border-b border-b-solid border-[#EAEAEA]">
                {PREFECTURE &&
                  PREFECTURE.map((item, index) => {
                    return (
                      <div
                        className="flex justify-center items-center"
                        key={index}
                      >
                        <div
                          key={index}
                          className="mb-[16px] hover:opacity-70"
                          onClick={() => handlePrefecture(item[0])}
                        >
                          <PrefectureBtn
                            value={item[0]}
                            className={`${
                              prefectureKeyword.includes(item[0]) &&
                              "bg-[#CBB279] text-white border-[#CBB279]"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="pt-[16px] text-center">
                <button
                  className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70 py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]"
                  onClick={submitSearchPrefecture}
                >
                  検索するニャン！
                </button>
              </div>
            </div>
          </div>
        )}
        {characterShow && (
          <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[64px] left-0 z-50">
            <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
              <div className="flex flex-wrap gap-4 whitespace-nowrap ">
                {characterData &&
                  characterData.map((item, index) => (
                    <div
                      className="flex justify-center items-center "
                      key={index}
                    >
                      <div
                        className=" hover:opacity-70"
                        onClick={() => {
                          handleCharacter(item.character);
                        }}
                      >
                        <PrefectureBtn
                          value={item.character}
                          className={`${
                            characterKeyword.includes(item.character) &&
                            "bg-[#CBB279] text-white border-[#CBB279]"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-4 pt-4 text-center border-t border-t-solid border-[#EAEAEA]">
                <button
                  className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70 py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]"
                  onClick={submitSearchCharacter}
                >
                  検索するニャン！
                </button>
              </div>
            </div>
          </div>
        )}
        {attendanceShow && (
          <div className="absolute bg-white w-full xs:top-[168px] xs:px-5 sm:top-[64px] left-0 z-50">
            <div className="max-w-[960px] m-auto xs:px-5 lg:px-0 mt-[24px] mb-[16px]">
              <div className="flex flex-wrap gap-4 whitespace-nowrap ">
                {attendanceData &&
                  attendanceData.map((item, index) => (
                    <div
                      className="flex justify-center items-center "
                      key={index}
                    >
                      <div
                        className=" hover:opacity-70"
                        onClick={() => {
                          handleAttendance(item);
                        }}
                      >
                        <PrefectureBtn
                          value={item}
                          className={`${
                            attendanceKeyword.includes(item) &&
                            "bg-[#CBB279] text-white border-[#CBB279]"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-4 pt-4 text-center border-t border-t-solid border-[#EAEAEA]">
                <button
                  className="bg-[#FBA1B7] rounded-full shadow-inner text-white hover:opacity-70 py-[6px] px-[26px] drop-shadow-[1px_1px_rgba(230,149,169,1)]"
                  onClick={submitSearchAttendance}
                >
                  検索するニャン！
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchBar;
