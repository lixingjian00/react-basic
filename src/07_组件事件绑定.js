import React from "react";

// 绑定事件 on+事件名称 = {事件处理程序，是一个事件的回调函数}

function Hello(){
    // 声明事件的回调函数
    const clickHandler = () =>{
        console.log('函数组件的事件被触发了')
    }
    return <div onClick={clickHandler}>Hello</div>
}
// 类组件创建和渲染
class HelloComponent extends React.Component{
    // 事件回调函数的标准写法
    // 回调函数的this 指向当前的组件实例对象
    clickHandler = () =>{
        console.log('类组件的事件被触发了')
    }
    render(){
        return <div onClick={this.clickHandler}>this is component</div>
    }
}
function App() {
  return (
    <div className="App">
        <Hello></Hello>
        {/* 渲染函数组件 */}
        <Hello/>
        {/*渲染类组件*/}
        <HelloComponent></HelloComponent>


    </div>
  )
}


export default App;