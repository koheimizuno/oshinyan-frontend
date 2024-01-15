import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../slices/auth";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";
import LoginForm from "../../components/common/LoginForm";

function Login() {
  const dispatch = useDispatch();
  const [submitData, setSubmitData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({ ...submitData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(submitData));
  };

  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="会員登録ニャ！" />
        <Title title="会員登録ニャ！" />
        <div className="mt-[16px] text-[16px] leading-[21px]">
          会員登録して、推しニャンを見つけて楽しむニャー
        </div>
        <div className="mt-[32px] mb-[56px]">
          <LoginForm />
        </div>
      </Container>
      <Container>
        {/* <div className="h-[50vh] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="">
            <label htmlFor="username" className="block mb-5">
              Username:
              <input
                type={"text" || "email"}
                name="username"
                id="username"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="" className="block mb-5">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Login" />
          </form>
        </div> */}
      </Container>
    </MainLayout>
  );
}

export default Login;
