// 发送网络请求
// 类组件用 生命周期钩子函数 componentDidMount
// 执行时机 初始化的时候DOM渲染完毕 只执行一次 和2像

// 1. 不加依赖项 首次渲染 和 重新渲染都会执行
// 2. 加[] 只会在初始化执行一次
// 3. 加特定的依赖项 [count, name] 首次渲染执行，任意一个变化也执行

// 所以hook发送网络请求用 2

import {useEffect} from "react";

function App () {
    useEffect(() => {   // 这里这个结构不能改变 要在下面新建函数
        // 发送请求
        async function loadData() {
            const res = await fetch('http://geek.itheima.net/v1_0/channels')
            console.log(res)
        }
        loadData()
    }, [])
    return (
        <div>

        </div>
    )
}
export default App