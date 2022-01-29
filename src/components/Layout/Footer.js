// import React from 'react'
import {TabBar } from 'antd-mobile'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'

import styles from '@/content/css/layout.less'

const Footer = (props) => {
	// router相关方法
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const setRouteActive = (value) => {
    history.push(value)
  }
	// 传入tabs，将数据和组件解耦
	const tabs = props.tabs
	
	// 再设置路由的基础上怎加触发父元素的方法
	const onTabClick = function(value){
		setRouteActive(value)
		props.onChange(tabs.find(item => item.key === value))
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
