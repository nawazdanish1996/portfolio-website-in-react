import React, {useState, useEffect} from 'react';
import App from './App';
import Footer from './components/Footer';
import SnipperLoader from "./components/SpinnerLoader";

function Rend() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
          setLoading(false)
        }, 3000)
      }, []);

  return (
    <React.Fragment>
        {
            loading ?
            <SnipperLoader />
            :
            <React.Fragment>
            <App />
            <Footer />
            </React.Fragment>
        }
    </React.Fragment>
  )
}

export default Rend