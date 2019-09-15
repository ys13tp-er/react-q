import React, { Component } from 'react'
export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '底部组件123',
            bool: !0,
            arr: [1, 2, 3],
            html: <p>123</p>
        }
    }
    render() {
        return (
            <div>
                <p style={{ color: 'red' }}>1.v-for</p>
                <ul>{
                    this.state.arr.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }</ul>
                <hr />
                <ul>{
                    ((self) => {
                        ;;;;;;; let arr = this.state.arr;;;;;;
                        let newArr = [];;;;;;;;;;;;;;;;;;;;;;;
                        for (let i = 0; i < arr.length; i++) {
                            newArr.push(<li key={i}>{arr[i]}</li>)
                        }
                        return newArr
                    })(this)
                }</ul>
                <p style={{ color: 'red' }}>2.v-if</p>
                {this.state.bool ? (
                    <p>真的</p>
                ) : (
                        <p>假的的</p>
                    )}
                <button onClick={() => {
                    this.setState({
                        bool: !this.state.bool
                    })
                }}>ok</button>
                <p style={{ color: 'red' }}>3.v-show</p>
                <p style={{
                    display: this.state.bool ? 'block' : 'none'
                }}>显示或者隐藏</p>
                <button onClick={() => {
                    this.setState({
                        bool: !this.state.bool
                    })
                }}>ok</button>
                <p style={{ color: 'red' }}>4.v-else</p>
                <p>{
                    ((self) => {
                        switch (self.state.bool) {
                            case true:
                                return <span>真的</span>
                            default:
                                return <span>假的</span>
                        }
                    })(this)
                }</p>
                <p style={{ color: 'red' }}>5.v-html</p>
                <div>{this.state.html}</div>

            </div>
        )
    }
}
// export default Footer