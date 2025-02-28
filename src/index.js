import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import Register from "./page/Register";
import Contest1 from "./page/contest1";
import About from "./page/About"; // Import About Page
import Nav from "./page/Nav";
import Event from "./page/Event";
import Contact from "./page/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Nav menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} /> 
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} /> {/* Add About Page */}
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event/>}/>
        <Route path="/contest" element={<Contest1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
