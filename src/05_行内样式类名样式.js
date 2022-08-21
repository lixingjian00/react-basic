// 样式控制
// 行内(内联样式) 在元素身上绑定上style属性

// 类名样式 在元素身上绑定className属性
import './app.css';

const style1 = {
    color: 'red',
    fontSize: '30px'
}
const activeStyle = (flag) => {
    if (flag === true) {
        return 'active'
    }
    else {
        return ''
    }
}
// 动态控制类名

const activeFlag = true

function App() {
    return (
        <div className="App">
            <span style={style1}>测试内联样式</span>
            <span className={activeStyle(activeFlag)}>测试类名样式，方程。</span>
            <span className={activeFlag ? 'active' : ''}>测试类名样式，三元。</span>
        </div>
    )
}

export default App;
