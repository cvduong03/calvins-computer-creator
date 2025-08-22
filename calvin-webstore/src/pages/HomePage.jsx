import "./header.css";

export function HomePage() {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <a href="" className="link">
            <img className="c-logo" src="/images/c-logo.png" />
          </a>
        </div>

        <div className="middle-header">
          <a href="" className="link">
            <span className="phones-link">Phones</span>
          </a>
          <a href="" className="link">
            <span className="computers-link">Computers</span>
          </a>
          <a href="" className="link">
            <span className="displays-link">Displays</span>
          </a>
          <a href="" className="link">
            <span className="audio-link">Audio</span>
          </a>
          <a href="" className="link">
            <img className="search-icon" src="/images/search-icon.png" />
          </a>
        </div>

        <div className="right-header">
          <a href="">
            <img
              className="checkout-icon"
              src="images/checkout-icon.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
