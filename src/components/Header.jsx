import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <a href={import.meta.env.BASE_URL} className="link">
            <img
              className="c-logo"
              src={`${import.meta.env.BASE_URL}images/c-logo.png`}
            />
          </a>
          <a href={import.meta.env.BASE_URL} className="link">
            <img
              className="c-logo"
              src={`${import.meta.env.BASE_URL}images/c-logo.png`}
            />
          </a>
          <a href={import.meta.env.BASE_URL} className="link">
            <img
              className="c-logo"
              src={`${import.meta.env.BASE_URL}images/c-logo.png`}
            />
          </a>
        </div>

        <div className="middle-header">
          {/* <a href="" className="link">
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
          </a> */}
        </div>

        <div className="right-header">{/* right side */}</div>
      </div>
    </>
  );
}
