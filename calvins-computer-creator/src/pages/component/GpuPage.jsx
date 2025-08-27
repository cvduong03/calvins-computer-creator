import "./GpuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../../useAddPart";

export function GpuPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Graphics Card");

  return (
    <>
      <title>Choose your Graphics Card - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Graphics Card</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-memory">Memory</th>
              <th className="th-length">Length</th>
              <th className="th-power">Power</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Graphics Card")
              .map((gpu, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {gpu.image && (
                      <img className="td-product-image" src={gpu.image} />
                    )}
                    <span className="gpu-name-text">{gpu.name}</span>
                  </td>
                  <td className="td-memory">{gpu.memory}</td>
                  <td className="td-length">{gpu.length}</td>
                  <td className="td-power">{gpu.power}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(gpu.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[gpu.name] || ""}>
                        Select Retailer
                      </option>
                      {gpu.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(gpu)}
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
