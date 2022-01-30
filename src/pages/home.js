import { Button, Space, Swiper, Toast,Image } from 'antd-mobile'
import home from '@/content/css/home.less'
const swiperData = [
	{id:0,src:"http://fightclub.myds.me:10000/images/2022/01/29/ad8c4537503e67f38a87a76d5d2bea35.jpg",url:"http://yimiao.space"},
	{id:1,src:"http://fightclub.myds.me:10000/images/2022/01/29/e9e91d722f9b9a4bb918537541f29df2.jpg",url:"http://yimiao.space"},
	{id:2,src:"http://fightclub.myds.me:10000/images/2022/01/29/d2bee64ee6f5c28b29d20f130ad08cd7.jpg",url:"http://yimiao.space"}]

const items = swiperData.map((item,index) => {
	return(
	<Swiper.Item key={index}>
		<div className={home.swiper_item}>
			<Image className='imgfix' src={item.src} />
		</div>

	</Swiper.Item>)
})

function Home(){
	return (
	<div className={home.home_container}>
		<Swiper style={{'--border-radius':'0.5rem'}}>
			{items}
		</Swiper>
	</div>

	)
}

export default Home