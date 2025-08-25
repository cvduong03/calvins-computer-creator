import "./PartsTable.css";

export function PartsTable() {
  return (
    <>
      <div className="table-container">
        {/* Start of parts table */}
        <table>
          {/* Table header */}
          <thead>
            <tr>
              <th className="th-component">Component</th>
              <th className="th-selection">Selection</th>
              <th className="th-price">Price</th>
              <th className="th-settings"></th>
              <th className="th-store">Store</th>
              <th className="th-where">Where</th>
              <th className="th-buy"></th>
              <th className="th-remove"></th>
            </tr>
          </thead>

          {/* Table body (selection and details) */}
          <tbody>
            <tr className="tr-product">
              <td className="td-component">
                <a href="">CPU</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a CPU
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">CPU Cooler</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a CPU Cooler
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Motherboard</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Motherboard
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Memory</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose Memory
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Storage</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose Storage
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Graphics Card</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Graphics Card
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Power Supply</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Power Supply
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Case</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Case
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Monitor</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Monitor
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Mouse</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Mouse
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Keyboard</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Keyboard
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>

            <tr className="tr-product">
              <td className="td-component">
                <a href="">Headphone</a>
              </td>
              <td className="td-selection">
                <a className="choose-button" href="">
                  + Choose a Headphone
                </a>
              </td>
              <td className="td-price"></td>
              <td className="td-settings"></td>
              <td className="td-store"></td>
              <td className="td-where"></td>
              <td className="td-buy"></td>
              <td className="td-remove"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
