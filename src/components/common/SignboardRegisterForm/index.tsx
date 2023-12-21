import FileUpload from "../../basic/icons/FileUpload";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const SignboardRegisterForm = () => {
  return (
    <div className="bg-white px-[24px] pb-[48px] border-2 border-[#CBB279]">
      <p className="py-8 border-b border-[#CCCCCC] text-xl">
        推しニャンWebサイトに掲載されていない看板猫がいるお店を発見した際のご依頼ニャ
      </p>
      <span className="text-red-500 mt-2 inline-block">＊＝必須</span>
      <div className="w-[640px] m-auto">
        {/* row 1 */}
        <div className="pt-[16px] pb-8 border-b border-[#ccc] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="name_kana">
            店舗名
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
        {/* row 2 */}
        <div className="py-4 border-b border-[#ccc]">
          <div className="flex justify-between py-4">
            <div className="flex items-center">
              <p className="text-[14px]">店舗住所</p>
            </div>
            <div className="w-[456px] flex justify-between">
              <div className="flex items-center">
                <p className="text-[14px]">
                  都道府県
                  <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                    *
                  </span>
                </p>
              </div>
              <div className="w-[329px]">
                <select
                  onChange={(e) => {}}
                  className="appearance-none pr-8 bg-right bg-no-repeat rounded-full text-center text-[16px] w-[144px] bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="カフェ">カフェ</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between">
              <div className="flex items-center">
                <p className="text-[14px]">市区町村</p>
              </div>
              <input
                type="text"
                id="email"
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between">
              <div className="flex">
                <p className="text-[14px]">番地</p>
              </div>
              <input
                type="text"
                id="email"
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between">
              <div className="flex items-center">
                <p className="text-[14px]">建物名・部屋番号</p>
              </div>
              <input
                type="text"
                id="email"
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
              />
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-between border-b border-[#ccc] py-8">
          <div className="flex items-center">
            <p className="text-[14px] tracking-tighter">
              メールアドレス（登録者）
            </p>
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </div>
          <input
            type="text"
            id="email"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        {/* row 4 */}
        <div className="flex justify-between border-b border-[#ccc] py-8">
          <div className="flex items-center">
            <p className="text-[14px] tracking-tighter">電話番号（登録者）</p>
          </div>
          <input
            type="text"
            id="email"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        {/* row 5 */}
        <div className="flex justify-between border-b border-[#ccc] py-6">
          <div className="flex items-center">
            <p className="text-[14px] tracking-tighter">店舗の許諾</p>
          </div>
          <div className="w-[456px]">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <div className="flex">
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="あり"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="なし"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="pt-[32px] flex justify-between">
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
            <FormControlLabel control={<Checkbox />} label="同意するニャン" />
          </div>
        </div>
      </div>
      <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
      <div className="mt-[47px] text-center">
        <button
          className={
            "text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white"
          }
        >
          確認ニャ！
        </button>
      </div>
    </div>
  );
};

export default SignboardRegisterForm;
