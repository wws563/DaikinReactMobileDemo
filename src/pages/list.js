
import Mock from 'mockjs'
import { getFiles } from '../scripts/services/api'
import styles from '@/content/css/home.less'
import '@/scripts/mock'

// 数据部分
const listData = Mock.mock({"testList|10":[
	{id:'@guid',name:'@ctitle'}]}).testList


const listItems = listData.map((item,index)=>{
	return(
		<div key={item.id}>
			<span>{item.id}</span>
			<span>{item.name}</span>
		</div>
	)
})

const data = getFiles().then(res=>{
	console.log(res)
})
console.log(data)
function List(){
	return (
	<div className={styles.container}>
		{/* 搜索栏 */}
		<div></div>
		{/* 下拉搜索 */}
		{/* 列表内容 */}
		{listItems}
	</div>

	)
}

export default List