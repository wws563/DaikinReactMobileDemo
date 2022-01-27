import React from 'react'
import { NavBar } from 'antd-mobile'
import {
  Route,
  Switch,
  MemoryRouter as Router,
} from 'react-router-dom'

import Footer from '@/components/Layout/Footer'
import styles from '@/content/css/demo.less'

export default function Layout(params){
  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={styles.body}>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <div>首页</div>
}

function Todo() {
  return <div>我的代办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}