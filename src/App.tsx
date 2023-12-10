import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import MonthRanking from "./pages/MonthRanking";
import ConceptIntro from "./pages/ConceptIntro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Top/>}/>
          <Route path="ranking" element={<MonthRanking/>} />
          <Route path="concept_intro" element={<ConceptIntro/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
