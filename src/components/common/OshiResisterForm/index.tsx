import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import FileUpload from "../../basic/icons/FileUpload";
import PrivacyComponent from "../PrivacyComponent";
import Button from "../../basic/Button";
import { useRef, useState } from "react";
import axios from "axios";
import { Notification } from "../../../constant/notification";

const OshiResisterForm = () => {
  const reEmailRef = useRef<HTMLInputElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [registerCatValues, setRegisterCatValues] = useState({
    client_type: "個人",
    company_name: "",
    kanji_name: "",
    furi_name: "",
    email: "",
    re_email: "",
    shop_type: "カフェ",
    cat_info: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleUpload = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterCatValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("client_type", registerCatValues.client_type);
    formData.append("company_name", registerCatValues.company_name);
    formData.append("kanji_name", registerCatValues.kanji_name);
    formData.append("furi_name", registerCatValues.furi_name);
    formData.append("email", registerCatValues.email);
    formData.append("shop_type", registerCatValues.shop_type);
    formData.append("cat_info", registerCatValues.cat_info);
    if (selectedFiles != null) {
      const files = Array.from(selectedFiles);
      files.forEach((file) => formData.append("imgs", file));
    }

    if (checked) {
      try {
        const res = await axios.post("cat/", formData);
        Notification("success", "未登録店舗の登録が成功しました。");
      } catch (error: any) {
        if (error.response.status === 400)
          Notification("error", "店舗は既に存在します。");
        else Notification("error", "Server Error!");
      }
    }
  };

  return (
    <div className="bg-white px-[24px] pb-[48px]">
      <form className="w-[640px] m-auto" onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            個人／法人のお客さま
          </label>
          <div className="w-[456px] h-[40px] rounded-[4px] flex items-center">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="client_type"
                value={registerCatValues.client_type}
                onChange={handleChange}
              >
                <div className="flex gap-10">
                  <FormControlLabel
                    value="個人"
                    control={<Radio />}
                    label="個人のお客様"
                  />
                  <FormControlLabel
                    value="法人"
                    control={<Radio />}
                    label="法人のお客様"
                  />
                </div>
              </RadioGroup>
            </FormControl>
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
            name="company_name"
            onChange={handleChange}
            required
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
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
            name="kanji_name"
            onChange={handleChange}
            required
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
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
            name="furi_name"
            onChange={handleChange}
            required
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
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
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
          />
        </div>
        <div className="pt-[48px] flex justify-between items-center">
          <label className="text-[14px]" htmlFor="">
            (▼確認のため再入力）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <label>
            <input
              type="text"
              name="re_email"
              ref={reEmailRef}
              value={registerCatValues.re_email}
              onChange={handleChange}
              required
              className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
            />
            <p className="absolute text-red-500">{errorMsg}</p>
          </label>
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
          <div className="relative w-[456px]">
            <Select
              aria-label="shop_type"
              name="shop_type"
              value={registerCatValues.shop_type}
              onChange={handleChange}
              className="bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] h-10 text-center text-[16px] w-[144px]"
              sx={{ borderRadius: "20px" }}
            >
              <MenuItem value="カフェ">カフェ</MenuItem>
            </Select>
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
            name="cat_info"
            onChange={handleChange}
            required
            className="h-[192px] w-[456px] border border-[#CCCCCC] focus:outline-none p-2"
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="w-full mt-[24px] h-[48px] flex justify-center bg-[#F3F3F3] py-3"
            onClick={handleUpload}
          >
            <FileUpload />{" "}
            <span className="test-[14px] leading-[19px] ms-[10px]">
              画像をドラック＆ドロップまたはファイル名選択
            </span>
            {selectedFiles && selectedFiles.length > 0 && (
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedFiles.length} file(s)
                selected
              </span>
            )}
            <input
              type="file"
              ref={hiddenFileInput}
              className="hidden"
              multiple
              accept="image/*"
              onChange={selectFiles}
            />
          </button>
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        <PrivacyComponent />
        <div className="text-center mt-[27px] pb-[27px] border-b border-[#CCCCCC]">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setChecked(e.target.checked)
                }
              />
            }
            label="同意するニャン"
            required
          />
        </div>
        <div className="mt-[47px] text-center">
          <button
            type="submit"
            className={`text-[24px] ${
              checked ? "bg-[#FBA1B7]" : "bg-[#f8c6d2]"
            }  h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white`}
          >
            確認ニャ！
          </button>
        </div>
      </form>
    </div>
  );
};

export default OshiResisterForm;
