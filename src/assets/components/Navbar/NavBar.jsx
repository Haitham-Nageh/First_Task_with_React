import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg p-4 text-uppercase ${styles.nav}`}>
  <Link className="navbar-brand text-white fw-bold fs-3" to={"/"}>Start Bootstrap</Link>
  <ul className="navbar-nav ms-auto d-flex flex-row">
    <li className="nav-item me-4">
      <Link className={`nav-link text-white fw-bold fs-6 ${styles.navLink}`} to={'/portfolio'}>Portfolio</Link>
    </li>
    <li className="nav-item me-4">
      <Link className={`nav-link text-white fw-bold fs-6 ${styles.navLink}`} to={"/about"}>About</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link text-white fw-bold fs-6 ${styles.navLink}`} to={"/contact"}>Contact</Link>
    </li>
  </ul>
</nav>

  );
}
