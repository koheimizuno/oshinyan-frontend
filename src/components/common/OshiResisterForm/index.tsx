import { Checkbox, FormControlLabel } from "@mui/material";
import FileUpload from "../../basic/icons/FileUpload";
import PrivacyComponent from "../PrivacyComponent";
import Button from "../../basic/Button";

const OshiResisterForm = () => {
  return (
    <div className="bg-white px-[24px] pb-[48px]">
      <div className="w-[640px] m-auto">
        {/* row 1 */}
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            個人／法人のお客さま
          </label>
          <div className="w-[456px] h-[40px] rounded-[4px] flex items-center">
            <input
              type="radio"
              name="type"
              id="individual"
              value="individual"
            />
            <label className="ms-2" htmlFor="individual">
              個人のお客様
            </label>
            <input
              className="ms-[42px]"
              type="radio"
              name="type"
              id="corp"
              value="corp"
            />
            <label className="ms-2" htmlFor="corp">
              個人のお客様
            </label>
          </div>
        </div>
        <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
        {/* row 2 */}
        <div className="pt-[27px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            会社名・法人名
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 4 */}
        <div className="pt-[27px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            氏名（漢字）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            氏名（ふりがな）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 4 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            メールアドレス
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            (▼確認のため再入力）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 5 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="place">
            場所種別
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <div className="relative">
            <select
              id="place"
              onChange={(e) => {}}
              className="appearance-none pr-8 bg-right bg-no-repeat rounded-full text-center text-[16px] w-[144px] bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="カフェ">カフェ</option>
            </select>
            <div
              className="w-[12px] h-[8px] absolute top-[18px] left-[120px]"
              style={{
                backgroundImage: "url('/assets/imgs/select_triangle.png')",
              }}
            ></div>
          </div>
        </div>
        <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
        {/* row 6 */}
        <div className="pt-[32px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="place">
            看板猫情報
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <textarea
            name="place"
            id="place"
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
        <PrivacyComponent />
        <div className="text-center mt-[27px] pb-[27px] border-b border-[#CCCCCC]">
          <FormControlLabel
            control={<Checkbox />}
            label="同意するニャン"
            required
          />
        </div>
      </div>
      <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
      <Button />
    </div>
  );
};

export default OshiResisterForm;
