# React-Start-Toolkit
React Project Start Toolkit by React 16 + React-router v4 + Redux + Webpack 4 + Babel 7 + Ant Design + Dynamic import

使用目前较新的技术栈搭建的 React 脚手架，包括 React 16.4.2、React-router v4、Redux、Webpack 4、Babel 7、路由动态分割和导入等。

<div align=center> <img width="150" height="150" src="./React.png" /></div>

<hr>
<br>

<div align="center">
  <a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/react-^16.4.2-brightgreen.svg?style=flat-square" /></a>
  <a href="https://github.com/webpack/webpack"><img src="https://img.shields.io/badge/webpack-^4.19.1-yellow.svg?style=flat-square" /></a>
  <a href="https://github.com/reduxjs/redux"><img src="https://img.shields.io/badge/redux-^4.0.0-orange.svg?style=flat-square" /></a>
  <a href="https://github.com/ReactTraining/react-router"><img src="https://img.shields.io/badge/react--router-^4.3.1-lightgrey.svg?style=flat-square" /></a>
  <a href="https://github.com/ant-design/ant-design"><img src="https://img.shields.io/badge/ant--design-^3.9.0-yellowgreen.svg?style=flat-square" /></a>
  <a href="https://github.com/babel/babel"><img src="https://img.shields.io/badge/babel-^7.0.0-blue.svg?style=flat-square" /></a>
</div>

<hr>
<br>

**演示地址：**[https://ZG-frank.github.io/react-start-toolkit](https://ZG-frank.github.io/react-start-toolkit/)


## Quick Start
#### Download
~~~
git clone https://github.com/ZG-frank/react-start-toolkit.git
~~~

#### Install
~~~
yarn install or npm install
~~~

#### Run
~~~
npm run dev
~~~

#### Build
~~~
npm run build
~~~

#### Server
~~~
npm run server
因为采用了BrowserRouter，出于浏览器安全的原因，build之后的文件需要启动服务器来访问
这里使用了express来启用服务器，默认是8090端口并返回dist文件夹中的index.html
~~~

### Todo

- [ ] 内容更丰富
- [x] 优化组件和工程目录
- [ ] 优化Webpack配置
- [ ] 加入Mobx版
- [ ] 加入原生Context API版
