import react from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/meghanadashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
