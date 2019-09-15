import React from 'react'
import { connect } from 'react-redux'

// 多了一些props属性
class Test2 extends React.Component {
    // this.props.plus
    render() {
        return (
            <React.Fragment>
                <div>Test</div>
                <div>Test1</div>
                <div>Test1</div>
                <div>Test1</div>
            </React.Fragment>
        )
    }
    componentDidMount() {
        console.log(this)
    }
}
export default connect((state)=>{
    return state
})(Test2)