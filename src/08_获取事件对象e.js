export default App;
import React from "react";

// 比如阻止默认行为
// 事件对象e说明
// 函数和类组件完全一致
// 创建形参e，触发时将实参e对象

function Hello(){
    const clickHandler = (e) =>{
        // 阻止默认行为（这里是跳转）
        e.preventDefault()
        console.log('函数组件的事件被触发了',e)
    }
    return <div><a onClick={clickHandler} href="https://www.google.com/">Google</a></div>
}
class HelloComponent extends React.Component{
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


