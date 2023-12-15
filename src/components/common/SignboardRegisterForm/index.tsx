import FileUpload from "../../basic/icons/FileUpload";

const SignboardRegisterForm = () => {
  return (
    <div className="bg-white px-[24px] pb-[48px]">
      <div className="w-[640px] m-auto">
        {/* row 1 */}
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="name_kana">
            氏名（漢字）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            id="name_kana"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="name">
            氏名（ふりがな）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            id="name"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 2 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="email">
            メールアドレス
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            id="email"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="email_confirm">
            (▼確認のため再入力）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            id="email_confirm"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 3 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="place">
            場所種別
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <select
            id="place"
            onChange={(e) => {}}
            className="appearance-none pr-8 bg-right bg-no-repeat rounded-full text-center text-[16px] w-[144px] bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="カフェ">カフェ</option>
          </select>
        </div>
        <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
        {/* row 4 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="infomation">
            看板猫情報
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <textarea
            name="infomation"
            id="infomation"
            className="h-[192px] w-[456px] border border-[#CCCCCC]"
          ></textarea>
        </div>
        <div className="w-full mt-[24px] h-[48px] flex justify-center bg-[#F3F3F3] py-3">
          <FileUpload />{" "}
          <span className="test-[14px] leading-[19px] ms-[10px]">
            画像をドラック＆ドロップまたはファイル名選択
          </span>
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 5 */}
        <div className="pt-[32px] flex justify-between items-center flex-wrap">
          <div className="w-full flex justify-center">
            <label className="text-[16px]" htmlFor="privacy">
              個人情報の取扱い方針
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
          </div>
          <div className="w-full flex justify-center mt-[19px]">
            <textarea
              name="privacy"
              id="privacy"
              className="h-[160px] w-[536px] border border-[#CCCCCC]"
            ></textarea>
          </div>
          <div className="w-full flex justify-center mt-[27px]">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-[16px] ms-2">
              同意するニャン
            </label>
          </div>
        </div>
      </div>
      <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
      <div className="mt-[47px] text-center">
        <button
          className={'text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white'}
        >
          確認ニャ！
        </button>
      </div>
    </div>
  );
};

export default SignboardRegisterForm;