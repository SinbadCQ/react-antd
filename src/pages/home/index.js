import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { SubMenu } = Menu;
const {
    Header, Content, Footer, Sider,
} = Layout;

// 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
const mapStateToProps = (state) => {
    return {
        username: state.account.username,
        number: state.computed
    }
}

// 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userChange: () => dispatch({ type: 'USERNAME', text: '周星驰' }),
        passChange: (password) => dispatch({ type: 'password', password: password })
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { username, number, userChange } = this.props
        return (
            <div className="home">
                <Helmet>
                    <title>layout 布局</title>
                </Helmet>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Link to="/carousel">
                                    <Button>走马灯</Button>
                                </Link>
                                <Link to="/detail">
                                    <Button>详情页</Button>
                                </Link>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="danger">Danger</Button>
                                <Button type="danger" onClick={userChange}>用户名：{username}</Button>
                                <br></br>
                                <Button type="danger">{number}</Button>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)