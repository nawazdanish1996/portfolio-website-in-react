import "../css/About.css";
import React from 'react';

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <h1 className='text-center text-uppercase text-decoration-underline'>About me</h1>
          </div>
          <div className="col-md-12 mt-3">
            <h3 className='text-center text-uppercase'>Information about me</h3>
            <p>&nbsp; &nbsp; &nbsp; I am Nawaz Danish from West Bengal district of North Dinajpur, I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive user interface components by deploying react concepts and writing code via JavaScript and React.js workflows. Monitoring and maintaining frontend performance.
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; I always want to learn how to code and how to build a website how thins works behind the scenes. Then i join the newton school to begain my journy as a developer. As such my personal profile, I am a hard working and sincere person and always preferred with technical from different new enter Software.
            </p>
          </div>
          <div className="col-md-4 p-3 mt-md-2 mb-md-4">
            <div id='box' className="pt-4 pb-5 mt-4">
              <h3>3</h3>
              <h5>Project Completed</h5>
            </div>
          </div>
          <div className="col-md-4 p-3 mt-md-2 mb-md-4">
            <div id='box' className="pt-4 pb-5 mt-4">
              <h3>Fresher</h3>
              <h5>No Experience</h5>
            </div>
          </div>
          <div className="col-md-4 p-3 mt-md-2 mb-md-4">
            <div id='box' className="pt-4 pb-5 mt-4">
              <h3>0</h3>
              <h5>Clients</h5>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <h2 className=" text-uppercase text-center text-decoration-underline ">My <span className="text-success text-decoration-underline ">Skills</span></h2>
          </div>

          <div className="col-md-12 mb-3 text-center text-white">
            <button className="btn btn-primary text-white m-2">HTML5</button>
            <button className="btn btn-primary text-white m-2">CSS3 with SASS</button>
            <button className="btn btn-primary text-white m-2">JAVASCRIPT</button>
            <button className="btn btn-primary text-white m-2">REACT</button>
            <button className="btn btn-primary text-white m-2">REDUX</button>
            <button className="btn btn-primary text-white m-2">BOOTSTRAP</button>
            <button className="btn btn-primary text-white m-2">TYPESCRIPT</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;