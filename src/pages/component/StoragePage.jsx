import "./StoragePage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";
import { useAddPart } from "../../utils/useAddPart";

export function StoragePage() {
  const { selectedRetailers, handleSelectChange, handleAddClick } =
    useAddPart("Storage");

  return (
    <>
      <title>Choose your Storage - Calvin's Computer Creator</title>
      <Header />
      <h1>Choose your Storage</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-storageType">Storage Type</th>
              <th className="th-size">Size</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "Storage")
              .map((storage, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {storage.image && (
                      <img className="td-product-image" src={storage.image} />
                    )}
                    <span className="Storage-name-text">{storage.name}</span>
                  </td>
                  <td className="td-storage-type">{storage.size}</td>
                  <td className="td-size">{storage.speed}</td>
                  <td className="td-retailer">
                    <select
                      className="select-retailer"
                      onChange={(e) =>
                        handleSelectChange(storage.name, e.target.value)
                      }
                    >
                      <option value={selectedRetailers[Storage.name] || ""}>
                        Select Retailer
                      </option>
                      {storage.retailers.map((retailer) => (
                        <option key={retailer.site} value={retailer.site}>
                          {retailer.site} - ${retailer.priceCents / 100}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="add-button"
                      onClick={() => handleAddClick(storage)}
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
