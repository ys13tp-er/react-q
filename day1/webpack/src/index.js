import React from 'react'
import ReactDOM from 'react-dom'
//  React.createElement('div', null, 'hello world')
// M
// 引入组件

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// M -> V
// V
const JSX = () => {
    const methods = {
        // 过滤器
        currency(num) {
            return `￥${num}`
        },
        rIf(bool) {
            return bool ? <p>这是真的</p> : <p>这是假的</p>
        },
        rFor(arr) {
            return arr.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
    }
    const data = {
        name: 'yao',
        num: 20,
        bool: !0,
        arr: [1, 2, 3]
    }
    return (
        <div>
            <p name={data.name}>{data.name}</p>
            <p name={methods.currency(data.num)}>{methods.currency(data.num)}</p>
            <p>{methods.currency(999)}</p>
            <p>{data.bool ? '真' : '假'}</p>
            <div>{methods.rIf(data.bool)}</div>
            <div>{(() => {
                let name = 'jing';
                return `${name}ing`
            })()}</div>
            <ul>
                {methods.rFor(data.arr)}
            </ul>
        </div>
    )
}
console.log(JSX)
ReactDOM.render(
    <div>
        {Header()}
        {Header()}
        {Header()}
        {Header({
            title: '微信',
            age: 16
        })}
        <Header title="微信4" age="16" />
        <Header title="微信3" age="16" />
        <Header title="微信2" age="16" />
        <Header title="微信1" age="16" />
        <Footer title={<p>支付宝</p>} age="16" />
    </div>,
    document.getElementById('root')
);