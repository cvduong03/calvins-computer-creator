import "./CompatibilityFilter.css";

export function CompatibilityFilter({ selectedParts }) {
  const cpu = selectedParts["CPU"];
  const cooler = selectedParts["CPU Cooler"];
  const mb = selectedParts["Motherboard"];
  const pcCase = selectedParts["Case"];

  console.log("CPU:", cpu);
  console.log("Cooler:", cooler);
  console.log("Motherboard:", mb);
  console.log("Case:", pcCase);

  // collecting warnings
  const warnings = [];

  // error if amd cpu with intel motherboard and vice versa
  if (cpu && mb && cpu.socket !== mb.socket) {
    warnings.push(
      `CPU socket (${cpu.socket}) does not match Motherboard socket (${mb.socket})`
    );
  }

  // error if air cooler height is larger than case's max cooler height
  if (
    cooler &&
    pcCase &&
    cooler.liquid === false &&
    cooler.size &&
    cooler.size > pcCase.maxcoolersize
  ) {
    warnings.push(
      `(${cooler.name}) is ${cooler.size}mm long and too big for (
              ${pcCase.name}) which has a max height of ${pcCase.maxcoolersize}mm.
              Choose something smaller than ${pcCase.maxcoolersize}mm`
    );
  }

  // error if liquid cooler radiator size is larger than case's max supported radiator size
  if (
    cooler &&
    pcCase &&
    cooler.liquid === true &&
    pcCase.aio === true &&
    cooler.size &&
    cooler.size > pcCase.maxcoolersize
  ) {
    warnings.push(
      `(${cooler.name}) is ${cooler.size}mm long and too big for (
              ${pcCase.name}) which has a max height of ${pcCase.maxcoolersize}mm.
              Choose something smaller than ${pcCase.maxcoolersize}mm`
    );
  }

  // error if liquid cooler is fitted to a case that does not support liquid cooling
  if (
    cooler &&
    pcCase &&
    cooler.liquid === true &&
    pcCase.aio === false &&
    cooler.size &&
    cooler.size > pcCase.maxcoolersize
  ) {
    warnings.push(`(${pcCase.name}) does not support liquid coolers`);
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
        `(${mb.name}) does not fit inside (${pcCase.name}). Please choose a suported size or smaller (ATX > MATX > ITX)`
      );
    }
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
            warnings.map((message, index) => <li key={index}>{message}</li>)
          ) : (
            <li>No incompatabilities found!</li>
          )}
        </ul>
      </div>
    </>
  );
}
