
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Women from "./Women";
import Layout from "./Layout";
import Category from "./Category";

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="women" element={<Women />}>
              <Route path=":categoryName" element={<Category />} />
            </Route>
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
