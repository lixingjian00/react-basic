// 组件实例 类组件
// DOM对象 标签

// 在函数组件中获取真实的dom元素对象或者是组件对象
// 1. 导入 useRef 函数
// 2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
// 3. 通过ref 绑定 要获取的元素或者组件
import React, { useRef, useEffect } from "react";
class TestC extends React.Component {
    state = {
        name: 'lxj'
    }
    getName = () => {
        return 'this is getName'
    }
    render() {
        return (
            <div>我是类组件</div>
        )
    }
}

function App () {
    const testRef = useRef(null)
    const h1Ref = useRef(null)
    // useEffect 是在dom渲染之后回调
    useEffect(() => {
        console.log(testRef.current)
        console.log(h1Ref.current)
    }, [])
    return (
        <div>
            <TestC ref={testRef}>
            </TestC>
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    )
}
export default App