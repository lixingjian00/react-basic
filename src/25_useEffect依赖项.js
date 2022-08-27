import {useState, useEffect} from "react";
// 依赖项控制副作用的执行时机
// 1. 默认状态 不添加任何依赖项
// 组件初始化先执行一次 每次数据修改组件更新再执行一次
// 2. 添加依赖项：在函数里面添加第二个参数 空数组
// 首次渲染时执行一次 再更新就不管了
// 3. 特定依赖项
// 首次渲染时执行 依赖项发生变化时重新执行
function App () {
    // useEffect(() => {
    //     // 定义副作用
    //     document.title = count
    //     console.log('副作用又执行了')  // 只在首次渲染执行一次
    // }, [])

    const [count, setCount] = useState(0)
    const [name, setName] = useState('lydia')

    useEffect(() => {
        console.log('副作用执行了')
        document.title = count
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setName('lxj')}>{name}</button>
        </div>
    )
}
export default App