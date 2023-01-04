import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:listId" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/0" />} />
      </Routes>
    </>
  );
}

export default App;
