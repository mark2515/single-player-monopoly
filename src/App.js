import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Rule } from "./pages/rule";
import { Play } from "./pages/play";
import { Achievement } from "./pages/achievement";
import { YouWin } from "./pages/youWin";
import { GameOver } from "./pages/gameOver";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<Play />}/>
          <Route path="/rule" element={<Rule />}/>
          <Route path="/achievement" element={<Achievement />}/>
          <Route path="/youWin" element={<YouWin />}/>
          <Route path="/gameOver" element={<GameOver />}/>
          <Route path="*" element = {<h1> PAGE NOT FOUND </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
