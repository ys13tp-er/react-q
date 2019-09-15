import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

const Header = (props) => {
    return (
        <NavBar
            mode="dark"
            leftContent="Back"
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >NavBar</NavBar>
    )
}

export default Header
