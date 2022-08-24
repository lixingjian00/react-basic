import React from "react"

// 子传父： 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参 传入

function Son (props) {
    const {getSonMsg} = props
    return (
        <div>
            this is Son
            {/*2. 用箭头函数，这个函数就能传实参了*/}
            <button onClick={() => getSonMsg('这里是来自于子组件的数据')}>
                点我，给父亲传参
            </button>
        </div>

    )
}

class App extends React.Component{
    // 1. 在父组件准备一个函数传给子组件
    // 2. 搞个形参接收一下
    getSonMsg = (sonMsg) => {
        console.log(sonMsg)
    }
    render(){
        return (
            <div>
                <Son getSonMsg={this.getSonMsg}></Son>
            </div>
        )
    }
}

export default App;

