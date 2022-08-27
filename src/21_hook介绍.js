// 1. 导入useState
// 2. 执行这个函数 传入初始值 在函数组件中
// 3. 解构数据 修改数据的方法
// 4. 使用和修改数据
import {useState} from "react";

function App () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}
export default App