import React, { useState } from "react";
import Button from "../../../components/basic/Button";
import Container from "../../../components/basic/Container";
import axios from "axios";
import InputText from "../../../components/basic/InputText";

function PasswordReset() {
  const [inputValues, setInputValues] = useState({
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (newFormData: { [key: string]: string }) => {
    setInputValues({ ...inputValues, ...newFormData });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitResetPassword = async () => {
      try {
        await axios.post("account/password_reset", {
          email: inputValues.email,
        });
        setSuccessMsg(
          "パスワード再設定メールが送信されました。受信箱を確認してください。"
        );
      } catch (error: any) {
        if (error.response.status === 400) {
          setErrorMsg("メールアドレスを正確に入力してください。");
        } else {
          setErrorMsg("メールを送信できません。");
        }
      }
    };
    submitResetPassword();
  };

  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center">
        {errorMsg && (
          <h3 className="text-2xl text-red-500 my-12">{errorMsg}</h3>
        )}
        {successMsg ? (
          <h3 className="text-2xl">{successMsg}</h3>
        ) : (
          <form onSubmit={handleSubmit} className="w-3/4 md:w-[50%]">
            <label className="block text-center">
              <InputText
                type="email"
                name="email"
                required={true}
                value={inputValues}
                onChange={handleChange}
                placeholder="メールアドレスを入力してください。"
              />
            </label>
            <Button />
          </form>
        )}
      </div>
    </Container>
  );
}

export default PasswordReset;
