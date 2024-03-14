import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import PrivacyComponent from "../PrivacyComponent";
import { Notification } from "../../../constant/notification";
import InputText from "../../basic/InputText";

const ContactUsForm = () => {
  const navigate = useNavigate();
  const reEmailRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitValue, setSubmitValue] = useState({
    type: "質問・相談",
    client_type: "個人",
    company_name: "",
    kanji_name: "",
    furi_name: "",
    phone: "",
    email: "",
    re_email: "",
    detail: "",
  });

  const handleChange = (newFormData: { [key: string]: string }) => {
    setSubmitValue({ ...submitValue, ...newFormData });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitInquiry = async () => {
      try {
        if (submitValue.email === submitValue.re_email) {
          await axios.post("other/inquiry/", {
            type: submitValue.type,
            client_type: submitValue.client_type,
            company_name: submitValue.company_name,
            kanji_name: submitValue.kanji_name,
            furi_name: submitValue.furi_name,
            phone: submitValue.phone,
            email: submitValue.email,
            detail: submitValue.detail,
          });
          Notification(
            "success",
            "お問い合わせフォームが正常に送信されました。"
          );
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setErrorMsg("メールアドレスが一致しません。");
          setSubmitValue({ ...submitValue, re_email: "" });
          reEmailRef.current && reEmailRef.current.focus();
        }
      } catch (error) {
        Notification("error", "メールアドレスは既に存在します。");
      }
    };
    submitInquiry();
  };

  return (
    <div className="bg-white px-[24px] pb-[48px]">
      <form className="max-w-[640px] m-auto" onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
            問い合わせ種別
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <Select
              aria-label="type"
              name="type"
              value={submitValue.type}
              onChange={(e: any) =>
                setSubmitValue({
                  ...submitValue,
                  [e.target.name]: e.target.value,
                })
              }
              className="bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] h-8 w-[144px] sm:h-10 text-center text-[16px]"
              sx={{ borderRadius: "20px" }}
            >
              <MenuItem value="質問・相談">
                <span className="px-2 py-1 text-[12px] sm:text-base">
                  質問・相談
                </span>
              </MenuItem>
            </Select>
          </div>
        </div>
        {/* row 2 */}
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
                value={submitValue.client_type}
                onChange={(e: any) =>
                  setSubmitValue({
                    ...submitValue,
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
        {/* row 4 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8">
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
            value={submitValue}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 5 */}
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
            value={submitValue}
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
            value={submitValue}
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
            電話番号
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <InputText
            type="tel"
            name="phone"
            value={submitValue}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {/* row 6 */}
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
            value={submitValue}
            onChange={handleChange}
            required={true}
            containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
          />
        </div>
        {errorMsg && (
          <h3 className="text-2xl text-red-500 my-12">{errorMsg}</h3>
        )}
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
            value={submitValue.re_email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubmitValue({
                ...submitValue,
                [e.target.name]: e.target.value,
              })
            }
            required
            className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)] h-[40px] rounded-[4px] border border-[#CCCCCC] focus:outline-none p-2"
          />
        </div>
        <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
        {/* row 8 */}
        <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-8 pb-8 border-b border-[#ccc]">
          <label
            className="text-[14px] xs:w-[100px] sm:w-[184px]"
            htmlFor="name_kana"
          >
            <span>お問合わせ内容</span>
            <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
              *
            </span>
          </label>
          <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
            <textarea
              name="detail"
              id="detail"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setSubmitValue({
                  ...submitValue,
                  [e.target.name]: e.target.value,
                })
              }
              className="w-full h-[192px] border border-[#CCCCCC] p-2 focus:outline-none"
            ></textarea>
          </div>
        </div>
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

export default ContactUsForm;
