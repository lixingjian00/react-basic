import React from "react"
// 兄弟互相传 B->App, App->A
// 1. 先把B中的数据通过子传父给App
// 2. App收到的数据通过父传子给A

function SonA (props) {
    return (
        <div>
            {/*2*/}
            this is A, {props.sendAMsg}
        </div>

    )
}

function SonB (props) {
    const {getBMsg} = props
    const bMsg = '这里是来自于B的数据'
    return (
        <div>
            this is B
            {/*1*/}
            <button onClick={() => getBMsg(bMsg)}>click me</button>
        </div>
    )
}


class App extends React.Component{
    // 2
    state = {
        sendAMsg: '父传子的测试'
    }
    // 1
    getBMsg = (bMsg) => {
        console.log(bMsg)
        // 3
        // 把bMsg交给sendAMsg
        this.setState({
            sendAMsg: bMsg
        })
    }

    render(){
        return (
            <div>
                <SonA sendAMsg={this.state.sendAMsg}></SonA>
                <SonB getBMsg={this.getBMsg}></SonB>
            </div>
        )
    }
}

export default App;

