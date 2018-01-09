import React from 'react'
import {Button, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {login, getUserData} from "./Auth.redux"
import {Redirect} from 'react-router-dom'


@connect(
    state => state.auth,
    {login,getUserData}
)

class Auth extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount(){
        this.props.getUserData();
    }

    render() {

        return (
            <div>
                <h2>我的名字是{this.props.user}</h2>
                {this.props.isAuth ? <Redirect to='/dashboard'/> : null}
                <p>你没有权限，请登录</p>
                <WingBlank>
                    <Button type='primary' onClick={this.props.login}>登录</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Auth