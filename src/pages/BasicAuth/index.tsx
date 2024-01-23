import React, { useState } from "react";

type basicValueType = {
  username: string;
  password: string;
};

function BasicAuth() {
  const [basicValue, setBasicValue] = useState<basicValueType>({
    username: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setBasicValue({ ...basicValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const now = new Date();
    const item = {
      value: { username: basicValue.username, password: basicValue.password },
      expiry: now.getTime() + 3600000,
    };
    localStorage.setItem("basicAuth", JSON.stringify(item));
  };

  return (
    <div className="w-screen h-screen flex justify-center pt-80">
      <form className="flex-col w-full">
        <label className="block text-center mb-5">
          ユーザー名: &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="username"
            value={basicValue.username}
            onChange={handleChange}
            className="w-1/3 h-10"
          />
        </label>
        <label className="block text-center mb-5">
          パスワード: &nbsp;&nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={basicValue.password}
            onChange={handleChange}
            className="w-1/3 h-10"
          />
        </label>
        <div className="text-center ">
          <button
            type="button"
            onClick={handleSubmit}
            className="text-[24px] bg-[#FBA1B7] h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white"
          >
            Basic ログイン
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasicAuth;
