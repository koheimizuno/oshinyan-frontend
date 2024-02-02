import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { LogOutAction, TokenLoginAction } from "./slices/auth";
import "./App.css";
import PasswordResetConfirmation from "./pages/Auth/PasswordResetConfirmation";
import SuspenseContent from "./components/basic/SuspenseContent";
// const Top = lazy(() => import("./pages/Top"));
// const MonthRanking = lazy(() => import("./pages/MonthRanking"));
// const Guide = lazy(() => import("./pages/Guide"));
// const Registration = lazy(() => import("./pages/Auth/Registration"));
// const Feature = lazy(() => import("./pages/Feature"));
// const FeatureDetail = lazy(() => import("./pages/FeatureDetail"));
// const MyPage = lazy(() => import("./pages/MyPage"));
// const Nyanplace = lazy(() => import("./pages/Nyanplace"));
// const RegisterOther = lazy(() => import("./pages/RegisterOther"));
// const Privacy = lazy(() => import("./pages/Privacy"));
// const Company = lazy(() => import("./pages/Company"));
// const Inquiry = lazy(() => import("./pages/Inquiry"));
// const OshinyanDetail = lazy(() => import("./pages/OshinyanDetail"));
// const NyanplaceDetail = lazy(() => import("./pages/NyanplaceDetail"));
// const Comment = lazy(() => import("./pages/Comment"));
// const Column = lazy(() => import("./pages/Column"));
// const Oshiresister = lazy(() => import("./pages/Oshiresister"));
// const Login = lazy(() => import("./pages/Auth/Login"));
// const TotalRanking = lazy(() => import("./pages/TotalRanking"));
// const PasswordReset = lazy(() => import("./pages/Auth/PasswordReset"));

import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import Guide from "./pages/Guide";
import Registration from "./pages/Auth/Registration";
import Feature from "./pages/Feature";
import FeatureDetail from "./pages/FeatureDetail";
import MyPage from "./pages/MyPage";
import Nyanplace from "./pages/Nyanplace";
import RegisterOther from "./pages/RegisterOther";
import Privacy from "./pages/Privacy";
import Company from "./pages/Company";
import Inquiry from "./pages/Inquiry";
import OshinyanDetail from "./pages/OshinyanDetail";
import NyanplaceDetail from "./pages/NyanplaceDetail";
import Comment from "./pages/Comment";
import Column from "./pages/Column";
import Oshiresister from "./pages/Oshiresister";
import Login from "./pages/Auth/Login";
import TotalRanking from "./pages/TotalRanking";
import PasswordReset from "./pages/Auth/PasswordReset";

axios.defaults.baseURL = "http://162.43.50.92:8000/api/";

function App() {
  const dispatch = useDispatch();
  let token: string | null = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      let data;
      const now = new Date();
      if (token !== null) data = JSON.parse(token);
      axios.defaults.headers.common["Authorization"] = `Token ${data.value}`;
      if (now.getTime() > data.expiry) {
        dispatch(LogOutAction(data.value));
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
      try {
        dispatch(TokenLoginAction());
      } catch (error) {
        window.location.href = "/login";
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  const PRIVATE_ROUTES = ["mypage"];
  const isPrivatePage = PRIVATE_ROUTES.some((path) =>
    window.location.href.includes(path)
  );
  if (!token && isPrivatePage) {
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseContent />}>
        <Routes>
          <Route path="/">
            //1 <Route index element={<Top />} />
            <Route path="ranking/gekkan" element={<MonthRanking />} />
            <Route path="ranking" element={<TotalRanking />} />
            //2 <Route path="guide" element={<Guide />} />
            //3 <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="password_reset" element={<PasswordReset />} />
            <Route
              path="password_reset/:uid/:token/"
              element={<PasswordResetConfirmation />}
            />
            //4 <Route path="feature" element={<Feature />} />
            <Route path="feature/:id" element={<FeatureDetail />} />
            //5 <Route path="mypage" element={<MyPage />} />
            //6 <Route path="nyanplace" element={<Nyanplace />} />
            //7 <Route path="shopresister" element={<RegisterOther />} />
            <Route path="ambassador" element={<RegisterOther />} />
            //8 <Route path="privacy" element={<Privacy />} />
            //9 <Route path="company" element={<Company />} />
            //10 <Route path="oshiresister" element={<Oshiresister />} />
            //*11 <Route path="nyanplace/:id" element={<NyanplaceDetail />} />
            //12 <Route path="oshinyan/:id" element={<OshinyanDetail />} />
            //15 <Route path="comment" element={<Comment />} />
            //16 <Route path="column" element={<Column />} />
            //17 <Route path="inquiry" element={<Inquiry />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
