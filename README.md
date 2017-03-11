# 我的博客
[博客链接](http://139.129.240.16)

----------
## 开发环境
* Node.js: `v7.5.0`
* Express: `4.14.1`
* MongoDB: `3.4.2`

------

## 特点
* 后台提供markdown编辑器
* 可以直接上传md文件
* 支持md语法的文章内容修改
* 内容显示区支持语法以及代码高亮

--------

## 安装
[仓库](https://github.com/olyy111/myBlog-zl.git)克隆到本地
`npm install`

---------

## 运行
### 链接数据库
1. 在mongoose 的bin目录下打开命令行 `mongod --dbpath=XXX --port=YYY`
XXX为指定 **db** 的绝对路径(需要在项目根目录下面建立此文件夹)，YYY为指定端口号
2. Robomongo 0.9.0 连接数据库,在connet的时候，填写对应YYY端口号
3. 在app.js中修改指定数据库端口号与YYY一致

### 启动应用
`node app.js`
如果端口号被占用，更换之

### 注册管理员帐号
1. 打开首页注册帐号admin 密码admin
2. 在Robomongo中将这条数据下的 `isAdmin`字段修改为 `true`
3. 用管理员账户登录进入后台管理页面
4. 分类添加和内容添加



