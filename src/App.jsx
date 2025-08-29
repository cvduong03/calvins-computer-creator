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
      <Route index element={<HomePage />} />
      <Route
        path="/calvins-computer-creator/products/cpu"
        element={<CpuPage />}
      />
      <Route
        path="/calvins-computer-creator/products/cpu-cooler"
        element={<CoolerPage />}
      />
      <Route
        path="/calvins-computer-creator/products/motherboard"
        element={<MotherboardPage />}
      />
      <Route
        path="/calvins-computer-creator/products/memory"
        element={<MemoryPage />}
      />
      <Route
        path="/calvins-computer-creator/products/storage"
        element={<StoragePage />}
      />
      <Route
        path="/calvins-computer-creator/products/graphics-card"
        element={<GpuPage />}
      />
      <Route
        path="/calvins-computer-creator/products/power-supply"
        element={<PsuPage />}
      />
      <Route
        path="/calvins-computer-creator/products/case"
        element={<CasePage />}
      />
    </Routes>
  );
}

export default App;
