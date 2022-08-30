// 实现步骤
// 1 在组件中导入counterStore实例对象
// 2 在组件中使用storeStore实例对象中的数据
// 3 通过事件调用修改数据的方法修改store中的数据
// 4 让组件响应数据变化
import {counterStore} from "./store/counterStore";
import { observer } from 'mobx-react-lite'
// 导入中间件 连接mobx和react 完成响应式变化
import {obserber} from 'mobx-react-lite'

function App() {
    return (
        <div className="App">
            {/*1 渲染store中的count*/}
            {counterStore.count}
            {/*2 点击事件触发action函数 修改count值*/}
            <button onClick={counterStore.addCount}>+</button>
        </div>
    )
}
// 包裹组件让视图响应数据变化
export default observer(App)