### create-react-app生成项目
### config被react封装并隐藏了，使用npm run eject暴露配置文件
### 安装react-router-dom控制路由

简单记录使用方式
1. 新建一个router文件，管理所有路由
2. 在项目入口引入该文件，包在最外层
3. 在需要跳转的地方引入Link生成跳转链接

-	[react-router-dom-v6文档](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)

### 安装antd-mobile组件库
### 安装less和less-loader支持less文件
1. `npm i less less-loader`
2. 在eject暴露配置文件中增加less相关设置[参考](https://blog.csdn.net/qq_40282732/article/details/106876982?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-106876982.pc_agg_new_rank&utm_term=react+import+less&spm=1000.2123.3001.4430	)
3. 报错，查询后发现webpack版本为4.x,less-loader直接安装为10.x版。版本过高，降级5.0后正常使用。
### 安装mockjs模拟数据

to be continued...