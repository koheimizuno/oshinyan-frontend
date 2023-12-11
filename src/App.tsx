import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import ConceptIntro from "./pages/ConceptIntro";
import Register from "./pages/Register";
import Feature from "./pages/Feature";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
