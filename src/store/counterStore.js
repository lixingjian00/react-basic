// 实现步骤
// 1. 在组件中导入counterStore实例对象
// 2. 在组件中使用storeStore实例对象中的数据
// 3. 通过事件调用修改数据的方法修改store中的数据
// 4. 让组件响应数据变化


import { makeAutoObservable } from 'mobx'

class CounterStore {
    count = 0 // 2 定义数据
    constructor() {
        makeAutoObservable(this)  // 3 响应式处理
    }
    // 4 定义修改数据的方法
    addCount = () => {
        this.count++
    }
}
// 5 实例化 导出使用
const counterStore = new CounterStore()
export { counterStore }