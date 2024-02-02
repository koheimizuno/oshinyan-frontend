import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LogOutAction } from "../../slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState("");
  const { isAuthenticated } = useSelector((state: any) => state.user);

  const handleResponsive = () => {
    hidden === "max-h-full" && setHidden("");
    hidden === "" && setHidden("max-h-full");
  };

  const handleLogout = async () => {
    const token: string | null = localStorage.getItem("token");
    let data;
    if (token !== null) data = JSON.parse(token);
    dispatch(LogOutAction({ token: data.value }));
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  };

  return (
    <div className="flex justify-between items-center py-[13px] h-[96px]">
      <div className="hover:opacity-70">
        <Link to="/">
          <img src="/assets/imgs/logo.svg" alt="logo" />
        </Link>
        <h1 className="text-[12px] font-medium tracking-tighter ">
          お気に入りの看板猫が探せる！推せるサイト
        </h1>
      </div>
      <div>
        <ul
          className={`text-[16px] max-h-0 overflow-hidden transition-all duration-1000 ease-in-out sm:text-center sm:absolute sm:border-t sm:top-[96px] sm:left-0 sm:z-10 sm:w-full sm:bg-white 
                      md:static md:max-h-full md:border-0 md:flex md:justify-between md:items-center ${hidden}`}
        >
          <li className="hover:text-[#C38154] sm:pt-3 md:pt-0">
            <Link
              to="/guide"
              className="px-[15px] font-medium block sm:py-3 hover:bg-zinc-100"
            >
              推しニャンとは？
            </Link>
          </li>
          <li className="w-[1px] h-[16px] bg-black sm:hidden md:block"></li>
          {!isAuthenticated && (
            <li className="hover:text-[rgb(195,129,84)]">
              <Link
                to="/registration"
                className="px-[15px] font-medium block sm:py-3 sm:hover:bg-zinc-100"
              >
                会員登録ニャ！
              </Link>
            </li>
          )}
          <li className="w-[1px] h-[16px] bg-black sm:hidden md:block"></li>
          <li className="hover:text-[#C38154]">
            <Link
              to="/feature"
              className="px-[15px] font-medium block sm:py-3 sm:hover:bg-zinc-100"
            >
              特集見るニャ！
            </Link>
          </li>
          <li className="hover:opacity-70 sm:py-3 sm:pb-6 md:pb-3">
            {isAuthenticated ? (
              <Link
                to="/mypage"
                className="bg-[#FBA1B7] w-[120px] rounded sm:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-start items-center"
              >
                <div className="pr-[8px]">
                  <img src="/assets/imgs/icons/mypage.png" alt="mypage-icon" />
                </div>
                <p className="text-white text-[16px] tracking-[-.15em] font-medium">
                  マイページ
                </p>
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#edc97a] w-[120px] rounded sm:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-center items-center gap-1"
              >
                <div className="pr-[8px]">
                  <img
                    width="16"
                    height="16"
                    src="https://img.icons8.com/office/16/lock--v1.png"
                    alt="lock--v1"
                  />
                </div>
                <p className="text-white text-[16px] tracking-[-.15em] font-medium">
                  ログイン
                </p>
              </Link>
            )}
          </li>
          {isAuthenticated && (
            <li className="hover:text-[rgb(195,129,84)] ml-4">
              <button
                className="w-[120px] h-8 bg-[#f2850c] text-white rounded sm:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-center items-center gap-1"
                onClick={handleLogout}
              >
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/office/16/unlock.png"
                  alt="unlock"
                />
                <span>ログアウト</span>
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="md:hidden cursor-pointer" onClick={handleResponsive}>
        <img src="/assets/imgs/icons/hamburger-btn.png" alt="hamburger-btn" />
      </div>
    </div>
  );
};

export default Header;
