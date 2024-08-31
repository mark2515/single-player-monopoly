import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlayPage } from "./pages/PlayPage";
import { RulesPage } from "./pages/RulesPage";
import { CreditsPage } from "./pages/CreditsPage";
import { YouWinPage } from "./pages/YouWinPage";
import { GameOverPage } from "./pages/GameOverPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/play" element={<PlayPage />}/>
          <Route path="/rules" element={<RulesPage />}/>
          <Route path="/credits" element={<CreditsPage />}/>
          <Route path="/youWin" element={<YouWinPage />}/>
          <Route path="/gameOver" element={<GameOverPage />}/>
          <Route path="*" element = {<h1> PAGE NOT FOUND </h1>}/>
        </Routes>
      </Router>
  );
}

export default App;
