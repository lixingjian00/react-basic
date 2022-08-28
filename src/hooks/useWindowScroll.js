import {useState} from "react";

export function useWindowScroll() {
    const [y, sety] = useState(0)
    // 在滚动行为发生时 不断获取滚动值 交给y
    window.addEventListener('scroll', ()=>{
        const h = document.documentElement.scrollTop  // 取当前到顶部距离
        sety(h)
    })
    return [y]
}