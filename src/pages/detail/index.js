import React from 'react'
import { Switch, Link } from "react-router-dom"
import NestedRoutes from '../../components/nestedRoutes/index'

export default class Detail extends React.Component {
    render() {
        return (
            <div className="detail">
                <Link to="/detail/site">
                    1级详情页
                </Link>
                <Switch>
                    {
                        this.props.routes.map((obj, i) => (
                            <NestedRoutes {...obj} key={i} exact />
                        ))
                        // this.props.routes.map((obj, i) => {
                        //     console.log(obj, i)
                        // })
                    }
                </Switch>
            </div>
        )
    }
}
