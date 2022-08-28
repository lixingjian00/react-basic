import {useWindowScroll} from "./hooks/useWindowScroll";
import {useLoacalStorage} from "./hooks/useLoacalStorage";

function App () {
    const [y] = useWindowScroll()
    const [message, setMessage] = useLoacalStorage('hook-key', 'like you')
    setTimeout (()=>{
        setMessage(('love you'))
    }, 5000)
    return (
        <div style={{height: '12000px'}}>
            {y} {message}
        </div>
    )
}
export default App