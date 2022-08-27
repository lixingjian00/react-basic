// 状态读取和修改
// 1. 函数useState传过来的参数 作为count的初始值，只在第一次执行生效
// 2. [count, setCount] = useState(0) 这里是解构赋值
// useState执行返回值是一个数组
// count和setCount名字可以自定义
// 顺序不可以换 (对象的解构赋值是可以调换的，根据key取对象) 第一参数 数据状态；第二参数 修改数据的方法
// 3. setCount用来修改count的值 依旧保持不能直接修改原值 而是生成一个新值替换原值
// setCount(基于原值得到的新值 ++就不行)
// 4. count 和 setCount是一对 绑在一起的 setCount只能用来修改对应的count值


import {useState} from "react";

function App () {
    //
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}
export default App