import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from 'antd'
import './index.scss'

const mapStateToProps = (state) => {
    return {
        account: state.account,
        number: state.computed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userChange: () => dispatch({ type: 'username', text: '刘德华' })
    }
}

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { number, account, userChange } = this.props
        return (
            <div className="site">
                <Link to="/detail/activity">
                    场地详情页 <br />
                    {account.username}{number}
                </Link>
                <Button type="dashed" onClick={userChange}>Dashed</Button>
                <div className="btn">
                    自定义按钮
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)