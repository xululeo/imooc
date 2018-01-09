import React from 'react'
import {Button, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from "./index.redux"
import {Link, Route} from 'react-router-dom'
import App from './App'
import {logout} from "./Auth.redux"
import {Redirect} from 'react-router-dom'


@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <WingBlank>
                    <div>
                        <ul>
                            <li>
                                <Link to='/dashboard/App'>一营</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>二营</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>骑兵连</Link>
                            </li>
                        </ul>
                        <Route path="/dashboard/App" component={App}></Route>
                    </div>

                </WingBlank>
            </div>
        )

        return this.props.isAuth ? app : redirectToLogin

    }
}

const mapStateToProps = function (status) {
    return {num: status}
}

const actionCreators = {addGun, addGunAsync, removeGun}
Dashboard = connect(mapStateToProps, actionCreators)(Dashboard)
export default Dashboard