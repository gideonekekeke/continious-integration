import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HeaderView from "./Components/HeaderView";
import HomeScreen from "./Components/HomeScreen";
function App() {
  return (
    <div>
      <Router>
        <HeaderView />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
