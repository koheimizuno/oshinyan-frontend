import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F4EC] ">
      <div className="">
        <div className="flex xs:flex-col xs:gap-5 sm:flex-row sm:justify-between sm:items-center">
          <Link to="/guide">
            <img src="/assets/imgs/footer-1.webp" alt="footer-1" />
          </Link>
          <Link to="/shopresister">
            <img src="/assets/imgs/footer-2.webp" alt="footer-2" />
          </Link>
        </div>
        <div className="flex justify-center items-center xs:pt-6 sm:py-[24px] m-auto">
          <div className="xs:block sm:flex sm:justify-between sm:items-center text-[16px] tracking-[-.15em]">
            <div className="pr-[15x] xs:mb-8 sm:mb-0 text-center">
              <Link to="/guide" className="px-[15px] hover:text-[#C38154]">
                推しニャンとは
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <Link
                to="/registration"
                className="px-[15px] hover:text-[#C38154]"
              >
                会員登録
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <Link to="/inquiry" className="px-[15px] hover:text-[#C38154]">
                お問合せ
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <Link to="/privacy" className="px-[15px] hover:text-[#C38154]">
                プライバシーポリシー
              </Link>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="sm:pl-[15px] xs:mb-8 sm:mb-0 text-center">
              <Link to="/company" className="px-[15px] hover:text-[#C38154]">
                運営会社
              </Link>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-dashed border-[#CCC] relative">
          <div className="flex xs:flex-col xs:gap-2 sm:flex-row sm:justify-center py-[24px] text-[16px]">
            <div className="bg-white px-[20px] mr-[16px]">
              <p className="tracking-[-.1em]">
                看板猫を紹介したい店舗・団体専用ページ
              </p>
            </div>
            <div className="px-[20px]">
              <p className="tracking-[-.1em]">
                <Link
                  to="/oshiresister"
                  className="border-b border-black hover:text-[#0000FF] hover:border-[#0000FF]"
                >
                  推しニャン申請（店舗登録はこちらから）
                </Link>
              </p>
            </div>
          </div>
          <div className="xs:mt-12 sm:mt-0 border-b-2 border-solid border-[#CCC]">
            <span className="sm:absolute sm:bottom-0 sm:right-0 hover:opacity-70">
              <img
                src="/assets/imgs/footer-logo.webp"
                alt="footer-logo"
                className="xs:m-auto sm:m-0"
              />
            </span>
          </div>
        </div>
        <div className="py-[16px] text-center">
          <p className="text-[12px] font-medium">© 2023 推しニャン！</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
