import React from "react";

// 事件绑定额外参数

function Hello(){
    const clickHandler = (e,msg) =>{

        console.log('函数组件的事件被触发了',msg,e)
    }
    // 想传递一个实参，需要用函数调用的写法 {clickHandler} -> {()=>clickHandler（参数）}
    // 如果也想事件对象e，形参和实参顺序一样 (e)=>clickHandler(e,参数)
    return <div onClick={(e)=>clickHandler(e,'this is massage')}>点我点我</div>
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
export default App;