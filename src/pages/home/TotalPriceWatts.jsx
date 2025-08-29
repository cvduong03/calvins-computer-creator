import "./TotalPriceWatts.css";
import { calculatePriceWatts } from "../../utils/calculatePriceWatts";

export function TotalPrice({ selectedParts }) {
  const { totalPrice, totalWattage, recommendedWattage } =
    calculatePriceWatts(selectedParts);

  return (
    <div className="total-bar">
      <div className="wattage">
        <h3 className="total-wattage">Total Wattage: {totalWattage} Watts</h3>
        <div>
          {totalWattage > 0 ? (
            <h4 className="recommended-wattage">
              Recommended: {recommendedWattage} Watts
              <span className="tooltip">
                <span className="tooltip-icon">i</span>
                <span className="tooltip-text">
                  300 Watts were added to compensate for spikes and higher power
                  draw. It is advised to round up to the nearest 50 or 100 Watt
                  power supply.
                </span>
              </span>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>

      <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
