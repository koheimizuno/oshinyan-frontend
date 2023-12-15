import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import ConceptIntro from "./pages/ConceptIntro";
import Register from "./pages/Register";
import Feature from "./pages/Feature";
import FeatureDetail from "./pages/FeatureDetail";
import MyPage from "./pages/MyPage";
import SignBoard from "./pages/SignBoard";
import RegisterSignboard from "./pages/RegisterSignboard";
import Privacy from "./pages/Privacy";
import Company from "./pages/Company";
import Application from "./pages/Application";
import ContactUs from "./pages/ContactUs";
import CatDetail from "./pages/CatDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Top/>}/>
          <Route path="ranking" element={<MonthRanking/>} />
          <Route path="concept_intro" element={<ConceptIntro/>} />
          <Route path="register" element={<Register/>} />
          <Route path="feature" element={<Feature/>} />
          <Route path="feature/detail" element={<FeatureDetail/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/signboard" element={<SignBoard/>} />
          <Route path="/signboard/register" element={<RegisterSignboard/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/application" element={<Application/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/cat/detail/:id" element={<CatDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
