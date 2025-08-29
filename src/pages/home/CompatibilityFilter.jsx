import "./CompatibilityFilter.css";
import { calculatePriceWatts } from "../../utils/calculatePriceWatts";

export function CompatibilityFilter({ selectedParts }) {
  const { recommendedWattage } = calculatePriceWatts(selectedParts);

  const cpu = selectedParts["CPU"];
  const cooler = selectedParts["CPU Cooler"];
  const mb = selectedParts["Motherboard"];
  const pcCase = selectedParts["Case"];
  const gpu = selectedParts["Graphics Card"];
  const psu = selectedParts["Power Supply"];

  // collecting warnings
  const warnings = [];

  // error if amd cpu with intel motherboard and vice versa
  if (cpu && mb && cpu.socket !== mb.socket) {
    warnings.push(
      `CPU socket (${cpu.socket}) does not match Motherboard socket (${mb.socket}). Please choose an (${cpu.socket}) compatible board.`
    );
  }

  // error if air cooler height is larger than case's max cooler height
  if (
    cooler &&
    pcCase &&
    cooler.liquid === false &&
    cooler.size &&
    cooler.size > pcCase.maxcoolerheight
  ) {
    warnings.push(
      `(${cooler.name}) is ${cooler.size}mm tall which is too big for (${pcCase.name}) which has a max cooler height of ${pcCase.maxcoolerheight}mm. Please choose something that is ${pcCase.maxcoolerheight}mm or smaller.`
    );
  }

  // error if liquid cooler radiator size is larger than case's max supported radiator size
  if (
    cooler &&
    pcCase &&
    cooler.liquid === true &&
    pcCase.aio === true &&
    cooler.size &&
    cooler.size > pcCase.maxaiosize
  ) {
    warnings.push(
      `(${cooler.name}) is ${cooler.size}mm long and too big for (${pcCase.name}) which has a max radiator size of ${pcCase.maxaiosize}mm. Please choose a cooler that is ${pcCase.maxaiosize}mm or smaller.`
    );
  }

  // error if liquid cooler is fitted to a case that does not support liquid cooling
  if (cooler && pcCase && cooler.liquid === true && pcCase.aio === false) {
    warnings.push(
      `(${pcCase.name}) does not support liquid coolers. Please choose an air cooler smaller than the supported ${pcCase.maxcoolerheight}mm height.`
    );
  }

  // error if motherboard does not fit the case's supported formats
  if (mb && pcCase) {
    const fitRules = {
      ITX: ["ITX"],
      MATX: ["MATX", "ITX"],
      ATX: ["ATX", "MATX", "ITX"],
    };

    if (!fitRules[pcCase.size].includes(mb.size)) {
      warnings.push(
        `(${mb.name}) does not fit inside (${pcCase.name}). Please choose either a larger case or a supported motherboard size or smaller (ATX > MATX > ITX).`
      );
    }
  }

  // error if graphics card length is not supported by case
  if (pcCase && gpu && gpu.length > pcCase.gpu) {
    warnings.push(
      `(${gpu.name}) is ${gpu.length}mm long and too big for (${pcCase.name}) which has a max GPU length of ${pcCase.gpu}mm. Please choose either a larger case or a GPU smaller than ${pcCase.gpu}mm.`
    );
  }

  // error if power supply is atx but case only supports sfx
  if (psu && pcCase && pcCase.psu) {
    const fitRules = {
      SFX: ["SFX"],
      ATX: ["ATX", "SFX"],
    };

    if (!fitRules[pcCase.psu].includes(psu.size)) {
      warnings.push(
        `(${psu.name}) is (${psu.size}) which is not supported by (${pcCase.name}). Please choose an (${pcCase.psu}) power supply.`
      );
    }
  }

  // error if power supply is too low wattage for the system
  // before this, calculate recommended wattage.
  if (psu && recommendedWattage && psu.wattage < recommendedWattage) {
    warnings.push(
      `(${psu.name}) is not recommended to power the system safely. Please choose the nearest 50 or 100 Watt power supply from the recommended ${recommendedWattage} Watts.`
    );
  }

  // return all potential errors, otherwise print a good message
  return (
    <>
      <div
        className={`compatibility-filter ${
          warnings.length > 0 ? "error" : "success"
        }`}
      >
        <ul>
          {warnings.length > 0 ? (
            warnings.map((message, index) => (
              <li className="compatibility-message" key={index}>
                {message}
              </li>
            ))
          ) : (
            <li className="compatibility-message">
              No incompatabilities found!
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
