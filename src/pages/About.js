import "../css/About.css";
import React from 'react';

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-3">
            <h1 className='text-center text-uppercase'>About <span id='me'>me</span></h1>
          </div>
          <div className="col-md-12 mt-3">
            <h3 className='text-center text-uppercase'>Information about me</h3>
            <p>I am Nawaz Danish from West Bengal district of North Dinajpur, I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive user interface components by deploying react concepts and writing code via JavaScript and React.js workflows. Monitoring and maintaining frontend performance.</p>
            <p>I always want to learn how to code and how to build a website how thins works behind the scenes. Then i join the newton school to begain my journy as a developer. As such my personal profile, I am a hard working and sincere person and always preferred with technical from different new enter Software.</p>
          </div>
          <div className="col-md-4 mt-md-5 mb-md-4">
            <div id='box' className="pt-5 pb-5">
              <h3>3</h3>
              <h5>Project Completed</h5>
            </div>
          </div>
          <div className="col-md-4 mt-md-5 mb-md-4">
            <div id='box' className="pt-5 pb-5">
              <h3>Fresher</h3>
              <h5>No Experience</h5>
            </div>
          </div>
          <div className="col-md-4 mt-md-5 mb-md-4">
            <div id='box' className="pt-5 pb-5">
              <h3>0</h3>
              <h5>Clients</h5>
            </div>
          </div>
          <div className="col-md-12">
            <h1>My Skills</h1>
          </div>
          <div className="col-md-6">1</div>
          <div className="col-md-6">2</div>
        </div>
      </div>
    </div>
  )
}

export default About;