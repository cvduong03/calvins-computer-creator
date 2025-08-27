import { components } from "./src/componentsData";
import React from "react";

export function loadAddedPart(type, selectedParts, onDelete) {
  const part = selectedParts[type]; // dynamically get part by type
  const typeLower = type.toLowerCase(); // for URLs and labels
  const preppedLink = typeLower.replace(/\s+/g, "-"); // replace all spaces with a hyphen

  return (
    <>
      <tr className="tr-product">
        <td className="td-component">
          <a className="component-name" href={`/products/${preppedLink}`}>
            {type}
          </a>
        </td>

        <td className="td-selection">
          {/* if cpu was selected, display its name, otherwise button */}
          {part ? (
            <span>
              <img className="td-product-image" src={part.image} />
              {part.name}
            </span>
          ) : (
            <a className="choose-button" href={`/products/${preppedLink}`}>
              + Choose a {type}
            </a>
          )}
        </td>

        <td className="td-price">{part ? `$${part.price}` : ""}</td>

        <td className="td-store">{part ? part.site : ""}</td>

        <td className="td-buy">
          {part ? <button className="buy-button">Buy</button> : ""}
        </td>

        <td className="td-remove">
          {part && (
            <button className="remove-button" onClick={() => onDelete(type)}>
              Remove
            </button>
          )}
        </td>
      </tr>
    </>
  );
}
