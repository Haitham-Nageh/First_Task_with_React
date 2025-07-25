import React from 'react'
import style from './about.module.css';
export default function About() {
  return (
    <div className={` mt-5 d-flex flex-column align-items-center justify-content-center ${style.container}`}>
      <div className={`text-center fs-3 ${style.heading}`}>
        <h1 className={style.head}>About</h1>
        <div className="d-flex align-items-center gap-3 my-3 fs-3">
         <div className={style.line}></div>
          <i className={`fa-solid fa-star ${style.star}`} aria-hidden="true"></i>
          <div className={style.line}></div>
        </div>
    
      </div>
<div className={style.text}>
           <p className={style.myp}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
       <p className={style.myp}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
</div>
<a className={style.mya} href='#'>
    <i className="fa-solid fa-download"></i>
   <span> Free Download!</span>
</a>
      </div>
  )
}
