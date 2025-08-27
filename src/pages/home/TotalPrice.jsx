import "./TotalPrice.css";

export function TotalPrice({ selectedParts }) {
  const total = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.price || 0),
    0
  );

  return (
    <div className="total-price">
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
