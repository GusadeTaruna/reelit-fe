function Header() {
  return (
    <div className="container nav">
      <div className="nav-grid">
        <div className="brand-logo-wrapper">
          <a
            href="/"
            aria-current="page"
            className="nav-brand w-nav-brand w--current"
          >
            <div className="nav-logo-wrapper">
              <div className="nav-logo-text">REEL IT STUDIOS</div>
            </div>
          </a>
        </div>
        <nav role="navigation" className="menu-nav w-nav-menu">
          <div className="menu-nav-link-wrapper">
            <div className="nav-link-wrapper">
              <a
                href="https://www.youtube.com/playlist?list=PLSSq8kbLExATZ5eEKz4FS7Xd1yFcQ8DfR"
                className="nav-link w-nav-link"
                target="_blank"
                rel="noreferrer"
              >
                All Works
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/" className="nav-link w-nav-link">
                About
              </a>
            </div>
            <div className="nav-link-wrapper last">
              <a
                href="https://www.instagram.com/reel.it_/"
                target="_blank"
                className="link nav w-inline-block"
                rel="noreferrer"
              >
                <div className="link-text-wrapper">
                  <div className="link-floating-text">Connect with us</div>
                </div>
                <div className="link-arrow w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.06066 1H23.5607V22.5H20.5607V6.12132L3.12132 23.5607L1 21.4393L18.4393 4H2.06066V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="hamburger-icon">
            <div className="hamburger-bar _1"></div>
            <div className="hamburger-bar _2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
