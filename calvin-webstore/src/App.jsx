import { HomePage } from "./pages/home/HomePage";
import { CpuPage } from "./pages/component/CpuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotherboardPage } from "./pages/component/MotherboardPage";
import { CoolerPage } from "./pages/component/CoolerPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products/cpu" element={<CpuPage />} />
        <Route path="/products/cpu-cooler" element={<CoolerPage />} />
        <Route path="/products/motherboard" element={<MotherboardPage />} />
        <Route path="/products/memory" element={<CpuPage />} />
        <Route path="/products/storage" element={<CpuPage />} />
        <Route path="/products/graphics-card" element={<CpuPage />} />
        <Route path="/products/power-supply" element={<CpuPage />} />
        <Route path="/products/case" element={<CpuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
