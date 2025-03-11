import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Book from "./pages/Book/Book";
import Experience from "./pages/Experience/Experience";
import ScriptingCoaching from "./pages/ScriptingCoaching/ScriptingCoaching";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/coaching" element={<ScriptingCoaching />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
