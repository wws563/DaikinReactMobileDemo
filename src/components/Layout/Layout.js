// import React from 'react'
import { useState } from 'react'
import {
  Route,
  Switch,
  MemoryRouter as Router,
} from 'react-router-dom'

import {footerRoutes} from '@/router/index'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Bubble from '@/components/Layout/Bubble'
import Home from '@/pages/home'
import styles from '@/content/css/layout.less'





export default function Layout(props){
  const [activeTitle, setActiveTitle] = useState(footerRoutes[0].title) // header的标题

  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <Header title={activeTitle} />
        <div className={styles.content}>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/list'>
              <Todo />
            </Route>
            <Route exact path='/form'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <Footer tabs={footerRoutes} onChange={val => setActiveTitle(val.title)} />
      </div>
      <Bubble></Bubble>
    </Router>
  )
}

// function Home() {
//   return (<div>
//     <div style={{
//       height:"500px"
//     }}>首页</div>
//         <div style={{
//       height:"500px"
//     }}>首页</div>
//         <div style={{
//       height:"500px"
//     }}>首页</div>
    
//     </div>)
// }

function Todo() {
  return <div>我的代办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}