import React from "react"

// 先把数据放上去：父传子
// 再用delete删除，子传父，delete在子组件里

//
// function ListItem (props) {
//     return (
//         <>
//             <h3>{props.item.name}</h3>
//             <p>{props.item.price}</p>
//             <p>{props.item.info}</p>
//             <button onClick={() => props.delItem('hh')}>delete</button>
//         </>
//     )
// }
function ListItem ({item, delItem}) {
    return (
        <>
            {/*1*/}
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            {/*2.3*/}
            <button onClick={() => delItem(item.id)}>delete</button>
        </>
    )
}

// 先不抽离组件,完成基础渲染之后再抽离
class App extends React.Component{
    state= {
        list: // 列表数据
            [
                { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
                { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
                { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
            ]
    }

    // 2.2
    delItem = (id) => {
        // 2.4
        this.setState({
            list: this.state.list.filter(item=> item.id !== id)
        })
    }

    render(){
        return (
            <div>
                {/*{this.state.list.map(item=>(*/}
                {/*    // 1 这个地方可以抽离成组件*/}
                {/*    // <>*/}
                {/*    //     <h3>{item.name}</h3>*/}
                {/*    //     <p>{item.price}</p>*/}
                {/*    //     <p>{item.info}</p>*/}
                {/*    //     <button>delete</button>*/}
                {/*    // </>*/}
                {/*// ))}*/}

                {this.state.list.map(item=><ListItem
                    // 1 key, item
                    key={item.id} item={item}
                    // 2.1
                    delItem={this.delItem}></ListItem>)}
            </div>
        )
    }
}

export default App;

