import React from "react"
// 实现步骤
// 1.  父组件提供要传递的数据  -  state
// 2.  给子组件标签添加属性值为 state中的数据
// 3.  子组件中通过 props 接收父组件中传过来的数据
// a. 类组件使用this.props获取props对象
// b. 函数式组件直接通过参数获取props对象


// 1 APP 是父组件，Son是子组件
// 1 父组件需要用类，因为只有类才有状态
// 1 构建父子关系：子组件在父组件中渲染出来
//


// 1函数式的Son
class SonC extends React.Component {
    render(){
        // 4 解构
        const {msg,list,userInfo,getMsg,child} = this.props
        return(
            // 2.2 类组件需要通过this  获取props

            <>
                {/*4 解构，所以注释了这些*/}
                {/*<div>{console.log(this.props)}</div>*/}
                {/*<div>我是类组件的string, {this.props.msg}</div>*/}
                {/*/!*3.1 但是list是用来遍历的，一般不这样用*!/*/}
                {/*<div>我是类组件的list, {this.props.list}</div>*/}
                {/*/!*3.1 遍历list*!/*/}
                {/*<div>我是类组件list的遍历， {this.props.list.map(item => <p key={item}>{item}</p>)}</div>*/}
                {/*/!*3.2 对象*!/*/}
                {/*<div>{this.props.userInfo.name}</div>*/}
                {/*/!*3.3 函数*!/*/}
                {/*<button onClick={this.props.getMsg}>点我</button>*/}
                {/*{this.props.child}*/}
                {/*4 解构所以可以不写this.props*/}
                <div>{console.log(this.props)}</div>
                <div>我是类组件的string, {msg}</div>
                {/*3.1 但是list是用来遍历的，一般不这样用*/}
                <div>我是类组件的list, {list}</div>
                {/*3.1 遍历list*/}
                <div>我是类组件list的遍历， {list.map(item => <p key={item}>{item}</p>)}</div>
                {/*3.2 对象*/}
                <div>{userInfo.name}</div>
                {/*3.3 函数*/}
                <button onClick={getMsg}>点我</button>
                {child}
            </>
        )
    }
}

// 1类组件的Son
// 2.2 子属性要接数据，需要提供一个参数 props
function SonF (props){
    // 4 解构可以const {msg,list,userInfo,getMsg,child} = props，也可以用SonF( {msg,list,userInfo,getMsg,child})
    // 2.2 props是一个对象，里面存着通过父组件传入的所有数据
    //console.log(props)
    return (
        <>
            <div>我是函数子组件, {props.msg}</div>
        </>
    )
}
class App extends React.Component{
    state = {
        // 3.1 props传递数组
        list: [1, 2, 3],
        message: 'this is message',
        // 3.2 传递对象
        userInfo: {
            name: 'lydia',
            age: 30
        }
    }

    // 传函数
    getMsg = () => {
        console.log('父组件中的函数')
    }
    render(){
        return (
            <>
                {/*2.1 子组件身上绑定属性 属性名可以自定义*/}
                {/*3.1 props传递数组*/}
                {/*3.2 传递对象*/}
                {/*3.3传递jsx 模板, 编译时props.child成为一个元素对象*/}
                <SonF msg={this.state.message} list={this.state.list} userInfo={this.state.userInfo}></SonF>
                <SonC msg={this.state.message}
                      list={this.state.list}
                      userInfo={this.state.userInfo}
                      getMsg={this.getMsg}
                      child={<span>this is span</span>}
                ></SonC>
            </>
        )
    }
}

export default App;

