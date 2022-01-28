// import React from 'react'
import { useState } from 'react'
import {
  Route,
  Switch,
  MemoryRouter as Router,
} from 'react-router-dom'

import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import styles from '@/content/css/demo.less'


const router = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/todo',
    title: '我的待办',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/message',
    title: '我的消息',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: '个人中心',
    icon: <UserOutline />,
  },
]
// const [activeTitle, setActiveTitle] = useState()

export default function Layout(params){
  console.log(styles.app);

  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        {/* <Header title={activeTitle} /> */}
        <Header />
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