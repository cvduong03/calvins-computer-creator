import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-header">
          {/* <a href="" className="link">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </a>
          <a href="" className="link">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </a>
          <a href="" className="link">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </a> */}
          <Link to="/">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </Link>
          <Link to="/">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </Link>
          <Link to="/">
            <img
              className="c-logo"
              src="/calvins-computer-creator/images/c-logo.png"
            />
          </Link>
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
