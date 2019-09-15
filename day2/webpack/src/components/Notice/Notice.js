import React, { Component } from 'react'
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import Child from '../Child/Child'
const Fn = () => {
    console.log(1)
}
class Notice extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            text: 1,
            bool: false,
            content: 'abc',
            Fn() {
                console.log(3)
            }
        }
        console.log(this)
    }
    componentDidMount() {
        // window.setInterval(() => {
        //     // this.text = '12313'
        //     this.setState({
        //         // 你需要更改的值
        //         text: ++this.state.text,
        //         bool: !this.state.bool
        //     }, () => {
        //         // 更改状态完之后的回调函数
        //         // console.log(this.state.bool)
        //     })
        // }, 1000)
    }
    // 让组件决定是否更新
    // shouldComponentUpdate() {
    //     if (this.state.text < 10) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    Fn() {
        this.setState({
            text: 8
        })
        // vue会自动帮你劫持this，让它指向组件实例化对象
        console.log(this)
    }
    getInputValue(param1, params2, e) {
        console.log(param1, params2, e.target.value)
        this.setState({
            text: e.target.value
        })
    }
    render() {
        let { text } = this.state
        return (
            <div>
                {/* 相当于v-if */}
                {/* {this.state.bool ? <Child message={text} /> : ''} */}
                <WhiteSpace size="lg" />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    {text}
                </NoticeBar>
                <WhiteSpace size="lg" />
                <NoticeBar mode="link" onClick={() => alert('1')}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
                <WhiteSpace size="lg" />
                <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>
                <WhiteSpace size="lg" />
                <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
                    Customized icon.
    </NoticeBar>
                <WhiteSpace size="lg" />
                <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
                    Closable demo for `actionText`.
    </NoticeBar>
                <WhiteSpace size="lg" />
                <NoticeBar mode="link" action={<span>去看看</span>}>
                    Link demo for `actionText`.
    </NoticeBar>
                <button onClick={Fn}>ok</button>
                <button onClick={this.Fn.bind(this)}>ok</button>
                <button onClick={this.state.Fn}>ok</button>
                <input value={this.state.text} onChange={this.getInputValue.bind(this, 789, this.state.content)} />
            </div>
        )
    }
}
// console.log(new Notice)
export default Notice