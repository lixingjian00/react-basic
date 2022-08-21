// react 框架核心包
// reactDOM 渲染相关
import React from 'react'
import ReactDOM from 'react-dom/client'

// 应用的全局文件（导入入口文件，做样式的初始化
import './index.css'
// 引入根组件
import App from './App'


// 渲染根组件app，到id="root"的DOM节点上
// 在 public/index.html里
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点需要去掉，影响useEffect的执行时机
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
)