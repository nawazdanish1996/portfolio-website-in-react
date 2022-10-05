import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavigationBar';
const LazyHome = lazy(()=> import("./pages/Home"));
const LazyAbout = lazy(()=> import("./pages/About"));
const LazyPortfolio = lazy(()=> import("./pages/Portfolio"));
const LazyContact = lazy(()=> import("./pages/Contact"));
// const LazyPage404 = lazy(()=> import("./pages/Page404"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Suspense fallback="Loading..."><LazyHome /></Suspense>} />
        <Route path='/about' element={<Suspense fallback="Loading..."><LazyAbout /></Suspense>} />
        <Route path='/portfolio' element={<Suspense fallback="Loading..."><LazyPortfolio /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback="Loading..."><LazyContact /></Suspense>} />
        {/* <Route path='*' element={<Suspense fallback="Loading..."><LazyPage404 /></Suspense>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
