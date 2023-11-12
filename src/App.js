import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Play } from "./pages/play";
import { Rules } from "./pages/rules";
import { YouWin } from "./pages/youWin";
import { GameOver } from "./pages/gameOver";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<Play />}/>
          <Route path="/rules" element={<Rules />}/>
          <Route path="/youWin" element={<YouWin />}/>
          <Route path="/gameOver" element={<GameOver />}/>
          <Route path="*" element = {<h1> PAGE NOT FOUND </h1>}/>
        </Routes>
      </Router>
  );
}

export default App;
