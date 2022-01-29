// import React from 'react'
import {TabBar } from 'antd-mobile'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import styles from '@/content/css/footer.less'

const Footer = (props) => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
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
	const onTabClick = function(value){
		setRouteActive(value)
		props.onChange(tabs.find(item => item.key === value).title)
	}
  return (
    <div className={styles.footer}>
      <TabBar activeKey={pathname} onChange={onTabClick}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
        ))}
      </TabBar>
    </div>
  )
}

export default Footer
