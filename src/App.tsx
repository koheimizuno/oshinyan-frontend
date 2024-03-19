import ReactGA from "react-ga";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { TokenLoginAction } from "./slices/auth";
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
const Test = lazy(() => import("./pages/Test"));
const NotFound = lazy(() => import("./pages/404"));

axios.defaults.baseURL = "https://x162-43-50-92.static.xvps.ne.jp";

ReactGA.initialize("6219758680");

function App() {
  const dispatch = useDispatch();
  let token: string | null = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      let data;
      if (token !== null) data = JSON.parse(token);
      axios.defaults.headers.common["Authorization"] = `Token ${data}`;
      try {
        dispatch(TokenLoginAction());
      } catch (error) {
        window.location.href = "/login";
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token, dispatch]);

  const PRIVATE_ROUTES = ["mypage", "comment"];

  const isPrivatePage = PRIVATE_ROUTES.some((path) =>
    window.location.href.includes(path)
  );

  if (!token && isPrivatePage) {
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  }

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="w-screen h-screen ">
            <SuspenseContent />
          </div>
        }
      >
        <Routes>
          <Route path="/">
            <Route index element={<Top />} />
            <Route path="ranking" element={<TotalRanking />} />
            <Route path="ranking/gekkan" element={<MonthRanking />} />
            <Route path="guide" element={<Guide />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="password_reset" element={<PasswordReset />} />
            <Route
              path="password_reset/:uid/:token/"
              element={<PasswordResetConfirmation />}
            />
            <Route path="feature" element={<Feature />} />
            <Route path="feature/:id" element={<FeatureDetail />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="nyanplace" element={<Nyanplace />} />
            <Route path="shopresister" element={<RegisterOther />} />
            <Route path="ambassador" element={<RegisterOther />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="company" element={<Company />} />
            <Route path="oshiresister" element={<Oshiresister />} />
            <Route path="nyanplace/:id" element={<NyanplaceDetail />} />
            <Route path="oshinyan/:id" element={<OshinyanDetail />} />
            <Route path="comment/:id" element={<Comment />} />
            <Route path="column/:id" element={<ColumnDetail />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
