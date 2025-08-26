import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { PartsTable } from "./PartsTable";
import { CpuPage } from "../component/CpuPage";

export function HomePage() {
  const [selectedParts, setSelectedParts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.addedPart) {
      const part = location.state.addedPart;
      // store by component type (e.g. CPU)
      setSelectedParts((prev) => ({
        ...prev,
        [part.type]: part,
      }));
    }
  }, [location.state]);

  return (
    <>
      <title>Calvin's Computer Creator</title>
      <h1 className="title-note">Choose your parts</h1>

      <Header />

      <PartsTable selectedParts={selectedParts} />
    </>
  );
}
