import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { LogOutAction, TokenLoginAction } from "./slices/auth";
import "./App.css";
import SuspenseContent from "./components/basic/SuspenseContent";
const Top = lazy(() => import("./pages/Top"));
const MonthRanking = lazy(() => import("./pages/MonthRanking"));
const Guide = lazy(() => import("./pages/Guide"));
const Registration = lazy(() => import("./pages/Auth/Registration"));
const Feature = lazy(() => import("./pages/Feature"));
const FeatureDetail = lazy(() => import("./pages/FeatureDetail"));
const MyPage = lazy(() => import("./pages/MyPage"));
const Nyanplace = lazy(() => import("./pages/Nyanplace"));
const RegisterOther = lazy(() => import("./pages/RegisterOther"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Company = lazy(() => import("./pages/Company"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const OshinyanDetail = lazy(() => import("./pages/OshinyanDetail"));
const NyanplaceDetail = lazy(() => import("./pages/NyanplaceDetail"));
const Comment = lazy(() => import("./pages/Comment"));
const ColumnDetail = lazy(() => import("./pages/ColumnDetail"));
const Oshiresister = lazy(() => import("./pages/Oshiresister"));
const Login = lazy(() => import("./pages/Auth/Login"));
const TotalRanking = lazy(() => import("./pages/TotalRanking"));
const PasswordReset = lazy(() => import("./pages/Auth/PasswordReset"));
const PasswordResetConfirmation = lazy(
  () => import("./pages/Auth/PasswordResetConfirmation")
);

axios.defaults.baseURL = "http://162.43.50.92:8000/api/";
axios.defaults.baseURL = "http://162.43.50.92:8000/";

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

  // const PRIVATE_ROUTES = ["mypage", "oshinyan"];
  // const isPrivatePage = PRIVATE_ROUTES.some((path) =>
  //   window.location.href.includes(path)
  // );

  // if (!token && isPrivatePage) {
  //   delete axios.defaults.headers.common["Authorization"];
  //   window.location.href = "/login";
  // }

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
            //15 <Route path="comment/:id" element={<Comment />} />
            //16 <Route path="column/:id" element={<ColumnDetail />} />
            //17 <Route path="inquiry" element={<Inquiry />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
