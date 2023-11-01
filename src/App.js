import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Play } from "./pages/play";
import { Achievements } from "./pages/achievement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<Play />}/>
          <Route path="/achievements" element={<Achievements />}/>
          <Route path="*" element = {<h1> PAGE NOT FOUND </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
