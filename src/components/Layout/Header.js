// import React from "react";
import { useHistory } from 'react-router-dom'

import { NavBar } from "antd-mobile"
import styles from '@/content/css/layout.less'

function Header(props) {
	// 左侧返回功能
	const {goBack} = useHistory()
	const back = () => {
		goBack()
	}

  return (
		<div className={styles.header}>
			<NavBar onBack={back}>{props.title}</NavBar>
		</div>
  );
}
export default Header
