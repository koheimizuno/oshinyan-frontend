import { useRef, useState } from "react";
import FileUpload from "../../basic/icons/FileUpload";
import PrivacyComponent from "../PrivacyComponent";
import InputText from "../../basic/InputText";
import axios from "axios";
import { Notification } from "../../../constant/notification";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ShopRegisterForm = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [shopPermission, setShopPermission] = useState<boolean>(true);
  const [registerShopValues, setRegisterShopValues] = useState({
    shop_name: "",
    prefecture: "東京都",
    city: "",
    street: "",
    detail_address: "",
    email: "",
    phone: "",
    cat_info: "",
  });

  const handleChange = (newFormData: { [key: string]: string }) => {
    setRegisterShopValues({ ...registerShopValues, ...newFormData });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("shop_name", registerShopValues.shop_name);
    formData.append("email", registerShopValues.email);
    formData.append("phone", registerShopValues.phone);
    formData.append("shop_permission", shopPermission.toString());
    formData.append("cat_info", registerShopValues.cat_info);

    if (selectedFiles != null) {
      const files = Array.from(selectedFiles);
      files.forEach((file) => formData.append("imgs", file));
    }
    if (checked) {
      try {
        await axios.post("unregistered/shop/", formData);
        Notification("success", "未登録店舗の登録が成功しました。");
      } catch (error: any) {
        if (error.response.status === 400)
          Notification("error", "店舗は既に存在します。");
        else Notification("error", "Server Error!");
      }
    }
  };

  const handleUpload = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <form
      className="bg-white px-[24px] pb-[48px] border-2 border-[#CBB279]"
      onSubmit={handleSubmit}
    >
      <p className="py-8 border-b border-[#CCCCCC] text-xl">
        推しニャンWebサイトに掲載されていない看板猫がいるお店を発見した際のご依頼ニャ
      </p>
      <span className="text-red-500 mt-2 inline-block">＊＝必須</span>
      <div className="max-w-[640px] m-auto">
        {/* row 1 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
          <label
            className="text-[14px] whitespace-nowrap xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            店舗名
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            name="shop_name"
            value={registerShopValues}
            onChange={handleChange}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {/* row 2 */}
        {/* <div className="py-4 border-b border-[#ccc]">
          <div className="flex justify-between items-start md:items-center gap-2 py-4">
            <div className="text-[14px] whitespace-nowrap flex items-center xs:w-[100px] sm:w-[184px]">
              店舗住所
            </div>
            <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] xs:flex xs:flex-col xs:justify-between sm:flex sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center w-[130px]">
                <p className="text-[14px] flex items-center">
                  <span className="whitespace-nowrap">都道府県</span>
                  <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                    *
                  </span>
                </p>
              </div>
              <div className="max-w-[329px] sm:w-[calc(100%-130px)]">
                <Select
                  aria-label="prefecture"
                  name="prefecture"
                  value={registerShopValues.prefecture}
                  onChange={(e: any) =>
                    setRegisterShopValues({
                      ...registerShopValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] w-[100px] h-8 sm:w-[144px] sm:h-10 text-center text-[16px]"
                  sx={{ borderRadius: "20px" }}
                >
                  {PREFECTURE &&
                    PREFECTURE.map((item, key) => (
                      <MenuItem value={item[0]} key={key}>
                        <span className="px-2 py-1 text-[12px] sm:text-base">
                          {item[0]}
                        </span>
                      </MenuItem>
                    ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="xs:flex xs:flex-row xs:items-start md:items-center gap-2 py-4">
            <div className="text-[14px] whitespace-nowrap flex items-center xs:w-[100px] sm:w-[184px]"></div>
            <div className="flex flex-col xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] xs:flex xs:flex-col xs:justify-between sm:flex sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center w-[130px]">
                <p className="text-[14px] flex items-center">
                  <span className="whitespace-nowrap">市区町村</span>
                  <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                    *
                  </span>
                </p>
              </div>
              <div className="max-w-[329px] sm:w-[calc(100%-130px)]">
                <InputText
                  name="city"
                  value={registerShopValues}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="xs:flex xs:flex-row xs:items-start md:items-center gap-2 py-4">
            <div className="text-[14px] whitespace-nowrap flex items-center xs:w-[100px] sm:w-[184px]"></div>
            <div className="flex flex-col xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] xs:flex xs:flex-col xs:justify-between sm:flex sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center w-[130px]">
                <p className="text-[14px] flex items-center">
                  <span className="whitespace-nowrap">番地</span>
                  <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                    *
                  </span>
                </p>
              </div>
              <div className="max-w-[329px] sm:w-[calc(100%-130px)]">
                <InputText
                  name="street"
                  value={registerShopValues}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="xs:flex xs:flex-row xs:items-start md:items-center gap-2 py-4">
            <div className="text-[14px] whitespace-nowrap flex items-center xs:w-[100px] sm:w-[184px]"></div>
            <div className="flex flex-col xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] xs:flex xs:flex-col xs:justify-between sm:flex sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center w-[130px]">
                <p className="text-[14px] flex items-center">
                  <span className="whitespace-nowrap">建物名・部屋番号</span>
                  <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                    *
                  </span>
                </p>
              </div>
              <div className="max-w-[329px] sm:w-[calc(100%-130px)]">
                <InputText
                  name="detail_address"
                  value={registerShopValues}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* row 3 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 xs:items-center py-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            <span className="tracking-tight">メールアドレス（登録者）</span>
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            name="email"
            value={registerShopValues}
            onChange={handleChange}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {/* row 4 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 xs:items-center py-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            電話番号（登録者）
          </label>
          <InputText
            name="phone"
            value={registerShopValues}
            onChange={handleChange}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {/* row 5 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 xs:items-center py-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            店舗の許諾
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="shop_permission"
                value={shopPermission}
                onChange={(e: any) => setShopPermission(e.target.value)}
                className="px-2"
              >
                <div className="flex">
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="あり"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="なし"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col xs:flex xs:flex-row gap-2 xs:items-center py-8 border-b border-[#ccc]">
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
                setRegisterShopValues({
                  ...registerShopValues,
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
            className="w-full mt-[36px] sm:h-[48px] sm:flex sm:justify-center bg-[#F3F3F3] py-3"
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
        <div className="w-full flex justify-center mt-[27px]">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e: any) => setChecked(e.target.checked)}
              />
            }
            label="同意するニャン"
          />
        </div>
      </div>
      <div className="border-b border-[#CCCCCC] mt-[27px]"></div>
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
  );
};

export default ShopRegisterForm;
