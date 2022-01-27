import React from "react";
import styles from  "../content/css/header.less";
import {NavBar} from "antd"

function Header() {
  return (
		<div className={styles.body}>
			<NavBar>配合路由使用</NavBar>
		</div>
  );
}
export default Header
