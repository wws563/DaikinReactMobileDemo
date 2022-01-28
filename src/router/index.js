import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '@/pages/home'
import './index.css';

export default function BasicExample() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={Home()} />
                <Route path='/about' element={About()} />
            </Routes>
        </BrowserRouter>
    )
}

// You can think of these components as "pages"
// in your app.
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
