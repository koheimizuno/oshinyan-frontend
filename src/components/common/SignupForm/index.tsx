import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { PREFECTURE } from "../../../constant";
import { Box, Checkbox, FormControlLabel, Modal } from "@mui/material";
import { RegistrationAction } from "../../../slices/auth";
import PrivacyComponent from "../PrivacyComponent";
import { Close } from "@mui/icons-material";
import axios from "axios";

const modalBoxSytle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "912px",
  margin: "auto",
  bgcolor: "#fff",
  boxShadow: 50,
  overflow: "visible",
  outline: 0,
  borderRadius: "8px",
};

interface avatarType {
  id: number;
  avatar: string;
}

const SignupForm = () => {
  const dispatch = useDispatch();
  const checkRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [avatarModal, setAvatarModal] = useState(false);
  const [avatars, setAvatars] = useState<avatarType[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [values, setValues] = useState({
    username: "",
    prefecture: "北海道",
    email: "",
    password: "",
    avatar: 0,
  });

  useEffect(() => {
    if (checked) {
      const checkboxElement = checkRef.current as HTMLInputElement;
      checkboxElement !== null &&
        checkboxElement.classList.remove("bg-red-300");
    }
  }, [checked]);

  const handleChangePrivacyCheck = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checked) {
      dispatch(
        RegistrationAction({
          username: values.username,
          prefecture: values.prefecture,
          email: values.email,
          password: values.password,
          avatar: values.avatar,
        })
      );
    } else {
      const checkboxElement = checkRef.current as HTMLInputElement;
      checkboxElement !== null && checkboxElement.classList.add("bg-red-300");
    }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleAvatar = () => {
    setAvatarModal(true);
    const fetchAvatar = async () => {
      const { data } = await axios.get("avatar");
      setAvatars(data);
    };
    fetchAvatar();
  };

  const selectAvatar = (id: number, url: string) => {
    setValues((values) => ({ ...values, avatar: id }));
    setAvatarModal(false);
    setSelectedAvatar(url);
  };

  return (
    <div className="bg-white p-[24px] pb-[40px]">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex">
            <div
              className="w-[72px] h-[72px] me-[38px] text-sm bg-[#ccc] rounded-full flex justify-center items-center text-center cursor-pointer"
              onClick={handleAvatar}
            >
              {selectedAvatar ? (
                <img src={selectedAvatar} alt={selectedAvatar} width={40} />
              ) : (
                <img src="/assets/imgs/icon_add.png" alt="icon_add" />
              )}
            </div>
          </div>
          <Modal
            open={avatarModal}
            onClose={() => setAvatarModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalBoxSytle}>
              <div className="p-6 pb-[34px]">
                <Close
                  className="absolute top-2 right-2 bg-[#474747] rounded-full text-white p-1 cursor-pointer"
                  onClick={() => setAvatarModal(false)}
                />
                <h3 className="text-[24px]">
                  使用する猫アイコンを選択するニャン！
                </h3>
                <div className="mt-10 flex flex-wrap gap-10">
                  {avatars.length &&
                    avatars.map((item, index) => (
                      <label
                        key={index}
                        className="cursor-pointer"
                        onClick={() => selectAvatar(item.id, item.avatar)}
                      >
                        <img src={item.avatar} alt={item.avatar} />
                      </label>
                    ))}
                </div>
              </div>
            </Box>
          </Modal>
          <div className="grow">
            <div className="flex justify-between h-[80px] border-b border-[#CCCCCC] items-center">
              <div className="flex items-center">
                <label htmlFor="username" className="w-[134px]">
                  ニックネーム
                </label>
                <input
                  className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-[304px] p-2 focus:outline-none"
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="residence" className="w-[96px]">
                  居住エリア
                </label>
                <div className="relative my-auto h-[40px]">
                  <select
                    id="prefecture"
                    name="prefecture"
                    onChange={handleChange}
                    className="appearance-none pr-8 bg-right bg-no-repeat rounded-full text-center text-[16px] w-[144px] bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {PREFECTURE &&
                      PREFECTURE.map((e, key) => (
                        <option value={e} key={key}>
                          {e[0]}
                        </option>
                      ))}
                  </select>
                  <div
                    className="w-[12px] h-[8px] absolute top-[18px] right-2"
                    style={{
                      backgroundImage:
                        "url('/assets/imgs/select_triangle.png')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* row2 */}
            <div className="flex justify-between h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label
                htmlFor="email"
                className="w-[134px] mr-5 whitespace-nowrap"
              >
                メールアドレス
              </label>
              <input
                className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-between h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label
                htmlFor="password"
                className="w-[134px] mr-5 whitespace-nowrap"
              >
                パスワード
              </label>
              <input
                className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <PrivacyComponent />
        <div className="text-center mt-[27px] pb-[27px] border-b border-[#CCCCCC]">
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChangePrivacyCheck} />
            }
            label="同意するニャン"
            ref={checkRef}
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

export default SignupForm;

// bg-[#FBA1B7]
