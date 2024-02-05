import React, { useState } from "react";
import Button from "../../../components/basic/Button";
import Container from "../../../components/basic/Container";
import axios from "axios";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitResetPassword = async () => {
      try {
        await axios.post("account/password_reset", { email: email });
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
          <form onSubmit={handleSubmit} className="w-[50%]">
            <label className="block text-center">
              <input
                type="email"
                name="email"
                placeholder="メールアドレスを入力してください。"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
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
