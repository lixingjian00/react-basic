import React from "react";


function Hello(){
    const clickHandler = (e,msg) =>{

        console.log('函数组件的事件被触发了',msg,e)
    }

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