import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F4EC] pt-[32px]">
      <div className="w-[960px] m-auto">
        <div className="flex justify-between items-center">
          <a href="/about">
            <img src="assets/imgs/footer-1.png" alt="footer-1" />
          </a>
          <a href="/registersignboard">
            <img src="assets/imgs/footer-2.png" alt="footer-2" />
          </a>
        </div>
        <div className="flex justify-between items-center w-[595px] py-[24px] m-auto">
          <div className="flex justify-between items-center text-[16px] tracking-[-.15em]">
            <div className="pr-[15x] ">
              <a href="/about" className="px-[15px]">
                推しニャンとは
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="px-[15x]">
              <a href="/register" className="px-[15px]">
                会員登録
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="px-[15x]">
              <a href="contact-us" className="px-[15px]">
                お問合せ
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="px-[15x]">
              <a href="/privacy" className="px-[15px]">
                プライバシーポリシー
              </a>
            </div>
            <div className="w-[1px] h-[16px] bg-black"></div>
            <div className="pl-[15px]">
              <a href="/company" className="px-[15px]">
                運営会社
              </a>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-dashed border-[#CCC] relative">
          <div className="flex justify-center border-b-2 border-solid border-[#CCC] py-[24px] text-[16px]">
            <div className="bg-white px-[20px] mr-[16px]">
              <p className="tracking-[-.1em]">
                看板猫を紹介したい店舗・団体専用ページ
              </p>
            </div>
            <div className="px-[20px]">
              <p className="tracking-[-.1em]">
                <a href="/registersignboard">
                  推しニャン申請（店舗登録はこちらから）
                </a>
              </p>
            </div>
          </div>
          <span className="absolute bottom-0 right-0 hover:opacity-70">
            <img src="assets/imgs/footer-logo.png" alt="footer-logo" />
          </span>
        </div>
        <div className="py-[16px] text-center">
          <p className="text-[12px]">© 2023 推しニャン！</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
