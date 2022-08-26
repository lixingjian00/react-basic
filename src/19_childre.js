import React from "react"


function ListItem ({children}) {
    // children()
    return (
        // <div>ListItem {children()}</div>
        <div>ListItem {children}</div>
    )
}

// 先不抽离组件,完成基础渲染之后再抽离
class App extends React.Component{

    render(){
        return (
            <ListItem>
                {/*在组件标签内部写任何的内容，都会出现props.children 属性*/}
                {/*this is child*/}
                {/*<div>this is child div</div>*/}
                {/*{() => console.log(123)}*/}

            </ListItem>
        )
    }
}

export default App;

