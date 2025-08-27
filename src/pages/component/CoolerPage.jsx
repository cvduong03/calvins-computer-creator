import "./CoolerPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../../useAddPart";

export function CoolerPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("cooler");

  return (
    <>
      <title>Choose your CPU Cooler - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your CPU Cooler</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-subtype">Subtype</th>
              <th className="th-size">Size</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "CPU Cooler")
              .map((cooler, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {cooler.image && (
                      <img className="td-product-image" src={cooler.image} />
                    )}
                    <span className="cooler-name-text">{cooler.name}</span>
                  </td>
                  <td className="td-subtype">{cooler.subtype}</td>
                  <td className="td-size">{cooler.size}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(cooler.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[cooler.name] || ""}>
                        Select Retailer
                      </option>
                      {cooler.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(cooler)}
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
