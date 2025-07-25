import React from 'react'
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={`mt-5 pt-5 ${style.container}`}>
  <div className="container">
    <div className="row text-center gy-4 py-5">
      <div className="col-md-4">
        <h3 className={style.head}>Location</h3>
        <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
      </div>

      <div className="col-md-4">
        <h3 className={style.head}>Around the Web</h3>
        <ul className="d-flex justify-content-center gap-3 list-unstyled mt-4">
          <li><a href="#" className={style.icon}><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#" className={style.icon}><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="#" className={style.icon}><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="#" className={style.icon}><i className="fa-solid fa-basketball"></i></a></li>
        </ul>
      </div>

      <div className={`col-md-4  ${style.thirdd}`}>
        <h3 className={style.head}>About Freelancer</h3>
        <p>Freelance is a free to use, MIT licensed <br />
          Bootstrap theme created by <a href="#">Start Bootstrap.</a></p>
      </div>
    </div>
  </div>
<div className={`py-4 text-white ${style.copy}`}>
  Copyright © Your Website 2023
</div>

</div>

  )
}
