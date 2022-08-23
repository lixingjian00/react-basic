import React, {createRef} from "react"

// 非受控组件
// 手动操作dom的方式获取文本框的值，状态不受react组件控制，通过原生dom获取
// 1. 导入creatRef，相当于创建一个容器，dom可以往里放
// 2. 创建ref对象后，存到msgRef的实例属性中
// 3. 为input添加red属性，值为msgRef
// 4. 事件处理的时候，通过msg.current可以拿到input对应的dom元素，msgRef.current.value就是文本框的值
class Counter extends React.Component {
    msgRef = createRef() // 容器
    getValue = () => {
        // 通过msgRef获取input value的值
        console.log(this.msgRef.current.value)
    }
    render () {
        return (
            <>
                <input type="text" ref={this.msgRef}/>
                <button onClick={this.getValue}>点击获取输入框的值</button>
            </>
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