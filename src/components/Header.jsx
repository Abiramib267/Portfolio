import { Link } from "react-router-dom";
import "../App.css"; 

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Abirami B</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Project">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
