import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F4EC] ">
      <div className="">
        <div className="flex xs:flex-col xs:gap-5 sm:flex-row sm:justify-between sm:items-center">
          <a href="/about">
            <img src="/assets/imgs/footer-1.png" alt="footer-1" />
          </a>
          <a href="/registersignboard">
            <img src="/assets/imgs/footer-2.png" alt="footer-2" />
          </a>
        </div>
        <div className="flex justify-center items-center xs:pt-6 sm:py-[24px] m-auto">
          <div className="xs:block sm:flex sm:justify-between sm:items-center text-[16px] tracking-[-.15em]">
            <div className="pr-[15x] xs:mb-8 sm:mb-0 text-center">
              <a href="/about" className="px-[15px]">
                推しニャンとは
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <a href="/register" className="px-[15px]">
                会員登録
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <a href="contactus" className="px-[15px]">
                お問合せ
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="px-[15x] xs:mb-8 sm:mb-0 text-center">
              <a href="/privacy" className="px-[15px]">
                プライバシーポリシー
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black xs:hidden sm:block"></div>
            <div className="sm:pl-[15px] xs:mb-8 sm:mb-0 text-center">
              <a href="/company" className="px-[15px]">
                運営会社
              </a>
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
                <a href="/registersignboard" className="border-b border-black">
                  推しニャン申請（店舗登録はこちらから）
                </a>
              </p>
            </div>
          </div>
          <div className="xs:mt-12 sm:mt-0 border-b-2 border-solid border-[#CCC]">
            <span className="sm:absolute sm:bottom-0 sm:right-0 hover:opacity-70">
              <img
                src="/assets/imgs/footer-logo.png"
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
