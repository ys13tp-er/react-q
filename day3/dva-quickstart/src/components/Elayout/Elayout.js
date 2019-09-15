import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Switch, Link } from 'dva/router';
import HomePage from '../../routes/IndexPage/HomePage/HomePage'
import MinePage from '../../routes/IndexPage/MinePage/MinePage'
import SettingPage from '../../routes/IndexPage/SettingPage/SettingPage'
const { Header } = Layout;



export default class Elayout extends Component {
    state = {
        menus: [{
            title: '首页',
            url: '/home'
        }, {
            title: '我的',
            url: '/mine'
        }, {
            title: '设置',
            url: '/setting'
        }]
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        style={{ lineHeight: '64px' }}
                    >
                        {
                            this.state.menus.map((item, index) => {
                                return (<Menu.Item key={index}>
                                    <Link to={item.url}>
                                        {item.title}
                                    </Link>
                                </Menu.Item>)
                            })
                        }
                    </Menu>
                </Header>
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route path="/mine" component={MinePage}></Route>
                    <Route path="/setting" component={SettingPage}></Route>
                </Switch>
            </Layout>
        )
    }
} 