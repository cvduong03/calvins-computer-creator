import { useState } from "react";
import "./PartsTable.css";

// PartsTable is a reusable component that renders the parts list
// It expects prop `selectedParts`, which is an object containing user's chosen parts. Example: { CPU: { name: "9800X3D", price: 199, site: "Amazon" } }

export function PartsTable({ selectedParts = {}, onDelete, onUpdate }) {
  const [editPart, setEditPart] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStore, setNewStore] = useState("");

  const openModal = (type) => {
    setEditPart(type);
    setNewPrice(selectedParts[type].price || "");
    setNewStore(selectedParts[type].site || "");
  };

  const saveChanges = () => {
    onUpdate(editPart, { price: parseFloat(newPrice), site: newStore });
    setEditPart(null);
  };

  const closeModal = () => setEditPart(null);

  return (
    <>
      <div className="table-container">
        {/* Start of parts table */}
        <table>
          {/* Table header */}
          <thead>
            <tr>
              <th className="th-component">Component</th>
              <th className="th-selection">Selection</th>
              <th className="th-price">Price</th>
              <th className="th-settings"></th>
              <th className="th-store">Store</th>
              <th className="th-buy"></th>
              <th className="th-remove"></th>
            </tr>
          </thead>

          {/* Table body (lists all components of the build) */}
          <tbody>
            {/* CPU row -  currently the only dynamic row */}
            <tr className="tr-product">
              <td className="td-component">
                <a href="/product/cpu">CPU</a>
              </td>
              <td className="td-selection">
                {/* if cpu was selected, display its name, otherwise button */}
                {selectedParts.CPU ? (
                  <span>
                    <img
                      className="td-product-image"
                      src={selectedParts.CPU.image}
                    />
                    {selectedParts.CPU.name}
                  </span>
                ) : (
                  <a className="choose-button" href="/product/cpu">
                    + Choose a CPU
                  </a>
                )}
              </td>
              <td className="td-price">
                {selectedParts.CPU ? `$${selectedParts.CPU.price}` : ""}
              </td>
              <td className="td-settings">
                {/* {selectedParts.CPU ? (
                  <img className="gear-icon" src="/images/gear-icon.png" />
                ) : (
                  ""
                )} */}

                {selectedParts.CPU && (
                  <img
                    className="gear-icon"
                    src="/images/gear-icon.png"
                    style={{ cursor: "pointer" }}
                    onClick={() => openModal("CPU")}
                  />
                )}
              </td>
              <td className="td-store">
                {selectedParts.CPU ? selectedParts.CPU.site : ""}
              </td>
              <td className="td-buy">
                {selectedParts.CPU ? (
                  <button className="buy-button">Buy</button>
                ) : (
                  ""
                )}
              </td>
              <td className="td-remove">
                {selectedParts.CPU && (
                  <button
                    className="remove-button"
                    onClick={() => onDelete("CPU")}
                  >
                    Remove
                  </button>
                )}
              </td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">CPU Cooler</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a CPU Cooler
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Motherboard</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Motherboard
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Memory</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose Memory
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Storage</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose Storage
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Graphics Card</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Graphics Card
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Power Supply</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Power Supply
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Case</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Case
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Monitor</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Monitor
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Mouse</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Mouse
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Keyboard</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Keyboard
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Headphone</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Headphone
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Popup for Gear Change */}
      {editPart && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Edit {editPart}</h2>
            <label>
              Price: $
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </label>
            <br />
            <label>
              Store:
              <select
                value={newStore}
                onChange={(e) => setNewStore(e.target.value)}
              >
                <option value="Amazon">Amazon</option>
                <option value="Newegg">Newegg</option>
                <option value="Best Buy">Best Buy</option>
                <option value="Micro Center">Micro Center</option>
              </select>
            </label>
            <br />
            <button onClick={saveChanges}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
