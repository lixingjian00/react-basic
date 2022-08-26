import React, {createContext} from "react"

// 上层到下层的跨组件通信
// App->A->C
// 1 创建Context对象 导出 Provider 和 Consumer对象
// 2 使用Provider包裹上层组件提供数据value
// 3 需要用到数据的组件使用Consumer包裹获取数据

const {Provider, Consumer} = createContext()

function CompA () {
    return (
        <div>
            this is A
            <CompC></CompC>
        </div>

    )
}

function CompC () {
    return (
        <div>
            this is C
            <Consumer>
                {value=><span>{value}</span>}
            </Consumer>
        </div>

    )
}


class App extends React.Component{
    state= {
        message: 'this is App message'
    }

    render(){
        return (
            <Provider value={this.state.message}>
                <div>
                    <CompA></CompA>
                </div>
            </Provider>

        )
    }
}

export default App;

