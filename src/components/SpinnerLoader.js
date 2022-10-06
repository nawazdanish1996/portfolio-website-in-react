import "../css/SnipperLoader.css";
import React, { useEffect, useState } from 'react';
import { GridLoader } from "react-spinners";

const SpinnerLoader = () => {
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      }, 5000)
    }, []);

  return (
    <div id="loader">
        {/* <h4 className="text-warning">Happy <span className="text-success">Dassehra</span></h4>
        <br /> */}
        <GridLoader color={"green"} loading={loading} size={20} />
    </div>
  )
}

export default SpinnerLoader;