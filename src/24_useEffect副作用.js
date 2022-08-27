import {useState, useEffect} from "react";
// 修改数据之后 把count值放到页面标题中 通过DOM
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调 并且定义副作用
// 3. 当我们通过修改状态更新组件时 副作用也会不断执行
function App () {
    useEffect(() => {
        // 定义副作用
        document.title = count
    })
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}
export default App