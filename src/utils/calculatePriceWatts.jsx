export function calculatePriceWatts(selectedParts) {
  const totalPrice = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.price || 0),
    0
  );

  const totalWattage = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part.power || 0),
    0
  );

  const recommendedWattage = totalWattage > 0 ? totalWattage + 300 : 0;

  return { totalPrice, totalWattage, recommendedWattage };
}
