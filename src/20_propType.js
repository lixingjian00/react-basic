import React from "react"
import PropTypes from 'prop-types'
// 里面有各种各样的内置校验规则

// 1. 安装属性校验包：yarn add prop-types
// 2. 导入prop-types 包
// 3. 使用 组件名.propTypes = {} 给组件添加校验规则

function Test ({list}) {
    return <div>
        {list.map(item => <p key={item}>{item}</p>)}
    </div>
}
Test.propTypes = {
    list: PropTypes.array // 限定这里list参数的类型必须是数组类型
}

class App extends React.Component{

    render(){
        return (
            // <Test list={9}></Test> // 这样会报错
            <Test list={[1,2,3]}></Test>
        )
    }
}

export default App;

