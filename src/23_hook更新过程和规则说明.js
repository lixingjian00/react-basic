// 组建的更新过程
// 调用setCount时的更新过程

// 首次渲染 App第一次被渲染的执行过程 组件内部代码被执行一次
// const [count, setCount] = useState(0) 跟着执行
// 初始值0 只在首次渲染时生效

// 更新渲染
// 每次渲染 setCount都会更新
// 1. app组件会再次渲染 函数会再次执行
// 2. useState再次执行得到的新count是新值1 来执行
// 因为外面有容器 记录每次useState产出的值
import {useState} from "react";

function App () {
    // 这东西不能在内部函数调用 只能在函数组件的最外层直接调
    const [count, setCount] = useState(0)
    console.log(count)
    const [flag, setFlag] = useState(true)
    const [list, setList] = useState([])
    function test () {
        setCount(count + 1)
        setFlag(false)
        setList([1, 2, 3])
    }
    return (
        <div>
            {count} {flag?'1':'0'} {list.join('-')}
            <button onClick={test}> + </button>
        </div>
    )
}
export default App