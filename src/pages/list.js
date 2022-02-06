
import Mock from 'mockjs'
import styles from '@/content/css/home.less'


const listData = Mock.mock({"testList|10":[
	{id:'@guid',name:'@ctitle'}]}).testList
console.log(listData)

const listItems=listData.map((item,index)=>{
	return(
		<div>
			<span>{item.id}</span>
			<span>{item.name}</span>
		</div>
	)
})

function Home(){
	return (
	<div className={styles.container}>
		{listItems}
	</div>

	)
}

export default Home