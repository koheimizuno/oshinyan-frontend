import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivacyComponent from "../PrivacyComponent";
import InputText from "../../basic/InputText";
import {
  FormControlLabel,
  Checkbox,
  Modal,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { PREFECTURE } from "../../../constant";
import { Notification } from "../../../constant/notification";

const AmbassadorRegisterFrom = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submitValue, setSubmitValue] = useState({
    ambassador_name: "",
    full_name: "",
    prefecture: "東京都",
    city: "",
    street: "",
    other_address: "",
    email: "",
    phone: "",
    preferred: "",
  });

  const handlechange = (newFormData: { [key: string]: string }) => {
    setSubmitValue({
      ...submitValue,
      ...newFormData,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createAmbassador = async () => {
      if (checked) {
        try {
          await axios.post("other/ambassador/", submitValue);
          Notification("success", "アンバサダー登録に成功しました。");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error: any) {
          error.response.status === 400 &&
            Notification("error", "メールアドレスが既に存在します。");
        }
      }
    };
    createAmbassador();
  };

  return (
    <div className="bg-white px-[24px] pb-[48px] border-2 border-[#CBB279]">
      <div className="flex justify-between border-b border-[#CCCCCC]">
        <p className="py-8  text-xl">
          「推しニャン」サイトのアンバサダーとして活躍してくれる方を大募集しているニャー
        </p>
        <button onClick={() => setOpenModal(true)}>
          <img src="/assets/imgs/icons/questionmark.webp" alt="questionmark" />
        </button>
      </div>
      <span className="text-red-500 mt-2 inline-block">＊＝必須</span>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[640px] m-auto">
          {/* row 1 */}
          <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
            <label
              className="text-[14px] xs:w-[100px] sm:w-[184px]"
              htmlFor="name_kana"
            >
              アンバサダー名
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <InputText
              name="ambassador_name"
              value={submitValue}
              onChange={handlechange}
              required={true}
              containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
            />
          </div>
          {/* row 2 */}
          <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
            <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
              氏名
            </label>
            <InputText
              name="full_name"
              value={submitValue}
              onChange={handlechange}
              required={true}
              containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
            />
          </div>
          {/* row 3 */}
          <div className="py-4 border-b border-[#ccc]">
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
                    value={submitValue.prefecture}
                    onChange={(e: any) =>
                      setSubmitValue({
                        ...submitValue,
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
                    value={submitValue}
                    onChange={handlechange}
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
                    value={submitValue}
                    onChange={handlechange}
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
                    name="other_address"
                    value={submitValue}
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
            <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
              <span>メールアドレス</span>
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <InputText
              type="email"
              name="email"
              value={submitValue}
              onChange={handlechange}
              required={true}
              containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
            />
          </div>
          {/* row 5 */}
          <div className="flex flex-col xs:flex xs:flex-row gap-2 py-2 xs:items-center pt-[16px] pb-8 border-b border-[#ccc]">
            <label className="text-[14px] xs:w-[100px] sm:w-[184px]">
              電話番号
            </label>
            <InputText
              type="tel"
              name="phone"
              value={submitValue}
              onChange={handlechange}
              containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
            />
          </div>
          {/* row 6 */}
          <div className="flex flex-col xs:flex xs:flex-row gap-2 xs:items-center pt-8">
            <label
              className="text-[14px] xs:w-[100px] sm:w-[184px]"
              htmlFor="name_kana"
            >
              <span>ご希望</span>
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <div className="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]">
              <textarea
                name="preferred"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setSubmitValue({
                    ...submitValue,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-[192px] border border-[#CCCCCC] p-2 focus:outline-none"
                required
              ></textarea>
            </div>
          </div>
          <div className="border-b border-[#CCCCCC] mt-[32px]"></div>
          <PrivacyComponent />
          <div className="text-center mt-[27px]">
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
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0,0,0,.85)",
            },
          },
        }}
      >
        <Box className="w-[960px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-white shadow-md">
          <div className="p-6">
            <Close
              className="absolute top-4 right-4 bg-[#474747] rounded-full text-white p-1 cursor-pointer"
              onClick={() => setOpenModal(false)}
            />
            <h2 className="text-[32px] text-[#E695A9] text-center pt-[18px] pb-[35px] border-b border-[#CCCCCC] tracking-[-0.15em] font-medium">
              推しニャンアンバサダーとは？
            </h2>
            <div className="flex justify-between px-[54px] py-[27px]">
              <div className="text-xl text-[#515151] tracking-[-0.1em]">
                <p className="font-light">
                  <span>推しニャンWebサイトでは、</span>
                  <br />
                  <span>アンバサダーを大募集しております。</span>
                  <br />
                  <span>にゃんこが好きで好きでたまらない、あなた！</span>
                  <br />
                  <span>是非、私たちの活動にご協力をお願いします。</span>
                  <br />
                </p>
                <p className="py-6 font-light">
                  アンバサダーの方にお願いをしていること
                </p>
                <p className="font-medium">
                  <span>・推しニャンサイトを愛していただくこと</span>
                  <br />
                  <span>・看板猫がいるお店への許諾</span>
                  <br />
                  <span>・看板猫がいるお店への取材</span>
                  <br />
                  <span>・看板猫の写真投稿</span>
                  <br />
                  <span>・推しニャンサイトのSNS運用</span>
                  <br />
                  <span>・推しニャンサイトの宣伝業務お手伝い</span>
                  <br />
                </p>
                <p className="font-light pt-6">
                  <span>
                    ご協力いただいた方には、推しニャンオリジナルグッズ提供他
                  </span>
                  <br />
                  <span>アンバサダー認定証をお送りさせていただきます。</span>
                  <br />
                  <span>
                    また、お仕事として受けてくださる方も募集しております。
                  </span>
                  <br />
                </p>
              </div>
              <div className="w-[240px]">
                <div className="h-[340px] bg-[#E6E6E6]"></div>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/imgs/modal-img.webp" alt="modal-img" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AmbassadorRegisterFrom;
