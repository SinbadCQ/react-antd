import React from "react"
import { Switch, Redirect } from 'react-router-dom'
import NestedRoutes from '../../components/nestedRoutes/index'

export default class Detail extends React.Component {
    render() {
        return (
            <div className="detail-page">
                <Switch>
                    {
                        this.props.routes.map((obj, i) => (
                            // 嵌套路由
                            <NestedRoutes {...obj} key={i} />
                        ))
                    }
                    <Redirect to="/detail" />
                </Switch>
            </div>
        )
    }
}
