import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Home from "./components/Home";
import Sales from "./components/Sales";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Headers/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footers/>
    </>
  );
}

export default App;