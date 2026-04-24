import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../Data/app.json";
import "./Navbar.css";

export default function Navbar() {
  const [query, setQuery] = useState("");

  // filter from JSON
  const filtered = data.apps.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="navbar">
      {/* LEFT */}
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

      {/* SEARCH */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search apps, games..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* DROPDOWN */}
        {query && (
          <div className="search-box">
            {filtered.length > 0 ? (
              filtered.slice(0, 6).map((item) => (
                <div key={item.id} className="search-item">
                  
                  {/* IMAGE */}
                  <img src={item.image} alt="" />

                  {/* TEXT */}
                  <div>
                    <p>{item.name}</p>
                    <span>{item.category}</span>
                  </div>

                </div>
              ))
            ) : (
              <div className="search-item">No results found</div>
            )}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="signbtn">Sign In</button>
      </div>
    </nav>
  );
}