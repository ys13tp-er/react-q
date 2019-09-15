# HOC && 高阶组件

本质是JS的闭包，把一个Test类组件放入一个HOC函数里面，刚好这个HOC函数是返回一个HOCTest类组件，HOCTest是包含了Test类组件，所以它可以赋予它一些新的props，从而让Test多了很多props方法，有更多的功能，所以变成高阶组件。

```js
import React from 'react'
const HOC = (Comp) => {
    let state = {
        name: 'yao'
    }
    return class HOCTest extends React.Component {
        render() {
            return (
                <Comp name={state.name} plus={(a, b) => {
                    return a + b
                }} skill="ps" />
            )
        }
    }
}
// 多了一些props属性
class Test extends React.Component {
    // this.props.plus
    render() {
        return (
            <div>Test</div>
        )
    }
}
// 高阶组件
// export default Test
export default HOC(Test)
```

# ref

类似于vue里面的ref，如果你需要在react操作dom，你可以借助它实现节点驱动
```js
class Test extends React.Component {
    // this.props.plus
    render() {
        return (
            <div ref="test">Test</div>
        )
    }
    componentDidMount() {
        // 访问节点
        this.refs.test.style.color = 'red'
    }
}
```

# Fragment

用于组件内部可以拥有多个根节点
```html
<>
    <div ref="test">Test</div>
    <div>Test1</div>
    <div>Test1</div>
    <div>Test1</div>
</>
//用于替代div包裹内部组件
<React.Fragment>
    <div ref="test">Test</div>
    <div>Test1</div>
    <div>Test1</div>
    <div>Test1</div>
</React.Fragment>
```