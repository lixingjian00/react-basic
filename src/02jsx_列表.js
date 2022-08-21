// 识别常规变量
const name = 'Lydia'
// 原生方法调用
const getAge = () => {
  return 3
}
// 三元运算符
const flag = false


// react完成列表渲染
// map方法
// 注意事项 遍历列表时需要一个类型为num/str不可重复的key，提高diff性能
// key仅在内部使用，不在真实DOM结构中
// 测试我的账号

const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]


function App() {
  return (
    <div className="App">
      app
      { name }
      { getAge() }
      { flag? 'nice':'ewwww' }
      <br></br>

      <ul>
        { songs.map(song => <li key = {song.id}>{song.name}</li>)}
      </ul>



    </div>
  )
  // ()里的就是JSX
}

export default App;
