import React from "react";
import style from "./contact.module.css";
export default function Contact() {
  return (
    <div
      className={` mt-5 d-flex flex-column align-items-center justify-content-center ${style.container}`}>
      <div
        className={`d-flex flex-column align-items-center justify-content-center text-center fs-3 ${style.heading}`}>
        <h1 className={style.head}>contact Me</h1>

        <div className="d-flex align-items-center gap-3 my-3 fs-3">
          <div className={style.line}></div>
          <i
            className={`fa-solid fa-star ${style.star}`}
            aria-hidden="true"></i>
          <div className={style.line}></div>
        </div>
      </div>
      <form
        className={`d-flex flex-column align-items-center gap-3 w-100 ${style.myf}`}>
        <input type="text" required placeholder="Full name" />
        <input type="email" required placeholder="Email address" />
        <input type="tel" required placeholder="Phone number" />
        <textarea required placeholder="Message"></textarea>
        <button type="submit" className={style.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
}
