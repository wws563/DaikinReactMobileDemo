import {Swiper,Image,Grid,Toast } from 'antd-mobile'
import {PicturesOutline} from 'antd-mobile-icons'
import styles from '@/content/css/home.less'
const swiperData = [
	{id:0,src:"http://fightclub.myds.me:10000/images/2022/01/29/ad8c4537503e67f38a87a76d5d2bea35.jpg",url:"http://yimiao.space"},
	{id:1,src:"http://fightclub.myds.me:10000/images/2022/01/29/e9e91d722f9b9a4bb918537541f29df2.jpg",url:"http://yimiao.space"},
	{id:2,src:"http://fightclub.myds.me:10000/images/2022/01/29/d2bee64ee6f5c28b29d20f130ad08cd7.jpg",url:"http://yimiao.space"}
]

const gridData = [
	{id:0,title:"家用分体空调"},
	{id:1,title:"家用中央空调"},
	{id:2,title:"商用空调"},
	{id:3,title:"展厅预约"},
	{id:4,title:"售后维护"},
	{id:5,title:"了解更多"},
]



const swipeItems = swiperData.map((item,index) => {
	return(
	<Swiper.Item key={index}>
		<div className={styles.swiper_item}>
			<Image className='imgfix' src={item.src} />
		</div>		
	</Swiper.Item>)
})

const onGridItemClick = function(item){
	Toast.show('跳转'+item.title)
}

const gridItems= gridData.map((item,index)=>{
	return(
		<Grid.Item key={index} onClick={onGridItemClick.bind(this,item)}>
			<div className={styles.grid_item} >
				<PicturesOutline fontSize={30}></PicturesOutline>
				<div style={{marginTop:'10px'}}>{item.title}</div>
			</div>
		</Grid.Item>
	)
})

function Home(){
	return (
	<div className={styles.home_container}>
		<div className={styles.title}>
			欢迎来到大金空调
		</div>
		<Swiper autoplay style={{'--border-radius':'0.5rem'}}>
			{swipeItems}
		</Swiper>
		<div className={styles.title}>
			请选择您想了解的内容
		</div>
		<Grid columns={3} gap={8}>
			{gridItems}
		</Grid>

	</div>

	)
}

export default Home