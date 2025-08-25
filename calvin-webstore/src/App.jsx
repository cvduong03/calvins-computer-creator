import { HomePage } from "./pages/home/HomePage";
import { CpuPage } from "./pages/component/CpuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/cpu" element={<CpuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
