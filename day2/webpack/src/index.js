import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import Notice from './components/Notice/Notice'
import 'antd-mobile/dist/antd-mobile.css';
// import 'antd/dist/antd.css';
import './index.css'
import Footer from './components/Footer/Footer'

ReactDOM.render(
    <div>
        <Header />
        <Notice message="你好啊" />
        <Footer />
    </div>,
    document.getElementById('root')
);