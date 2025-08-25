import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <a href="" className="link">
            <img className="c-logo" src="/images/c-logo.png" />
          </a>
          <a href="" className="link">
            <img className="c-logo" src="/images/c-logo.png" />
          </a>
          <a href="" className="link">
            <img className="c-logo" src="/images/c-logo.png" />
          </a>
        </div>

        <div className="middle-header">
          <a href="" className="link">
            <span className="phones-link">Build</span>
          </a>
          <a href="" className="link">
            <span className="computers-link">Parts</span>
          </a>
          <a href="" className="link">
            <span className="displays-link">Guides</span>
          </a>
          <a href="" className="link">
            <span className="audio-link">Showcase</span>
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

      <h1 className="title-note">Choose your parts</h1>
    </>
  );
}
