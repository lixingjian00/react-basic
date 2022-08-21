// 有一个状态type 1 2 3
// 1 -> h1, 2 -> h2

// 原则：模板逻辑精简
// 复杂的多分支逻辑 通过函数
// 模板中只负责调用函数

const getHtag = (type) => {
    if (type === 1) {
    return <h1>this is h1</h1>
    }
    if (type === 2) {
    return <h2>this is h2</h2>
    }
    if (type === 3) {
    return <h3>this is h3</h3>
    }
}
function App() {
    return (
    <div className="App">
        { getHtag(1) }
        { getHtag(2) }
        { getHtag(3) }
    </div>
    )
}

export default App;
