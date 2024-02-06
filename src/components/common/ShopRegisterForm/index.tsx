import { useRef, useState } from "react";
import FileUpload from "../../basic/icons/FileUpload";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { PREFECTURE } from "../../../constant";
import axios from "axios";
import PrivacyComponent from "../PrivacyComponent";
import { Notification } from "../../../constant/notification";

const ShopRegisterForm = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [registerShopValues, setRegisterShopValues] = useState({
    shop_name: "",
    prefecture: "東京都",
    city: "",
    street: "",
    detail_address: "",
    email: "",
    phone: "",
    shop_permission: true,
    cat_info: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterShopValues({ ...registerShopValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("shop_name", registerShopValues.shop_name);
    formData.append("prefecture", registerShopValues.prefecture);
    formData.append("city", registerShopValues.city);
    formData.append("street", registerShopValues.street);
    formData.append("detail_address", registerShopValues.detail_address);
    formData.append("email", registerShopValues.email);
    formData.append("phone", registerShopValues.phone);
    formData.append(
      "shop_permission",
      registerShopValues.shop_permission.toString()
    );
    formData.append("cat_info", registerShopValues.cat_info);

    if (selectedFiles != null) {
      const files = Array.from(selectedFiles);
      files.forEach((file) => formData.append("imgs", file));
    }
    if (checked) {
      try {
        const res = await axios.post("unregistered/shop/", formData);
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
            name="shop_name"
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
            onChange={handleChange}
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
                <Select
                  aria-label="prefecture"
                  name="prefecture"
                  value={registerShopValues.prefecture}
                  onChange={handleChange}
                  className="bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] h-10 text-center text-[16px] w-[144px]"
                  sx={{ borderRadius: "20px" }}
                >
                  {PREFECTURE &&
                    PREFECTURE.map((item, key) => (
                      <MenuItem value={item[0]} key={key}>
                        {item[0]}
                      </MenuItem>
                    ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between items-center">
              <label htmlFor="city" className="text-[14px]">
                市区町村
              </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between items-center">
              <label htmlFor="street" className="text-[14px]">
                番地
              </label>
              <input
                type="text"
                id="street"
                name="street"
                onChange={handleChange}
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div></div>
            <div className="flex w-[456px] justify-between items-center">
              <label htmlFor="detail_address" className="text-[14px]">
                建物名・部屋番号
              </label>
              <input
                type="text"
                id="detail_address"
                name="detail_address"
                onChange={handleChange}
                className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-between items-center border-b border-[#ccc] py-8">
          <label htmlFor="email" className="text-[14px] tracking-tighter">
            <span>メールアドレス（登録者）</span>
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
          />
        </div>
        {/* row 4 */}
        <div className="flex justify-between items-center border-b border-[#ccc] py-8">
          <label htmlFor="phone" className="text-[14px] tracking-tighter">
            電話番号（登録者）
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={handleChange}
            className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
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
                name="shop_permission"
                value={registerShopValues.shop_permission}
                onChange={handleChange}
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
        <div className="pt-[32px] flex justify-between">
          <label className="text-[14px]" htmlFor="cat_info">
            看板猫情報
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <textarea
            name="cat_info"
            id="cat_info"
            onChange={handleChange}
            className="h-[192px] w-[456px] border border-[#CCCCCC] p-2 focus:outline-none"
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
        <div className="w-full flex justify-center">
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
