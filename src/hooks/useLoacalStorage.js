import {useEffect, useState} from "react";

export function useLoacalStorage(key, defaultValue) {
    const [message, setMessage] = useState(defaultValue)
    // 只要message变化，会自动同步到local
    // 有依赖项
    useEffect(() => {
        window.localStorage.setItem(key, message)
    }, [message])
    return [message, setMessage]
}

// 函数如何调用
// 函数返回值
// 形参
// hook