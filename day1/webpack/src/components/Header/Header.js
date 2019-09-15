import React from 'react'
// React.createElement('header', null, '微信')
const Header = (props) => {
    let style = {
        height: '50px',
        width: '100%',
        lineHeight: '50px',
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white'
    }
    return (
        <header style={style}>{props ? props.title : '支付宝'}</header>
    )
}

export default Header
