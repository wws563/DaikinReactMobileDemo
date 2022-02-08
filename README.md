### create-react-app生成项目
`config`被`create-react-app`封装并隐藏了，使用`npm run eject`暴露配置文件，对项目进行自定义。
> 关联less-loader的配置
### 安装react-router-dom控制路由
> 配合antd-mobile，降版本到5.3

### 安装antd-mobile组件库
> 蚂蚁旗下的移动端组件库
### 安装less和less-loader支持less文件
1. `npm i less less-loader`
2. 在eject暴露配置文件中增加less相关设置[参考](https://www.cnblogs.com/shun1015/p/13520577.html)
3. 报错，查询后发现webpack版本为4.x，less-loader直接安装为10.x版。版本过高，降级5.0后正常使用。

### 安装mockjs模拟数据
[react中使用axios + mockjs模拟后台数据](https://www.cnblogs.com/steamed-twisted-roll/p/13529980.html)
### 踩坑记录
1. react项目开启了`css module`会把`class`编辑成哈希值，全局变量需要使用`:global`转换一下。
2. 发现了一个`antd-mobile`组件`floatingBubble`的一个bug。(已提交PR修改)
3. `react-react-app`的`build`命令生成文件查看时，空白，404报错。[在packgejson中增加homepage:"."属性,保证路径正确](https://blog.csdn.net/tiangongkaiwu152368/article/details/80854683)
4. 更新gh-pages的git命令`git subtree push --prefix=build origin gh-pages`


to be continued...