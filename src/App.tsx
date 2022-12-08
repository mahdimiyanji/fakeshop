import React, {lazy} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./app/layout/Navbar/Navbar";
import AppSuspense from "./app/layout/loading/AppSuspense";

const Home = lazy(() => import("./app/pages/home/Home"));
const Products = lazy(() => import("./app/pages/products/Products"));
const AboutUs = lazy(() => import("./app/pages/aboutUs/AboutUs"));

const App = () => {
  return (
    <div className="App">
      <AppSuspense>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/products'} element={<Products/>}/>
          <Route path={'/about-us'} element={<AboutUs/>}/>
          
          <Route path={'/*'} element={<Navigate to={"/"}/>}/>
        </Routes>
      </AppSuspense>
    </div>
  );
}

export default App;