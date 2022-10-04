import "../css/Page404.css";
import React from 'react';
import {NavLink} from "react-router-dom";

function Page404() {
  return (
    <div className='container'>
      <div className="row text-center mt-5 mb-5">
        <div className="col-md-12 mt-5">
          <i class="fa-solid fa-face-grin-squint-tears"></i>
        </div>
        <div className="col-md-12 mt-3">
          <h1 className="text-seconday p404">404</h1>
          <h5 className="text-seconday mb-3">Oops, This Page Not Found!</h5>
          <p className="text-muted">This link might be corrupted </p>
          <p>or the page may have been removed</p>
        </div>
        <div className="col-md-12 mt-5 mb-5">
            <NavLink id="errortags" to="/" end>Go to home page</NavLink>
        </div>
        <div className="col-md-12 mb-5"></div>
      </div>
    </div>
  )
}

export default Page404;