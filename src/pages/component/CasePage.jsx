import "./CasePage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../utils/useAddPart";

export function CasePage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Case");

  return (
    <>
      <title>Choose your Case - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Case</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-type">Type</th>
              <th className="th-height">Cooler Height</th>
              <th className="th-aio">AIO Support</th>
              <th className="th-gpu">GPU Length</th>
              <th className="th-retailer">Store</th>
              <th className="th-add">Add</th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Case")
              .map((pcCase, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {pcCase.image && (
                      <img className="td-product-image" src={pcCase.image} />
                    )}
                    <span className="pcCase-name-text">{pcCase.name}</span>
                  </td>
                  <td className="td-type">{pcCase.size}</td>
                  <td className="td-height">{pcCase.maxcoolerheight}mm</td>
                  <td className="td-aio">{pcCase.maxaiosize}mm</td>
                  <td className="th-gpu">{pcCase.gpu}mm</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(pcCase.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[pcCase.name] || ""}>
                        Select Retailer
                      </option>
                      {pcCase.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(pcCase)}
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
