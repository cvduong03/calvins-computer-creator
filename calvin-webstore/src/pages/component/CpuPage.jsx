import "./CpuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CpuPage() {
  // keep track of which retailer the user chose for each CPU
  // Example: { "AMD Ryzen 7 9800X3D": "Micro Center" }
  const [selectedRetailers, setSelectedRetailers] = useState({});

  // lets us redirect user back to HomePage with some data
  const navigate = useNavigate();

  // when user changes dropdown, update selectedRetailers
  const handleSelectChange = (cpuName, retailer) => {
    setSelectedRetailers((prev) => ({
      ...prev, // copy old/prior fields in select retailer
      [cpuName]: retailer, // override these that are passed through
    }));
  };

  // when user clicks add button
  const handleAddClick = (cpu) => {
    // look up the chosen retailer for the clicked CPU
    // (Tracks choices across CPUs to remember when add is clicked)
    const retailerSite = selectedRetailers[cpu.name];
    if (!retailerSite) return; // if no selection, ignore click

    // find retailer object from cpu.retailers list
    // example: retailer = { site: "Amazon", priceCents: 24999 }
    const retailer = cpu.retailers.find(
      (retailers) => retailers.site === retailerSite
    );

    // create object for HomePage to consume
    const selectedPart = {
      type: "CPU",
      name: cpu.name,
      site: retailer.site,
      price: retailer.priceCents / 100,
      image: cpu.image,
    };

    // go back to HomePage and pass new part through selectedParts
    navigate("/", { state: { addedPart: selectedPart } });
  };

  return (
    <>
      <title>Choose a CPU - Calvin's Computer Creator</title>

      <Header />

      <h1>Choose your CPU</h1>

      <div className="table-container">
        {/* Table to display CPUs */}
        <table>
          {/* Table header */}
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-core-count">Core Count</th>
              <th className="th-core-clock">Core Clock</th>
              <th className="th-architecture">Architecture</th>
              <th className="th-tdp">TDP</th>
              <th className="th-graphics">Integrated Graphics</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {/* Loop through all components and render CPUs */}
            {components
              .filter((part) => part.type === "CPU")
              .map((cpu, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {cpu.image && (
                      <img className="td-product-image" src={cpu.image} />
                    )}
                    <span className="cpu-name-text">{cpu.name}</span>
                  </td>

                  <td className="td-core-count">{cpu.cores}</td>
                  <td className="td-core-clock">{cpu.clock}</td>
                  <td className="td-architecture">{cpu.architecture}</td>
                  <td className="td-tdp">{cpu.tdp}</td>
                  <td className="td-graphics">{cpu.graphics}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(cpu.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[cpu.name] || ""}>
                        Select Retailer
                      </option>
                      {cpu.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(cpu)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
