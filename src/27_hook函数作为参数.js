// useState 使用回调函数作为参数
// useState 的参数只在初始渲染起作用 可能通过函数的计算获得
// 语法 const [name, setName] = useState(()=>{ //编写计算逻辑        return '计算之后的初始值'})

// 1. 先写一个固定的初始值测试
// 2. 父传子往函数组件里传参
import {useState} from "react";

// 2. props
function Counter (props) {
    const [count, setCount] = useState(()=>{
        return props.count
    })
    return (
        <button onClick={() => setCount(count+1)}>{count}</button>
    )
}
function App () {

    return (
        <div>
            {/*count={}*/}
            <Counter count={10}></Counter>
            <Counter count={20}></Counter>
        </div>
    )
}
export default App