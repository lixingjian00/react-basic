import {useState, useEffect} from "react";

function Test () {
    useEffect( ()=> {
        let timer = setInterval(()=>{
            console.log('定时器执行了')
        }, 1000) //[]:定时器执行一次
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>this is test</div>
    )
}
// 在useEffect的return里面再写一个函数 在这里做清除
function App () {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {flag ? <Test></Test> : null}
            <button onClick={ () => setFlag(!flag)}>switch</button>
        </div>
    )
}
export default App