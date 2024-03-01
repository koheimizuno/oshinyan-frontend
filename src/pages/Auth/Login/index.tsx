import { useEffect } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../../layouts/MainLayout";
import Container from "../../../components/basic/Container";
import SocialLinkGroup from "../../../components/common/SocialLinkGroup";
import PageBar from "../../../components/common/PageBar";
import Title from "../../../components/common/Typography/Title";
import LoginForm from "../../../components/common/LoginForm";
import { useNavigate } from "react-router-dom";
import HelmetPage from "../../../layouts/MainLayout/HelmetPage";

function Login() {
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      isAuthenticated && navigate("/");
    }, 2000);
  }, [isAuthenticated, navigate]);
  return (
    <>
      <HelmetPage
        title="推しニャン｜看板猫サイトのログイン画面"
        description="推しニャンサイトのログインページ｜自分が登録したメールアドレスでログインをして推しニャンサイトを楽しんでみてください。"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="ログインするニャ！" />
          <Title title="ログインするニャ！" />
          <div className="mt-[16px] text-[16px] leading-[21px]">
            ログインして、好きなにゃんこを見つけるニャ！
          </div>
          <div className="mt-[32px] mb-[56px]">
            <LoginForm />
          </div>
        </Container>
      </MainLayout>
    </>
  );
}

export default Login;
