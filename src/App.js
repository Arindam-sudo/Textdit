import React from "react";
import About from "./components/about";
import Navbar from "./components/navbar";
import Text from "./components/textarea";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar title="TextDit" link1="Home" link2="About" />
      <Text />
    </div>
    /*<Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Text />} />
        </Routes>
      
    </Router>*/
  );
}

export default App;
