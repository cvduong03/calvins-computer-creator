import "./TotalPriceWatts.css";

export function TotalPrice({ selectedParts }) {
  const totalPrice = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.price || 0),
    0
  );

  const totalWattage = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.power || 0),
    0
  );

  return (
    <div className="total-bar">
      <div className="wattage">
        <h3 className="total-wattage">Total Wattage: {totalWattage} Watts</h3>
        <h4 className="recommended-wattage">
          Recommended: {totalWattage + 300} Watts
          <span className="tooltip">
            <span className="tooltip-icon">i</span>
            <span className="tooltip-text">
              300 Watts were added to compensate for spikes and higher power
              draw. It is advised to round up to the nearest 50 or 100 Watt
              power supply.
            </span>
          </span>
        </h4>
      </div>

      <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
