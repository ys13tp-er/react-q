import React from 'react'
import { Route, Link } from "react-router-dom";
const Acp = () => {
    return (
        <div>a组件</div>
    )
}

const Bcp = () => {
    return (
        <div>b组件</div>
    )
}
export default () => {
    return (
        <div>
            Topic页面
            <Link to="/topic/a">a</Link>
            <Link to="/topic/b">b</Link>
            <Route path="/topic/a" component={Acp} />
            <Route path="/topic/b" component={Bcp} />
        </div>
    )
}