import React from "react";
// 通过类组件修改状态的方式 counter
class Counter extends React.Component{
    state = {
        count: 0
    }
    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return <button onClick={this.changeCount}>{this.state.count}click</button>
    }
}
function App() {
    return (
        <div className="App">
            <Counter></Counter>
        </div>
    )
}
export default App;