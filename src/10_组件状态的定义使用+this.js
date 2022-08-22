import React from "react";
// 组件状态流程：初始化状态-读取状态-修改抓过你太-影响视图
// 现在：类组件

// 首先把TestComponent的架子搭出来，然后再思考如何定义状态
// class TestComponent extends React.Component{
//     render(){
//         return <div>this is a TestComponent</div>
//     }
// }

// 定义状态，使用状态
// class TestComponent extends React.Component{
//     // 1. 定义组件状态
//     // 写个绝对属性就行
//     state = {
//         // 用对象的语法，定义各种各样属性，全都是当前组件的状态
//         name: 'lydia'
//     }
//     render(){
//         //2. 使用状态
//         return (<div>
//             this is a TestComponent
//             当前name为：{this.state.name}
//         </div>)
//     }
// }

// 修改状态：点击事件触发修改
class TestComponent extends React.Component{
    // 1. 定义组件状态
    // 写个绝对属性就行
    state = {
        // 用对象的语法，定义各种各样属性，全都是当前组件的状态
        name: 'lydia',
    }
    // 定义事件回调函数
    // class field写法，最规范的写法。对应第一个button
    changeName = () =>{
        // 3. 修改state的状态name
        // 不是this.state.name = 新name
        // 必须用setState
        this.setState({
            name: '李行健'
        })
    }
    // 另一种写法，对应第二个button
    changeName1 () {
        this.setState({
            name: '李行健'
        })
    }
    render(){
        //2. 使用状态
        return (
            <div>
                this is a TestComponent
                当前name为：{this.state.name}
                <button onClick={this.changeName}>修改name</button>
                {/*这样写的this还是指向TestComponent*/}
                <button onClick={() => this.changeName1()}>修改name</button>
            </div>

        )
    }
}


function App() {
    return (
        <div className="App">
            <TestComponent>

            </TestComponent>
        </div>
    )
}
export default App;