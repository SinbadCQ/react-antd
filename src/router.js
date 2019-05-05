import loadable from './loadable'

export default [
    {
        path: '/',
        component: loadable(() => import('./pages/home')),
        children: [
            { path: '/home', component: loadable(() => import('./pages/home')) },
        ]
    },
    {
        path: '/detail',
        component: loadable(() => import('./pages/detail')),
        children: [
            {path: '/detail/site', component: loadable(() => import('./pages/detail/site'))},
            {path: '/detail/activity', component: loadable(() => import('./pages/detail/activity'))}
        ],
    },
    {
        path: '/carousel',
        component: loadable(() => import('./pages/carousel'))
    },
]
