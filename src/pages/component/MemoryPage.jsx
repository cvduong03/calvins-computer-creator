import "./MemoryPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../../useAddPart";

export function MemoryPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Memory");

  return (
    <>
      <title>Choose your Memory - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Memory</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-size">Size</th>
              <th className="th-speed">Speed</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Memory")
              .map((memory, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {memory.image && (
                      <img className="td-product-image" src={memory.image} />
                    )}
                    <span className="memory-name-text">{memory.name}</span>
                  </td>
                  <td className="td-size">{memory.size}</td>
                  <td className="td-speed">{memory.speed}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(memory.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[memory.name] || ""}>
                        Select Retailer
                      </option>
                      {memory.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(memory)}
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
