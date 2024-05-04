import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="w-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Free Games
                </Link>
                <ul className="dropdown-menu main_bg">
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/mmorpg`}
                    >
                      MMORPG
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/shooter`}
                    >
                      Shooter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/moba`}
                    >
                      MOBA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/anime`}
                    >
                      Anime
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/strategy`}
                    >
                      Strategy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/fantasy`}
                    >
                      Fantasy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/sci-fi`}
                    >
                      Sci-Fi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/cardgames`}
                    >
                      Card Games
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/racing`}
                    >
                      Racing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/fighting`}
                    >
                      Fighting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/social`}
                    >
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/games/sports`}
                    >
                      Sports
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browser Games
                </Link>
                <ul className="dropdown-menu main_bg">
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/mmorpg`}
                    >
                      Browser MMORPG
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/shooter`}
                    >
                      Browser Shooter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/moba`}
                    >
                      Browser MOBA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/anime`}
                    >
                      Browser Anime
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/strategy`}
                    >
                      Browser Strategy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/fantasy`}
                    >
                      Browser Fantasy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/sci-fi`}
                    >
                      Browser Sci-Fi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/cardgames`}
                    >
                      Browser Card Games
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/racing`}
                    >
                      Browser Racing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/fighting`}
                    >
                      Browser Fighting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/social`}
                    >
                      Browser Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-white"
                      to={`/browser/sports`}
                    >
                      Browser Sports
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
