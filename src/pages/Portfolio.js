import "../css/Portfolio.css";
import React, {useState, useEffect} from 'react';
import { GridLoader } from "react-spinners";

function Portfolio() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <div>
      {
      loading ?
      <div id="loader">
        <GridLoader color={"green"} loading={loading} size={15} />
      </div>
      :
    <div className='container'>
      <div className="row">
        <div className="col-md-12 mt-md-5 text-center">
          <h1>My <span style={{color: "black"}}>Project</span></h1>
          <h6>Here are some project i build during learning journey.</h6>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-4 text-center">
            <div className="proj pt-5 pb-5 mt-3">
              <h4 className="mt-3 text-primary">University Website</h4>
              <a href="https://nawazdanish1996.github.io/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/" target="blank">
                <i class="fab fa-github mt-4"></i>
              </a>
            </div>
        </div>

          <div className="col-md-4 text-center">
            <div className="proj pt-5 pb-5 mt-3">
              <h4 className="mt-3 text-primary">TV Maze</h4>
              <a href="https://fabulous-selkie-de609f.netlify.app/" target="blank">
                <i class="fab fa-github mt-4"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="proj pt-5 pb-5 mb-md-5 mt-3">
              <h4 className="mt-3 text-primary">eCom Website</h4>
              <a href="https://nawazdanish1996.github.io/JS-Mini-Project/" target="blank">
                <i class="fab fa-github mt-4"></i>
              </a>
            </div>
          </div>


      </div>

    </div>
      }
    </div>
  )
}

export default Portfolio