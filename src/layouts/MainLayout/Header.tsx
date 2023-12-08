import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[960px] m-auto">
      <div className="flex justify-between items-center py-[13px]">
        <div className="hover:opacity-70">
          <img src="assets/imgs/logo.svg" alt="" />
          <h1 className="text-[12px] tracking-tighter ">
            お気に入りの看板猫が探せる！推せるサイト
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center text-[16px]">
            <div className="pr-[15x] hover:text-[#C38154]">
              <Link to="/manatee" className="px-[15px]">
                推しニャンとは？
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="px-[15x] hover:text-[rgb(195,129,84)]">
              <Link to="/manatee" className="px-[15px]">
                会員登録ニャ！
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="pl-[15px] hover:text-[#C38154]">
              <Link to="/manatee" className="px-[15px]">
                特集見るニャ！
              </Link>
            </div>
          </div>
          <div className="bg-[#FBA1B7] rounded w-[120px] hover:opacity-70">
            <button className="px-[8px] pb-[5px] pt-[3px] flex justify-start items-center ">
              <div className="pr-[8px]">
                <img src="assets/Path 134.svg" alt="" />
              </div>
              <p className="text-white text-[16px] tracking-[-.15em] ">
                マイページ
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
