import axios from "axios";
import { lazy, useState } from "react";
import { useDispatch } from "react-redux";
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
    prefecture: "",
    email: "",
    password: "",
  });
  const [submitAfter, setSubmitAfter] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checked) {
      if (avatar && values.prefecture) {
        dispatch(
          RegistrationAction({
            username: values.username,
            prefecture: values.prefecture,
            email: values.email,
            password: values.password,
            avatar: avatar,
          })
        );
      }
    }
    setSubmitAfter(true);
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
        <div className="xs:block md:flex">
          <div className="flex justify-center">
            <button
              type="button"
              className={`w-[72px] h-[72px] me-[38px] text-sm bg-[#ccc] rounded-full flex justify-center items-center text-center cursor-pointer ${
                submitAfter && !avatar && "border-2 border-red-400"
              }`}
              onClick={handleAvatar}
            >
              {selectedAvatar ? (
                <img src={selectedAvatar} alt={selectedAvatar} width={40} />
              ) : (
                <img src="/assets/imgs/icons/icon_add.webp" alt="icon_add" />
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
            <Box className="w-3/4 sm:2/3 md:w-1/2 bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="p-6 pb-[34px]">
                <Close
                  className="absolute top-2 right-2 bg-[#474747] rounded-full text-white p-1 cursor-pointer"
                  onClick={() => setAvatarModal(false)}
                />
                <h3 className="xs:text-[18px] md:text-[24px]">
                  使用する猫アイコンを選択するニャン！
                </h3>
                <div className="xs:mt-5 md:mt-10 flex justify-center flex-wrap gap-4 xl:gap-10">
                  {avatars.length &&
                    avatars.map((item, index) => (
                      <label
                        key={index}
                        className="cursor-pointer"
                        onClick={() => selectAvatar(item.id, item.avatar)}
                      >
                        <img
                          src={item.avatar}
                          alt={item.avatar}
                          className="w-[25px] sm:w-[40px] md:w-[72px]"
                        />
                      </label>
                    ))}
                </div>
              </div>
            </Box>
          </Modal>
          <div className="grow">
            <div className="xs:flex xs:flex-col xs:py-4 md:py-0 md:flex md:flex-row md:justify-between md:items-center gap-4 md:h-[80px] border-b border-[#CCCCCC] ">
              <div className="xs:flex xs:flex-row gap-2 py-2 xs:items-center xs:gap-4">
                <label
                  htmlFor="username"
                  className="xs:w-[134px] whitespace-nowrap"
                >
                  ニックネーム
                </label>
                <InputText
                  name="username"
                  value={values}
                  onChange={handleChange}
                  required={true}
                  containerClass="xs:w-[calc(100%-134px)]"
                />
              </div>
              <div className="xs:flex xs:flex-row gap-2 py-2 xs:items-center xs:gap-2">
                <label
                  htmlFor="residence"
                  className="whitespace-nowrap xs:w-[134px]"
                >
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
                    className={`bg-gradient-to-b from-[#EAEAEA] to-[#D3D3D3] h-10 text-center text-[16px] w-[144px] ${
                      submitAfter &&
                      !values.prefecture &&
                      "border border-red-500"
                    }`}
                    sx={{ borderRadius: "20px" }}
                  >
                    {PREFECTURE &&
                      PREFECTURE.map((item, key) => (
                        <MenuItem value={item[0]} key={key} className="">
                          <span className="px-2 py-1">{item[0]}</span>
                        </MenuItem>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
            {/* row2 */}
            <div className="flex justify-between gap-4 h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label htmlFor="email" className="xs:w-[134px] whitespace-nowrap">
                メールアドレス
              </label>
              <InputText
                type="email"
                name="email"
                value={values}
                onChange={handleChange}
                required={true}
                containerClass="xs:w-[calc(100%-134px)]"
              />
            </div>
            <div className="flex justify-between gap-4 h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]">
              <label
                htmlFor="password"
                className="xs:w-[134px] whitespace-nowrap"
              >
                パスワード
              </label>
              <InputText
                type="password"
                name="password"
                value={values}
                onChange={handleChange}
                required={true}
                containerClass="xs:w-[calc(100%-134px)]"
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
            登録ニャ！
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

// bg-[#FBA1B7]
