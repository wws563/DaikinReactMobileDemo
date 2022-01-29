// import React from "react";
import { NavBar } from "antd-mobile"
import styles from '@/content/css/layout.less'

function Header(props) {
  return (
		<div className={styles.header}>
			<NavBar>{props.title}</NavBar>
		</div>
  );
}
export default Header
