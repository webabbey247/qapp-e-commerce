import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Components
import Dashboard from "./pages/Dashboard";
//Import General styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
