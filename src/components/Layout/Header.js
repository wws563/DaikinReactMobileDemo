// import React from "react";
import { NavBar } from "antd-mobile"
import styles from '@/content/css/footer.less'

function Header(props) {
  return (
		<div className={styles.body}>
			<NavBar>{props.title}</NavBar>
		</div>
  );
}
export default Header
