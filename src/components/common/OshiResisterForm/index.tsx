import axios from "axios";
import { useEffect, useRef, useState } from "react";
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
import { Notification } from "../../../constant/notification";
import InputText from "../../basic/InputText";

const OshiResisterForm = () => {
  const reEmailRef = useRef<HTMLInputElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [shopCategory, setShopCategory] = useState<
    { id: number; shop_type: string }[]
  >([{ id: 0, shop_type: "カテゴリ1" }]);
  const [registerCatValues, setRegisterCatValues] = useState({
    client_type: "個人",
    company_name: "",
    kanji_name: "",
    furi_name: "",
    email: "",
    re_email: "",
    shop_type: "1",
    cat_info: "",
  });

  useEffect(() => {
    const fetchShopCategory = async () => {
      const { data } = await axios.get("unregistered/shopcategory/");
      setShopCategory(data);
    };
    fetchShopCategory();
  }, []);

  const handleUpload = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleChange = (newFormData: { [key: string]: string }) => {
    setRegisterCatValues({ ...registerCatValues, ...newFormData });
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
        await axios.post("unregistered/oshiresister/", formData);
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
      <form className="max-w-[640px] m-auto" onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="pt-[48px] flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            個人／法人のお客さま
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="client_type"
                value={registerCatValues.client_type}
                onChange={(e: any) =>
                  setRegisterCatValues({
                    ...registerCatValues,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-2"
              >
                <div className="flex">
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
        {registerCatValues.client_type === "法人" && (
          <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
            <label
              className="text-[14px] xs:w-[100px] sm:w-[184px]"
              htmlFor="name_kana"
            >
              会社名・法人名
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <InputText
              name="company_name"
              value={registerCatValues}
              onChange={handleChange}
              required={true}
              containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
            />
          </div>
        )}
        {/* row 4 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            氏名（漢字）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            name="kanji_name"
            value={registerCatValues}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            氏名（ふりがな）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            name="furi_name"
            value={registerCatValues}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {/* row 4 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
            メールアドレス
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            type="email"
            name="email"
            value={registerCatValues}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
            (▼確認のため再入力）
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="text"
            name="re_email"
            ref={reEmailRef}
            value={registerCatValues.re_email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterCatValues({
                ...registerCatValues,
                [e.target.name]: e.target.value,
              })
            }
            required
            className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
          />
        </div>
        {/* row 5 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
            場所種別
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <Select
              aria-label="shop_type"
              name="shop_type"
              value={registerCatValues.shop_type}
              onChange={(e: any) =>
                setRegisterCatValues({
                  ...registerCatValues,
                  [e.target.name]: e.target.value,
                })
              }
              className="bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] h-10 text-center text-[16px] w-[144px]"
              sx={{ borderRadius: "20px" }}
            >
              {shopCategory &&
                shopCategory.map((item, key) => (
                  <MenuItem key={key} value={item.id}>
                    {item.shop_type}
                  </MenuItem>
                ))}
            </Select>
          </div>
        </div>
        {/* row 6 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            <span>看板猫情報</span>
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <textarea
              name="cat_info"
              id="cat_info"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setRegisterCatValues({
                  ...registerCatValues,
                  [e.target.name]: e.target.value,
                })
              }
              className="w-full h-[192px] border border-[#CCCCCC] p-2 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-full mt-[24px] sm:h-[48px] sm:flex sm:justify-center bg-[#F3F3F3] py-3"
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
