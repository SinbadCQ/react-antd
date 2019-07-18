import loadable from './components/loadable'

export default [
    {
        path: '/',
        component: loadable(() => import('./pages/home')),
        exact: true
    },
    {
        path: '/detail',
        component: loadable(() => import('./pages/detail'),),
        routes: [
            {path: '/detail/site', component: loadable(() => import('./pages/detail/site'))},
            {path: '/detail/activity', component: loadable(() => import('./pages/detail/activity'))}
        ],
    },
    {
        path: '/carousel',
        component: loadable(() => import('./pages/carousel')),
        exact: true
    }
]
