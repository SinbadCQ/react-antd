import React from 'react'
import { Route } from 'react-router-dom'

export default (route) => {
    const attrs = {
        path: route.path,
        exact: route.exact,
        render: props => <route.component {...props} routes={route.children} />
    }
    return <Route {...attrs} />
}