import { Button, Space, Swiper, Toast } from 'antd-mobile'
import home from '@/content/css/home'
const swiperData = [
	{id:0,src:"http://fightclub.myds.me:10000/image/ucr",url:"http://yimiao.space"},
	{id:1,src:"http://fightclub.myds.me:10000/image/1YB",url:"http://yimiao.space"},
	{id:2,src:"http://fightclub.myds.me:10000/image/SzF",url:"http://yimiao.space"}]

const items = swiperData.map((item,index) => {
	<Swiper.Item key={index}>
		<div className={home.swiper_item}>
			<img className='imgfix' src={item.src} alt={item.src}/>
		</div>

	</Swiper.Item>
})

function homeSwiper(){
	<Swiper>
		{items}
	</Swiper>
}

export default homeSwiper