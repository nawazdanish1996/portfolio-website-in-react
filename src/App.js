import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import NavBar from './components/NavigationBar';
const LazyHome = lazy(()=> import("./pages/Home"));
const LazyAbout = lazy(()=> import("./pages/About"));
const LazyPortfolio = lazy(()=> import("./pages/Portfolio"));
const LazyContact = lazy(()=> import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Suspense fallback="Loading..."><LazyHome /></Suspense>} />
        <Route exact path='/about' element={<Suspense fallback="Loading..."><LazyAbout /></Suspense>} />
        <Route exact path='/portfolio' element={<Suspense fallback="Loading..."><LazyPortfolio /></Suspense>} />
        <Route exact path='/contact' element={<Suspense fallback="Loading..."><LazyContact /></Suspense>} />
        <Route exact path='*' element={<Suspense fallback="Loading..."><LazyHome /></Suspense>} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
