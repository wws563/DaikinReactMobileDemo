import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout/Layout'
import reportWebVitals from './reportWebVitals';
import '@/scripts/mock/index'
import './content/css/common.less';
import './index.css';

ReactDOM.render(
  // 严格模式，用于提示各类错误
  <React.StrictMode> 
    <Layout>
    </Layout>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


