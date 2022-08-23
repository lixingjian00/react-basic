import React from "react"

// 受控组件
// input// input的状态被React组件的状态控制的状态被React组件（state）的状态控制

// 1. 声明用来控制input value状态的   react组件自己的状态
class Counter extends React.Component {
    state = {
        message: 'this is message'
    }
    inputChange = (e) =>{
        // 3. 看看是否被触发，并打印一下事件对象e e里面有target的value值（就是'this is message'）
        console.log('change触发了', e)
        // 4. 拿到输入框最新的值，也就是e里面的target.value 交给state中的message
        this.setState({
            message: e.target.value
        })
    }
    render () {
        return (
            // 2. 给input框的value属性，绑定react state
            <input type="text"
                   value={this.state.message}
                // 框里输入东西的时候，会触发change事件
                // 3. 给input框绑定一个change事件，为了拿到当前输入框中的数据
                   onChange={this.inputChange}
            />
        )
    }
}

function App() {
    return (
        <div className="App">
            <Counter></Counter>
        </div>
    )
}
export default App;
