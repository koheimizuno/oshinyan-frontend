import { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Modal,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import PrivacyComponent from "../PrivacyComponent";
import { PREFECTURE } from "../../../constant";
import axios from "axios";
import { Notification } from "../../../constant/notification";
import { useNavigate } from "react-router-dom";

const modalBoxSytle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "960px",
  margin: "auto",
  borderRadius: "32px",
  bgcolor: "background.paper",
  boxShadow: 50,
  overflow: "visible",
};

const AmbassadorRegisterFrom = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submitValue, setSubmitValue] = useState({
    prefecture: "東京都",
  });

  const handleChange = (e: any) => {
    setSubmitValue({ ...submitValue, [e.target.name]: e.target.value });
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
          <img src="/assets/imgs/icons/questionmark.png" alt="questionmark" />
        </button>
      </div>
      <span className="text-red-500 mt-2 inline-block">＊＝必須</span>
      <form onSubmit={handleSubmit}>
        <div className="w-[640px] m-auto">
          {/* row 1 */}
          <div className="pt-[16px] pb-8 border-b border-[#ccc] flex justify-between items-center">
            <label className="text-[14px]" htmlFor="name_kana">
              <span className="tracking-tighter">アンバサダー名</span>
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <input
              type="text"
              name="ambassador_name"
              required
              className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          {/* row 2 */}
          <div className="py-8 border-b border-[#ccc] flex justify-between items-center">
            <label className="text-[14px]" htmlFor="name_kana">
              <span className="tracking-tighter">氏名</span>
            </label>
            <input
              type="text"
              name="full_name"
              onChange={handleChange}
              className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
            />
          </div>
          {/* row 3 */}
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
                    value={submitValue.prefecture}
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
              <div className="flex w-[456px] justify-between">
                <div className="flex items-center">
                  <p className="text-[14px]">市区町村</p>
                </div>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
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
                  name="street"
                  onChange={handleChange}
                  className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
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
                  name="other_address"
                  onChange={handleChange}
                  className="w-[329px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="flex justify-between border-b border-[#ccc] py-8">
            <div className="flex items-center">
              <p className="text-[14px] tracking-tighter">メールアドレス</p>
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </div>
            <input
              type="email"
              required
              name="email"
              onChange={handleChange}
              className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
            />
          </div>
          {/* row 5 */}
          <div className="flex justify-between border-b border-[#ccc] py-8">
            <div className="flex items-center">
              <p className="text-[14px] tracking-tighter">電話番号</p>
            </div>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              className="w-[456px] h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none"
            />
          </div>
          {/* row 6 */}
          <div className="pt-[32px] flex justify-between">
            <label className="text-[14px]" htmlFor="infomation">
              ご希望
              <span className="text-[16px] text-[#DC0000] ms-[8px] relative top-1">
                *
              </span>
            </label>
            <textarea
              name="preferred"
              className="h-[192px] w-[456px] border border-[#CCCCCC] p-2"
              placeholder="推しニャンアンバサダーとして、どんな活動をしたいかをご記入ください。（店舗取材、看板猫の写真撮影など）"
              onChange={handleChange}
              required
            ></textarea>
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
      >
        <Box sx={modalBoxSytle}>
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
                <p className="font-thin">
                  <span>推しニャンWebサイトでは、</span>
                  <br />
                  <span>アンバサダーを大募集しております。</span>
                  <br />
                  <span>にゃんこが好きで好きでたまらない、あなた！</span>
                  <br />
                  <span>是非、私たちの活動にご協力をお願いします。</span>
                  <br />
                </p>
                <p className="py-6 font-thin">
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
                <p className="font-thin pt-6">
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
            <img src="/assets/imgs/modal-img.png" alt="modal-img" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AmbassadorRegisterFrom;
