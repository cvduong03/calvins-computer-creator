import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { PartsTable } from "./PartsTable";
import { TotalPrice } from "./TotalPrice";
import { CompatibilityFilter } from "./CompatibilityFilter";

export function HomePage() {
  // State to store all selected parts of the build, initialize with empty object
  const [selectedParts, setSelectedParts] = useState({});

  // React router hook for reading info passed from navigate()
  const location = useLocation();

  useEffect(() => {
    const savedParts = localStorage.getItem("selectedParts");
    if (savedParts) {
      setSelectedParts(JSON.parse(savedParts));
    }
  }, []);

  // runs whenever location.state changes (ex: back grom CpuPage with addedPart)
  useEffect(() => {
    if (location.state?.addedPart) {
      // check if page passed a part object
      const part = location.state.addedPart;
      // store by component type (e.g. CPU)
      setSelectedParts((prev) => {
        const updated = {
          ...prev, // keep old parts
          [part.type]: part, // add/overwrite new part under its type
        };
        localStorage.setItem("selectedParts", JSON.stringify(updated));
        return updated;
      });
    }
  }, [location.state]);
  // ^ dependency ensures this runs whenever location.state changes

  const handleDelete = (type) => {
    setSelectedParts((prev) => {
      const updated = { ...prev };
      delete updated[type];
      localStorage.setItem("selectedParts", JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdate = (type, updates) => {
    setSelectedParts((prev) => {
      const updated = {
        ...prev,
        [type]: { ...prev[type], ...updates },
      };
      localStorage.setItem("selectedParts", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      <title>Calvin's Computer Creator</title>
      <h1 className="title-note">Choose your parts</h1>

      <Header />

      <PartsTable
        selectedParts={selectedParts}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />

      <TotalPrice selectedParts={selectedParts} />

      <CompatibilityFilter selectedParts={selectedParts} />
    </>
  );
}
