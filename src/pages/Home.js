import "../css/Home.css";
import React, { useEffect, useState } from 'react';
import myPic from "../images/am.png";
import Resume from "../Resume Pdf/NawazDanishResume.pdf";
import { SyncLoader } from "react-spinners";

const Home = () => {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
    {
      loading ?
      <div id="loader">
        <h4 className="text-warning">Happy <span className="text-success">Dassehra</span></h4>
        <br />
        <SyncLoader color={"green"} loading={loading} size={10} />
      </div>
      :
      <div className="container text-center mt-md-5 mt-sm-5 mt-3 mb-md-5 mb-sm-5 mb-3">
          <div className="row">
            <div className="col-md-6">
              <img loading="lazy" id='profileImg' src={myPic} alt="myPic" />
            </div>
            <div style={{textAlign: "justify"}} className="col-md-6 mt-md-5 mt-sm-5">
              <h1 className="mt-md-5 mt-sm-5">Hi! I'm <span id='name'>Nawaz Danish</span></h1>
              <h5 className="mt-md-2 mt-sm-2">React Developer || Frontend Web Developer</h5>
              <p className="mt-md-2 mt-sm-2">I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive user interface components by deploying react concepts and writing code via Javascript and React.js workflows. Monitoring and maintaining frontend performance.</p>
            </div>
          </div>

          <div class="row mt-md-5 mt-5">
            <div className="col-md-6 mb-3">
              <a href="https://github.com/nawazdanish1996" target="blank"><i class="fa-brands fa-square-github"></i></a>
              <a href="https://www.linkedin.com/in/nawazdanish/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com/nawazdanish_Dev" target="blank"><i class="fa-brands fa-square-twitter"></i></a>
              <a href="https://www.instagram.com/nawazdanish1996/" target="blank"><i class="fa-brands fa-square-instagram"></i></a>
              <a href="https://www.facebook.com/nawazdanish19" target="blank"><i class="fa-brands fa-square-facebook"></i></a>
            </div>
            <div className="col-md-6 mb-2">
              <a id="resume" href={Resume} target="blank">Download Resume<i class="fa-solid fa-download"></i></a>
            </div>
          </div>
      </div>
    }
    </div>
  )
}

export default Home