import React from 'react'
import style from './porto.module.css';
import firstimg from '../../img/portfolio/cabin.png';
import secimg from '../../img/portfolio/cake.png';
import thirdimg from '../../img/portfolio/circus.png';
import fourthimg from '../../img/portfolio/game.png';
import fifthimg from '../../img/portfolio/safe.png';
import sixthimg from '../../img/portfolio/submarine.png';
export default function Porto() {
  return (
  
<div className="bg-white mt-5 d-flex flex-column align-items-center justify-content-center">
  <div className="text-center fs-3">
    <h1 className={style.head}>Portfolio</h1>
    <div className="d-flex align-items-center gap-3 my-3 fs-3">
      <div className={style.line}></div>
      <i className={`fa-solid fa-star ${style.star}`} aria-hidden="true"></i>
      <div className={style.line}></div>
    </div>
  </div>

  <div className="container mb-5">
    <div className="row g-4">
      <div className="col-md-4"><img src={firstimg} alt="" className="img-fluid rounded" /></div>
      <div className="col-md-4"><img src={secimg} alt="" className="img-fluid rounded" /></div>
      <div className="col-md-4"><img src={thirdimg} alt="" className="img-fluid rounded" /></div>
      <div className="col-md-4"><img src={fourthimg} alt="" className="img-fluid rounded" /></div>
      <div className="col-md-4"><img src={fifthimg} alt="" className="img-fluid rounded" /></div>
      <div className="col-md-4"><img src={sixthimg} alt="" className="img-fluid rounded" /></div>
    </div>
  </div>
</div>

   
   
  )
}
