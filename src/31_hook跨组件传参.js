// 1. 使用createContext 创建Context对象
// 2. 在顶层组件通过Provider 提供数据
// 3. 在底层组件通过useContext函数获取数据
import React, {createContext, useContext, useState} from "react";

const Context = createContext()

function CompA () {
    const count = useContext(Context)
    return (
        <div>
            this is A
            App传到A的数字：{count}
            <CompC></CompC>
        </div>
    )
}
function CompC () {
    const count = useContext(Context)
    return (
        <div>
            this is C
            App传到C的数字：{count}
        </div>
    )
}

function App () {
    const [count, setCount] = useState(0)

    return (
        <Context.Provider value={count}>
            <div>
                <CompA></CompA>
                <button onClick={()=>setCount(count+1)}>click</button>
            </div>
        </Context.Provider>
    )
}
export default App