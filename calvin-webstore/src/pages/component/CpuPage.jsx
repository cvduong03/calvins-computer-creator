import "./CpuPage.css";
import { components } from "../../componentsData";
import { Header } from "../../components/Header";

export function CpuPage() {


  // const retailerName = seletedRetailers[cpu.name];

  return (
    <>
      <title>Choose a CPU - Calvin's Computer Creator</title>

      <Header />

      <h1>Choose your CPU</h1>

      <div className="table-container">
        {/* Start of parts table */}
        <table>
          {/* Table header */}
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-core-count">Core Count</th>
              <th className="th-core-clock">Core Clock</th>
              <th className="th-architecture">Architecture</th>
              <th className="th-tdp">TDP</th>
              <th className="th-graphics">Integrated Graphics</th>
              <th className="th-retailer"></th>
              <th className="th-add"></th>
            </tr>
          </thead>

          <tbody>
            {components
              .filter((part) => part.type === "CPU")
              .map((cpu, index) => (
                <tr key={index} className="tr-product">
                  <td className="td-name">
                    {cpu.image && (
                      <img className="td-product-image" src={`${cpu.image}`} />
                    )}
                    {cpu.name}
                  </td>
                  <td className="td-core-count">{cpu.cores}</td>
                  <td className="td-core-clock">{cpu.clock}</td>
                  <td className="td-architecture">{cpu.architecture}</td>
                  <td className="td-tdp">{cpu.tdp}</td>
                  <td className="td-graphics">{cpu.graphics}</td>
                  {/* <td className="td-retailer">

                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
