import React from 'react';
import heroimg from '../../img/avataaars.svg';
import styles from './hero.module.css';

export default function HeroSec() {
  return (
    <section className={`d-flex flex-column justify-content-center align-items-center text-white py-51 ${styles.section}`}>
      <img src={heroimg} alt="Avatar" className={`mb-3 ${styles.image}`}  />

      <h1 className="text-uppercase fw-bold text-center display-3">Start Bootstrap</h1>

      <div className="d-flex align-items-center gap-3 my-3 fs-3">
        <div className={styles.line}></div>
        <i className="fa-solid fa-star" aria-hidden="true"></i>
        <div className={styles.line}></div>
      </div>

      <p className="fs-5 text-center">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}
