import { useState } from "react";
import { components } from "../../componentsData.js";
import { loadAddedPart } from "../../../loadAddedPart.jsx";
import "./PartsTable.css";

// PartsTable is a reusable component that renders the parts list
// It expects prop `selectedParts`, which is an object containing user's chosen parts. Example: { CPU: { name: "9800X3D", price: 199, site: "Amazon" } }

export function PartsTable({ selectedParts = {}, onDelete }) {
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
              <th className="th-store">Store</th>
              <th className="th-buy"></th>
              <th className="th-remove"></th>
            </tr>
          </thead>

          <tbody>
            {partTypes.map((type) =>
              loadAddedPart(type, selectedParts, onDelete)
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
