import "./TotalPrice.css";

export function TotalPrice({ selectedParts }) {
  const totalPrice = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.price || 0),
    0
  );

  return (
    <div className="total-price">
      <h3>Total Wattage: </h3>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
