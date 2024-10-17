import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="top-row">
      <Link to="/">
        <h1>Tuomas Kohvakka - React + Drupal Portfolio</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
