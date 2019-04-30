import React from 'react'
import { Route } from 'react-router-dom'

const routes = (route) => {
    const attrs = {
        path: route.path,
        exact: route.exact,
        render: props => <route.component {...props} routes={route.routes} />
    }
    return <Route {...attrs} />
}

export default routes