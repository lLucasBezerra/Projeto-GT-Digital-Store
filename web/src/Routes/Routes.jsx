import { Router, Routes, Route } from "react-router-dom";

import React from 'react'
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage"
import ProductViewPage from "../pages/ProductViewPage"
export const AppRoutes = () => {
  return (
    
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductListingPage />}/>
            <Route path="/product/:id" element={<ProductViewPage />}/>
        </Routes>
 
  )
}