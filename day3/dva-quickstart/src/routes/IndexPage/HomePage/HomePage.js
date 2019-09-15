import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import menu from './menu'
import { Route, Link } from 'dva/router';
import ComplaintPage from './ComplaintPage/ComplaintPage'
import ProblemPage from './ProblemPage/ProblemPage'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class HomePage extends Component {
    state = {
        menu
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}

                    >
                        {this.state.menu.map((item) => {
                            return (
                                <SubMenu
                                    key={item.key}
                                    title={item.title}
                                >{
                                        item.options.map((item) => {
                                            return <Menu.Item key={item.key}>
                                                <Link to={item.url}>
                                                    {item.title}
                                                </Link>
                                            </Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Route path="/home/complaint" component={ComplaintPage} />
                        <Route path="/home/problem" component={ProblemPage} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}