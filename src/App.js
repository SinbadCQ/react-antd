import React from 'react'
// import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from './router'
import NestedRoutes from './components/nestedRoutes/index'
import 'antd/dist/antd.min.css'

export default function App() {
    return (
        <Router>
            <Switch>
                {
                    routes.map((obj) => (
                        // 嵌套路由
                        <NestedRoutes {...obj} key={obj.path} />
                    ))
                }
                <Redirect from="/" exact to="/home" />
            </Switch>
        </Router>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
