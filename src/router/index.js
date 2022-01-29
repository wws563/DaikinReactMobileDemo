import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

const footerRoutes = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/list',
    title: '列表展示',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/form',
    title: '表单提交',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: '个人中心',
    icon: <UserOutline />,
  },
]


export {footerRoutes} 
