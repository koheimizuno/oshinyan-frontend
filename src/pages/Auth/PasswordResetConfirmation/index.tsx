import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../../components/basic/Container";
import Button from "../../../components/basic/Button";
import axios from "axios";

function PasswordResetConfirmation() {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === repassword) {
      const ResestPasswordConfirm = async () => {
        const { data } = await axios.post(
          `account/password_reset/confirm/${uid}/${token}/`,
          {
            new_password: password,
          }
        );
        navigate("/login");
      };
      ResestPasswordConfirm();
    } else {
      setError("パスワードが一致しません。");
    }
  };
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-6">パスワードリセット</h1>

        <p className="text-left text-red-500 w-[50%]">{error}</p>
        <form onSubmit={handleSubmit} className="w-[50%]">
          <label className="block text-center py-3">
            <input
              type="password"
              name="password"
              placeholder="新しいパスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
            />
          </label>
          <label className="block text-center py-3">
            <input
              type="password"
              name="rePassword"
              placeholder="パスワード確認"
              value={repassword}
              onChange={(e) => setrePassword(e.target.value)}
              required
              className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-full p-2 focus:outline-none"
            />
          </label>
          <Button />
        </form>
      </div>
    </Container>
  );
}

export default PasswordResetConfirmation;
