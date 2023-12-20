import "./headerBar.css";

function HeaderBar() {
  return (
    <header className="header-bar">
      <a className="condit-name" href="./public/index.html">
        conduit
      </a>
      <ul className="navBar-right">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">Sign in</a>
        </li>
        <li>
          <a href="./">Sign up</a>
        </li>
      </ul>
    </header>
  );
}

export default HeaderBar;
