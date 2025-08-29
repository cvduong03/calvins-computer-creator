import "./MotherboardPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../utils/useAddPart";

export function MotherboardPage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Motherboard");

  return (
    <>
      <title>Choose a Motherboard - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Motherboard</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-socket">Socket</th>
              <th className="th-size">Size</th>
              <th className="th-wifi">Wi-Fi</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Motherboard")
              .map((mb, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {mb.image && (
                      <img className="td-product-image" src={mb.image} />
                    )}
                    <span className="mb-name-text">{mb.name}</span>
                  </td>
                  <td className="td-socket">{mb.socket}</td>
                  <td className="td-size">{mb.size}</td>
                  <td className="td-wifi">{mb.wifi}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(mb.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[mb.name] || ""}>
                        Select Retailer
                      </option>
                      {mb.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(mb)}
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
