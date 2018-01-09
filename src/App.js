import React from 'react'
import {Button, WhiteSpace, WingBlank} from 'antd-mobile'
import { connect } from 'react-redux'
import {addGun, removeGun, addGunAsync} from "./index.redux"

@connect(
    state => ({num: state.counter}),
    {addGun, addGunAsync, removeGun}
)
class App extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const num = this.props.num;
        const addGun = this.props.addGun;
        const removeGun = this.props.removeGun;
        const addGunAsync = this.props.addGunAsync;
        return (
            <div>
                <WingBlank>
                    <h1>现在有{num}把机关枪</h1>
                    <Button type="primary" onClick={addGun}>加机关枪</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={removeGun}>减机关枪</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={addGunAsync}>过会加机关枪</Button>
                </WingBlank>
            </div>
        )
    }
}


export default App