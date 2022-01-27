import React from 'react';
import ReactDOM from 'react-dom';
// import RouterApp from './router';
import Footer from '@/components/Layout/Footer'
import './index.css';
// import App from './App';
// import TestFetch from './components/UseApiDemo2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 严格模式，用于提示各类错误
  <React.StrictMode> 
    {/* <App /> */}
    {/* <TestFetch />*/}
    <Footer></Footer>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


