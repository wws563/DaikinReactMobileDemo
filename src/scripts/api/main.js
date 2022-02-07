// 使用mockjs模拟接口调用
import Mock from 'mockjs'

Mock.setup({
	timeout: 0-300
})
// const Random = Mock.Random;
const Api = {
	getList: Mock.mock('/api/getList','get',{
		'xData|100':['@datetime'],
		'series|2':[{
				'name':'@NAME',
				'type':'line',
				'smooth':true,
				'data|100':['@integer(1,600)']
		}]
	})
}
// const listData = Mock.mock({"testList|10":[
// 	{id:'@guid',name:'@ctitle'}]}).testList

export default Api