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
    key: '/list',
    title: '列表',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/form',
    title: '表单',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: '个人中心',
    icon: <UserOutline />,
  },
]


export default function Layout(props){
  const [activeTitle, setActiveTitle] = useState(router[0].title) // header的标题

  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <Header title={activeTitle} />
        <div className={styles.body}>
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
        <div className={styles.footer}>
          <Footer tabs={router} onChange={val => setActiveTitle(val.title)} />
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