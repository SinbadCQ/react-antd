import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, } from 'react-router-dom'
import routes from './router.js'
import NestedRoutes from './components/nestedRoutes/index'
import 'antd/dist/antd.min.css'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map((obj) => (
                            // 嵌套路由
                            <NestedRoutes exact {...obj} key={obj.component} />
                            // <Route {...obj} key={obj.component} />
                        ))
                    }
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
