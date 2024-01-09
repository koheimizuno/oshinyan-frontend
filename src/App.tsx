import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import Guide from "./pages/Guide";
import Registration from "./pages/Registration";
import Feature from "./pages/Feature";
import FeatureDetail from "./pages/FeatureDetail";
import MyPage from "./pages/MyPage";
import Nyanplace from "./pages/Nyanplace";
import RegisterOther from "./pages/Shopresister";
import Privacy from "./pages/Privacy";
import Company from "./pages/Company";
import Inquiry from "./pages/Inquiry";
import CatDetail from "./pages/CatDetail";
import LocationDetail from "./pages/LocationDetail";
import Comment from "./pages/Comment";
import Column from "./pages/Column";
import axios from "axios";
import Oshiresister from "./pages/Oshiresister";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

function App() {
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
          //*11{" "}
          <Route path="/location/detail/:id" element={<LocationDetail />} />
          //12 <Route path="/oshinyan/:id" element={<CatDetail />} />
          //15 <Route path="/comment" element={<Comment />} />
          //16 <Route path="/column" element={<Column />} />
          //17 <Route path="/inquiry" element={<Inquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
