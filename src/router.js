import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/index/index'
import Detail from './pages/detail/index'

const routeList = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/detail',
        component: Detail
    },
];

class routes extends React.Component {
    render() {
        return (
            routeList.map((value, index, arr) => (
                <Route exact path={value.path} component={value.component} key={value.component} />
            ))
        )
    }
}

export default routes
