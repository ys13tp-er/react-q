import React, { Component } from 'react'
export default class Footer extends Component {
    // state = {
    //     title: '底部组件'
    // }
    constructor(props) {
        super(props)
        // Model
        this.state = {
            title: '底部组件123',
            bool: !0,
            arr: [1, 2, 3]
        }
    }
    render() {
        // View
        return (
            <div>
                <footer>{this.state.title}{this.props.title}</footer>
                <p>{this.state.bool ? '真的' : '假的'}</p>
                <ul>{
                    this.state.arr.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }</ul>
            </div>
        )
    }
}
// export default Footer