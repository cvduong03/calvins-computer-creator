import { HomePage } from "./pages/home/HomePage";
import { CpuPage } from "./pages/component/CpuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotherboardPage } from "./pages/component/MotherboardPage";
import { CoolerPage } from "./pages/component/CoolerPage";
import { MemoryPage } from "./pages/component/MemoryPage";
import { StoragePage } from "./pages/component/StoragePage";
import { GpuPage } from "./pages/component/GpuPage";
import { PsuPage } from "./pages/component/PsuPage";
import { CasePage } from "./pages/component/CasePage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/calvins-computer-creator" element={<HomePage />} />
      <Route path="/products/cpu" element={<CpuPage />} />
      <Route path="/products/cpu-cooler" element={<CoolerPage />} />
      <Route path="/products/motherboard" element={<MotherboardPage />} />
      <Route path="/products/memory" element={<MemoryPage />} />
      <Route path="/products/storage" element={<StoragePage />} />
      <Route path="/products/graphics-card" element={<GpuPage />} />
      <Route path="/products/power-supply" element={<PsuPage />} />
      <Route path="/products/case" element={<CasePage />} />
    </Routes>
  );
}

export default App;
