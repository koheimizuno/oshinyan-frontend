import axios from "axios";
import React, { LegacyRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOutAction } from "../../slices/auth";

const Header = React.forwardRef(
  (_, ref: LegacyRef<HTMLDivElement> | undefined) => {
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
      dispatch(LogOutAction({ token: data }));
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    };

    console.log(window.location.href);

    return (
      <div
        ref={ref}
        className="flex justify-between items-center py-[13px] h-[96px]"
      >
        <div className="hover:opacity-70">
          <Link to="/">
            <img
              fetchpriority="high"
              src="/assets/imgs/logo.webp"
              alt="logo.webp"
              width={239}
              height={51}
            />
          </Link>
          {window.location.href === "https://oshinyan.love/" ? (
            <h1 className="text-[12px] font-medium tracking-tighter ">
              お気に入りの看板猫が探せる！推せるサイト
            </h1>
          ) : (
            <span className="text-[12px] font-medium tracking-tighter ">
              お気に入りの看板猫が探せる！推せるサイト
            </span>
          )}
        </div>
        <div>
          <ul
            className={`text-[16px] max-h-0 overflow-hidden transition-all duration-1000 ease-in-out 
                      xs:text-center xs:absolute xs:top-[96px] xs:left-0 xs:z-10 xs:w-full xs:bg-white 
                      md:static md:max-h-full md:border-0 md:flex md:justify-between md:items-center ${hidden}`}
          >
            <li className="hover:text-[#C38154] xs:pt-3 md:pt-0">
              <Link to="/guide" className="px-[15px] font-medium block xs:py-3">
                推しニャンとは？
              </Link>
            </li>
            <li className="w-[1px] h-[16px] bg-black xs:hidden md:block"></li>
            {!isAuthenticated && (
              <li className="hover:text-[rgb(195,129,84)]">
                <Link
                  to="/registration"
                  className="px-[15px] font-medium block xs:py-3"
                >
                  会員登録ニャ！
                </Link>
              </li>
            )}
            <li className="w-[1px] h-[16px] bg-black xs:hidden md:block"></li>
            <li className="hover:text-[#C38154]">
              <Link
                to="/feature"
                className="px-[15px] font-medium block xs:py-3"
              >
                特集見るニャ！
              </Link>
            </li>
            <li className="hover:opacity-70 py-3">
              {isAuthenticated ? (
                <Link
                  to="/mypage"
                  className="bg-[#FBA1B7] w-[120px] rounded xs:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-start items-center"
                >
                  <div className="pr-[8px]">
                    <img
                      src="/assets/imgs/icons/mypage.webp"
                      alt="mypage-icon"
                    />
                  </div>
                  <p className="text-white text-[16px] tracking-[-.15em] font-medium">
                    マイページ
                  </p>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#CBB279] shadow-inner w-[120px] rounded xs:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-center items-center gap-1"
                >
                  <div className="pr-[8px]">
                    <img
                      width="16"
                      height="16"
                      src="/assets/imgs/icons/lock.png"
                      alt="lock--v1"
                    />
                  </div>
                  <p className="text-white text-[16px] tracking-[-.15em] font-medium drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                    ログイン
                  </p>
                </Link>
              )}
            </li>
            {isAuthenticated && (
              <li className="hover:text-[rgb(195,129,84)] md:ml-4 text-center xs:py-3 xs:pb-6 md:pb-3">
                <button
                  className="bg-[#CBB279] shadow-inner w-[120px] h-8 m-auto text-white rounded sm:m-auto px-[8px] pb-[5px] pt-[3px] flex justify-center items-center gap-1"
                  onClick={handleLogout}
                >
                  <img
                    width="16"
                    height="16"
                    src="/assets/imgs/icons/unlock.png"
                    alt="unlock"
                  />
                  <p className="text-white text-[16px] tracking-[-.15em] font-medium drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                    ログアウト
                  </p>
                </button>
              </li>
            )}
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleResponsive}>
          <img
            src="/assets/imgs/icons/hamburger-btn.webp"
            alt="hamburger-btn"
            width={32}
            height={32}
          />
        </div>
      </div>
    );
  }
);

export default Header;
