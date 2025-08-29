import "./CpuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../utils/useAddPart";

export function CpuPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("CPU");

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
              <th className="th-socket">Socket</th>
              <th className="th-power">Power</th>
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
                  <td className="td-socket">{cpu.socket}</td>
                  <td className="td-tdp">{cpu.power}W</td>
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
