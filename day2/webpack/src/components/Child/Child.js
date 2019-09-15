import React, { Component } from 'react'
class Child extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    // 收到props的话就会触发
    componentWillReceiveProps(props) {
        console.log(this.props)
    }
    componentWillUnmount() {
        console.log('触发销毁生命周期')
    }
    render() {
        return (
            <div>{this.props.message}</div>
        )
    }
}
export default Child