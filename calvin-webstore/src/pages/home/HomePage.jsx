import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PartsTable } from "./PartsTable";
import { CpuPage } from "../component/CpuPage";

export function HomePage() {
  const [selectedParts, setSelectedParts] = useState([]);

  const handlePartAdded = (part) => {
    setSelectedParts((prev) => [...prev, part]);
  };

  return (
    <>
      <title>Calvin's Computer Creator</title>
      <h1 className="title-note">Choose your parts</h1>

      <Header />

      <CpuPage onPartAdded={handlePartAdded} />
      <div>
        {selectedParts.map((p, i) => (
          <p key={i}>
            {p.name} from {p.site} at ${p.price}
          </p>
        ))}
      </div>

      <PartsTable />
    </>
  );
}
