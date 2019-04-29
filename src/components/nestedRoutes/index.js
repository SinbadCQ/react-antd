import React from 'react'
import { Route } from 'react-router-dom'

const routes = (e) => {
    const attrs = {
        path: e.path,
        component: e.component,
        render: props => <React.Component />
    }
    return <Route {...attrs} />
}

export default routes