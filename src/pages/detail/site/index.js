import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from 'antd'

const mapStateToProps = (state) => {
    return {
        number: state.todos,
        username: state.account
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userChange: () => dispatch({type: 'USERNAME', text: '刘德华'})
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
        const {number, username, userChange} = this.props
        return (
            <div className="site">
                <Link to="/detail/activity">
                    场地详情页 <br />
                    {username}{number}
                </Link>
                <Button type="dashed" onClick={userChange}>Dashed</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)