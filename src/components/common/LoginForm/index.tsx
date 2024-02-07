import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../slices/auth";
import { useNavigate } from "react-router-dom";
import Button from "../../basic/Button";
import InputText from "../../basic/InputText";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState({});
  const [loginError, setLoginError] = useState("");
  const { error } = useSelector((state: any) => state.user);

  useEffect(() => {
    setLoginError(error);
  }, [error]);

  const handleChange = (newFormData: { [key: string]: string }) => {
    setSubmitData({ ...submitData, ...newFormData });
    setLoginError("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(submitData));
  };

  const handleResetPassword = () => {
    navigate("/password_reset");
  };

  return (
    <form className="bg-white px-[84px] py-10" onSubmit={handleSubmit}>
      {loginError && (
        <p className="ml-[20%] text-red-500">
          {/* 無効なユーザー名またはパスワード。 */}
          {loginError}
        </p>
      )}
      <label
        htmlFor="email"
        className=" flex justify-between h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]"
      >
        <p className="">メールアドレス</p>
        <div className="w-[80%]">
          <InputText
            type="email"
            name="email"
            value={submitData}
            onChange={handleChange}
            required={true}
          />
        </div>
      </label>
      <div className="border-b border-[#CCCCCC]">
        <label
          htmlFor="password"
          className="flex justify-between gap-5 h-[85px] items-center mt-[4px]"
        >
          <p className="">パスワード</p>
          <div className="w-[80%]">
            <InputText
              type="password"
              name="password"
              value={submitData}
              onChange={handleChange}
              required={true}
            />
          </div>
        </label>
        <div className="ml-[20%] mb-12">
          <button
            type="button"
            className="border-b border-[#707070]"
            onClick={handleResetPassword}
          >
            パスワードをお忘れですか？
          </button>
        </div>
      </div>
      <Button />
    </form>
  );
};

export default LoginForm;
