import "../css/SnipperLoader.css";
import React, { useEffect, useState } from 'react';
import { SyncLoader } from "react-spinners";

const SpinnerLoader = () => {
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      }, 3000)
    }, []);

  return (
    <div id="loader">
        <h4 className="text-warning">Happy <span className="text-success">Dassehra</span></h4>
        <br />
        <SyncLoader color={"green"} loading={loading} size={10} />
    </div>
  )
}

export default SpinnerLoader;