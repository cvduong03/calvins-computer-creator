import "./CpuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CpuPage() {
  // store prior and updated cpu retailer as useable states
  const [selectedRetailers, setSelectedRetailers] = useState({});
  const navigate = useNavigate();

  // update selectedRetailer when user picks from dropdown
  const handleSelectChange = (cpuName, retailer) => {
    setSelectedRetailers((prev) => ({
      ...prev,
      [cpuName]: retailer,
    }));
  };

  // save retailer object on click
  const handleAddClick = (cpu) => {
    const retailerSite = selectedRetailers[cpu.name];
    if (!retailerSite) return; // if no selection

    const retailer = cpu.retailers.find(
      (retailers) => retailers.site === retailerSite
    );

    const selectedPart = {
      type: "CPU",
      name: cpu.name,
      site: retailer.site,
      price: retailer.priceCents / 100,
    };

    navigate("/", { state: { addedPart: selectedPart } });
  };

  return (
    <>
      <title>Choose a CPU - Calvin's Computer Creator</title>

      <Header />

      <h1>Choose your CPU</h1>

      <div className="table-container">
        {/* Start of parts table */}
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
                      <option value="">Select Retailer</option>
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
