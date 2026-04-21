import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="logo"
          className="logo"
        />
        <span className="store-text"> Microsoft Store |</span>

        <Link to="/">Home</Link>
        <Link to="/apps">Apps</Link>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>
      </div>


      <div className="nav-center">
        <input
          type="text"
          placeholder="Search apps, games, and more"/>
      </div>

      <div className="nav-right">
        <button className="signbtn">Sign In</button>
      </div>

    </nav>
  );
}