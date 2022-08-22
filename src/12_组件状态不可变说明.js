import React from "react";

class TestComponent extends React.Component{

    state = {
        // 用对象的语法，定义各种各样属性，全都是当前组件的状态
        name: 'lydia',
        list: [1, 2, 3],
        person: {
            name: 'jack',
            age: 20
        }
    }

    change () {


        this.setState({
            name: '李行健'
        })
        this.setState({
            list: [...this.state.list, 4]
        })
        this.setState({
            person: {
                ...this.state.person,
                name: 'rose'
            }
        })
        // list删除
        this.setState({
            list: this.state.list.filter(item => item !== 2)
        })
    }

    render(){
        //2. 使用状态
        return (
            <>
                <div>{this.state.name}</div>
                <ul>
                    {this.state.list.map( (item) => <li key={item}>{item}</li> )}
                </ul>
                <div>
                    {this.state.person.name}
                </div>
                <div>
                    <button onClick={() => this.change()}>修改list和name</button>
                </div>
            </>

        )
    }
}


function App() {
    return (
        <div className="App">
            <TestComponent>

            </TestComponent>
        </div>
    )
}
export default App;