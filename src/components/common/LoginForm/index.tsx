import { useRef, useState } from "react";
import { PREFECTURE } from "../../../constant";

const LoginForm = () => {
  const fileRef = useRef(null);
  const [prefecture, setPrefecture] = useState("東京都");

  return (
    <div className="bg-white p-[24px] pb-[40px]">
      <form className="" action="">
        <div className="flex">
          <div className="flex">
            <div
              className="w-[72px] h-[72px] me-[38px]"
              onClick={() => {
                //   fileRef?.current?.click();
              }}
            >
              <img src="/assets/imgs/icon_add.png" alt="" />
            </div>
            <input type="file" name="icon" className="hidden" ref={fileRef} />
          </div>
          <div className="grow">
            <div className="flex h-[80px] border-b border-[#CCCCCC] items-center">
              <label htmlFor="id" className="w-[134px]">
                ニックネーム
              </label>
              <input
                className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-[304px]"
                type="text"
                name="id"
                id="id"
              />

              <label htmlFor="id" className="w-[96px]">
                居住エリア
              </label>
              <div className="relative my-auto h-[40px]">
                <select
                  id="prefecture"
                  onChange={(e) => {
                    setPrefecture(e.target.value);
                  }}
                  className="appearance-none pr-8 bg-right bg-no-repeat rounded-full text-center text-[16px] w-[144px] bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {PREFECTURE.map((e) => (
                    <option value={e} selected={e == prefecture}>
                      {e}
                    </option>
                  ))}
                </select>
                <div
                  className="w-[12px] h-[8px] absolute top-[18px] right-2"
                  style={{
                    backgroundImage: "url('/assets/imgs/select_triangle.png')",
                  }}
                ></div>
              </div>
            </div>
            {/* row2 */}
            <div className="flex h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label htmlFor="id" className="w-[134px]">
                メールアドレス
              </label>
              <input
                className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full"
                type="text"
                name="id"
                id="id"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-[24px]">
          <div className="text-center">
            <label htmlFor="privacy" className="w-[134px]">
              個人情報の取扱い方針
            </label>
          </div>
          <textarea
            className="p-1 text-[12px] mt-3 text-left bg-[#F7F7F7] border border-[#CCCCCC] me-auto h-[160px] w-[528px] overflow-y-auto"
            name="privacy"
            id="privacy"
          >
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
            個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針個人情報の取扱い方針
          </textarea>
          <div className="text-center mt-[27px] pb-[27px] border-b border-[#CCCCCC]">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="ms-2">
              同意するニャン
            </label>
          </div>
          <div className="mt-[47px] text-center">
            <button
              className={`text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white`}
            >
              確認ニャ！
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
