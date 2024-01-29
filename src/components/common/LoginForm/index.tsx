import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../slices/auth";
import axios from "axios";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [submitData, setSubmitData] = useState({});
  const [loginError, setLoginError] = useState("");
  const { user, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    setLoginError(error);
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({ ...submitData, [e.target.name]: e.target.value });
    setLoginError("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(submitData));
  };

  const handleResetPassword = () => {
    axios.post("password_reset", {
      email: user.email,
    });
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
          <input
            className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
            type="text"
            name="email"
            required
            onChange={handleChange}
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
            <input
              className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto w-full h-[40px] p-2 focus:outline-none"
              type="password"
              name="password"
              required
              onChange={handleChange}
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
      <div className="text-center pt-12">
        <button
          type="submit"
          className="text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white"
        >
          確認ニャ！
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

// bg-[#FBA1B7]
