### create-react-app生成项目
### config被react封装并隐藏了，使用npm run eject暴露配置文件
### 安装react-router-dom控制路由
- 配合antd-mobile，降版本到5.3

### 安装antd-mobile组件库
### 安装less和less-loader支持less文件
1. `npm i less less-loader`
2. 在eject暴露配置文件中增加less相关设置[参考](https://www.cnblogs.com/shun1015/p/13520577.html)
3. 报错，查询后发现webpack版本为4.x,less-loader直接安装为10.x版。版本过高，降级5.0后正常使用。

### 安装mockjs模拟数据

#### 踩坑记录
1. react项目开启了`css module`会把`class`编辑成哈希值，全局变量需要使用`:global`转换一下。

to be continued...