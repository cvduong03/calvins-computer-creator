import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * useAddPart manages retailer selection and adding a part to HomePage
 * @param {string} partType - "CPU", "Motherboard", etc.
 */
export function useAddPart(partType) {
  const [selectedRetailers, setSelectedRetailers] = useState({});
  const navigate = useNavigate();

  const handleSelectChange = (partName, retailer) => {
    setSelectedRetailers((prev) => ({
      ...prev,
      [partName]: retailer,
    }));
  };

  const handleAddClick = (part) => {
    const retailerSite = selectedRetailers[part.name];
    if (!retailerSite) return;

    const retailer = part.retailers.find((r) => r.site === retailerSite);
    if (!retailer) return;

    const selectedPart = {
      ...part,
      site: retailer.site,
      price: retailer.priceCents / 100,
    };

    navigate("/", { state: { addedPart: selectedPart } });
  };

  return { selectedRetailers, handleSelectChange, handleAddClick };
}
