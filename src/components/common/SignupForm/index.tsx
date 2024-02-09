import React, { lazy, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PREFECTURE } from "../../../constant";
import PrivacyComponent from "../PrivacyComponent";
import InputText from "../../basic/InputText";
import { RegistrationAction } from "../../../slices/auth";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { Close } from "@mui/icons-material";
const Box = lazy(() => import("@mui/material/Box"));

interface avatarType {
  id: number;
  avatar: string;
}

const SignupForm = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [avatarModal, setAvatarModal] = useState(false);
  const [avatars, setAvatars] = useState<avatarType[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [avatar, setAvatar] = useState(0);
  const [values, setValues] = useState({
    username: "",
    prefecture: "北海道",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    avatar: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checked) {
      if (avatar) {
        dispatch(
          RegistrationAction({
            username: values.username,
            prefecture: values.prefecture,
            email: values.email,
            password: values.password,
            avatar: avatar,
          })
        );
      } else {
        setErrorMsg({
          ...errorMsg,
          avatar: "猫のアイコンを選択してください。",
        });
      }
    }
  };

  const handleChange = (newFormData: { [key: string]: string }) => {
    setValues({ ...values, ...newFormData });
  };

  const handleAvatar = () => {
    setAvatarModal(true);
    const fetchAvatar = async () => {
      const { data } = await axios.get("account/avatar/");
      setAvatars(data);
    };
    fetchAvatar();
  };

  const selectAvatar = (id: number, url: string) => {
    setAvatar(id);
    setAvatarModal(false);
    setSelectedAvatar(url);
  };

  return (
    <div className="bg-white p-[24px] pb-[40px]">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex">
            <button
              type="button"
              className={`w-[72px] h-[72px] me-[38px] text-sm bg-[#ccc] rounded-full flex justify-center items-center text-center cursor-pointer ${
                errorMsg.avatar && "border-2 border-red-400"
              }`}
              onClick={handleAvatar}
            >
              {selectedAvatar ? (
                <img src={selectedAvatar} alt={selectedAvatar} width={40} />
              ) : (
                <img src="/assets/imgs/icons/icon_add.png" alt="icon_add" />
              )}
            </button>
          </div>
          <Modal
            open={avatarModal}
            onClose={() => setAvatarModal(false)}
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
            <Box className="w-[912px] bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                <InputText
                  name="username"
                  value={values}
                  onChange={handleChange}
                  required={true}
                  containerClass="w-[304px]"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="residence" className="w-[96px]">
                  居住エリア
                </label>
                <div className="relative my-auto h-[40px]">
                  <Select
                    aria-label="prefecture"
                    name="prefecture"
                    value={values.prefecture}
                    onChange={(e: any) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
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
            {/* row2 */}
            <div className="flex justify-between h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label
                htmlFor="email"
                className="w-[134px] mr-5 whitespace-nowrap"
              >
                メールアドレス
              </label>
              <InputText
                type="email"
                name="email"
                value={values}
                onChange={handleChange}
                required={true}
                containerClass="w-full"
              />
            </div>
            <div className="flex justify-between h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label
                htmlFor="password"
                className="w-[134px] mr-5 whitespace-nowrap"
              >
                パスワード
              </label>
              <InputText
                type="password"
                name="password"
                value={values}
                onChange={handleChange}
                required={true}
                containerClass="w-full"
              />
            </div>
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

export default SignupForm;

// bg-[#FBA1B7]
