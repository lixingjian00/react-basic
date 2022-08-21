// 条件渲染
// 技术方案 三元表达式 逻辑与

// 三元 满足则渲染span标签
const flag  = true

// &&

function App() {
  return (
    <div className="App">
      { flag ? (
        <div>
          <span>
            this is a span
          </span>
        </div>): null}


        {flag && <span>this is a span</span>}
    </div>
  )
  // ()里的就是JSX
}

export default App;
