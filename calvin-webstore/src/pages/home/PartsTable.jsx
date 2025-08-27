import { useState } from "react";
import { components } from "../../componentsData.js";
import { loadAddedPart } from "../../../loadAddedPart.jsx";
import "./PartsTable.css";

// PartsTable is a reusable component that renders the parts list
// It expects prop `selectedParts`, which is an object containing user's chosen parts. Example: { CPU: { name: "9800X3D", price: 199, site: "Amazon" } }

export function PartsTable({ selectedParts = {}, onDelete, onUpdate }) {
  const [editPart, setEditPart] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStore, setNewStore] = useState("");

  // Modal popup in PartsTable
  const openModal = (type) => {
    setEditPart(type);
    setNewPrice(selectedParts[type].price || "");
    setNewStore(selectedParts[type].site || "");
  };

  // empty modal to close
  const closeModal = () => setEditPart(null);

  const handleStoreChange = (store) => {
    setNewStore(store);

    const partData = components.find(
      (c) => c.type === editPart && c.name === selectedParts[editPart].name
    );

    if (partData) {
      const retailer = partData.retailers.find((r) => r.site === store);
      if (retailer) {
        setNewPrice((retailer.priceCents / 100).toFixed(2));
      }
    }
  };

  const saveChanges = () => {
    onUpdate(editPart, { price: parseFloat(newPrice), site: newStore });
    setEditPart(null);
  };

  // get retailers dynamically for the part being edited
  const getRetailersForPart = () => {
    if (!editPart) return [];
    const partData = components.find(
      (c) => c.type === editPart && c.name === selectedParts[editPart].name
    );
    return partData ? partData.retailers : [];
  };

  const partTypes = [
    "CPU",
    "CPU Cooler",
    "Motherboard",
    "Memory",
    "Storage",
    "Graphics Card",
    "Power Supply",
    "Case",
  ];

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

          <tbody>
            {partTypes.map((type) =>
              loadAddedPart(type, selectedParts, openModal, onDelete)
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Popup for Gear Change */}
      {editPart && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Edit {editPart}</h2>

            <label>
              Store:
              <select
                className="store-select"
                value={newStore}
                onChange={(e) => handleStoreChange(e.target.value)}
              >
                {getRetailersForPart().map((r) => (
                  <option key={r.site} value={r.site}>
                    {r.site}
                  </option>
                ))}
              </select>
            </label>
            <br />

            <label>
              Price:
              <input
                className="price-input"
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </label>
            <br />

            <button className="save-button" onClick={saveChanges}>
              Save
            </button>
            <button className="cancel-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
