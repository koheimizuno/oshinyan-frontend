import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import Guide from "./pages/Guide";
import Registration from "./pages/Registration";
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
import Login from "./pages/Login";

import axios from "axios";
import { TokenLoginAction } from "./slices/auth";
import "./App.css";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token: string | null = localStorage.getItem("token");
    if (token) {
      let data;
      const now = new Date();
      if (token !== null) data = JSON.parse(token);
      axios.defaults.headers.common["Authorization"] = `Token ${data.value}`;
      if (now.getTime() > data.expiry) {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          //1 <Route index element={<Top />} />
          <Route path="/ranking" element={<MonthRanking />} />
          <Route path="/ranking/gekkan" element={<MonthRanking />} />
          //2 <Route path="/guide" element={<Guide />} />
          //3 <Route path="/registration" element={<Registration />} />
          //4 <Route path="/feature" element={<Feature />} />
          <Route path="/feature/:id" element={<FeatureDetail />} />
          //5 <Route path="/mypage" element={<MyPage />} />
          //6 <Route path="/nyanplace" element={<Nyanplace />} />
          //7 <Route path="/shopresister" element={<RegisterOther />} />
          <Route path="/ambassador" element={<RegisterOther />} />
          //8 <Route path="/privacy" element={<Privacy />} />
          //9 <Route path="/company" element={<Company />} />
          //10 <Route path="/oshiresister" element={<Oshiresister />} />
          //*11 <Route path="/nyanplace/:id" element={<NyanplaceDetail />} />
          //12 <Route path="/oshinyan/:id" element={<OshinyanDetail />} />
          //15 <Route path="/comment" element={<Comment />} />
          //16 <Route path="/column" element={<Column />} />
          //17 <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
