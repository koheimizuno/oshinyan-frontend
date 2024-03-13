import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../../components/basic/Container";
import Button from "../../../components/basic/Button";
import axios from "axios";
import InputText from "../../../components/basic/InputText";

function PasswordResetConfirmation() {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [inputValues, setInputValues] = useState({
    password: "",
    repassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValues.password === inputValues.repassword) {
      const ResestPasswordConfirm = async () => {
        await axios.post(`account/password_reset/confirm/${uid}/${token}/`, {
          new_password: inputValues.password,
        });
        navigate("/login");
      };
      ResestPasswordConfirm();
    } else {
      setError("パスワードが一致しません。");
    }
  };

  const handleChange = (newFormData: { [key: string]: string }) => {
    setInputValues({ ...inputValues, ...newFormData });
  };

  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-3xl mb-6">パスワードリセット</p>
        <p className="text-left text-red-500 w-[50%]">{error}</p>
        <form onSubmit={handleSubmit} className="w-[50%]">
          <label className="block text-center py-3">
            <InputText
              type="password"
              name="password"
              value={inputValues}
              placeholder="新しいパスワード"
              required={true}
              onChange={handleChange}
            />
          </label>
          <label className="block text-center py-3">
            <InputText
              type="password"
              name="repassword"
              value={inputValues}
              placeholder="パスワード確認"
              required={true}
              onChange={handleChange}
            />
          </label>
          <Button value="確認ニャ！" />
        </form>
      </div>
    </Container>
  );
}

export default PasswordResetConfirmation;
