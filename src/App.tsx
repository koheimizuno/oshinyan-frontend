import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import About from "./pages/About";
import Register from "./pages/Register";
import Feature from "./pages/Feature";
import FeatureDetail from "./pages/FeatureDetail";
import MyPage from "./pages/MyPage";
import PlaceList from "./pages/PlaceList";
import RegisterOther from "./pages/RegisterOther";
import Privacy from "./pages/Privacy";
import Company from "./pages/Company";
import Application from "./pages/Application";
import ContactUs from "./pages/ContactUs";
import CatDetail from "./pages/CatDetail";
import LocationDetail from "./pages/LocationDetail";
import Comment from "./pages/Comment";
import Column from "./pages/Column";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          //1 <Route index element={<Top />} />
          <Route path="ranking" element={<MonthRanking />} />
          //2 <Route path="about" element={<About />} />
          //3 <Route path="/register" element={<Register />} />
          //4 <Route path="feature" element={<Feature />} />
          <Route path="feature/detail/:id" element={<FeatureDetail />} />
          //5 <Route path="/mypage" element={<MyPage />} />
          //6 <Route path="/placelist" element={<PlaceList />} />
          //7 <Route path="/registercat" element={<RegisterOther />} />
          //8 <Route path="/privacy" element={<Privacy />} />
          //9 <Route path="/company" element={<Company />} />
          //10 <Route path="/registerambassador" element={<RegisterOther />} />
          //11{" "}
          <Route path="/location/detail/:id" element={<LocationDetail />} />
          //12 <Route path="/cat/detail/:id" element={<CatDetail />} />
          //15 <Route path="/comment" element={<Comment />} />
          //16 <Route path="/column" element={<Column />} />
          //17 <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
