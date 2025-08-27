import "./PsuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../../useAddPart";

export function PsuPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Power Supply");

  return (
    <>
      <title>Choose your Power Supply - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Power Supply</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-wattage">Wattage</th>
              <th className="th-rating">Rating</th>
              <th className="th-modular">Modular</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Power Supply")
              .map((psu, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {psu.image && (
                      <img className="td-product-image" src={psu.image} />
                    )}
                    <span className="psu-name-text">{psu.name}</span>
                  </td>
                  <td className="td-memory">{psu.memory}</td>
                  <td className="td-length">{psu.length}</td>
                  <td className="td-power">{psu.power}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(psu.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[psu.name] || ""}>
                        Select Retailer
                      </option>
                      {psu.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(psu)}
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
