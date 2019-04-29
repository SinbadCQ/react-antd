import loadable from './loadable'

const routes = [
    {
        path: '/',
        component: loadable(() => import('./pages/index/index')),
        routes: [
            {path: 'site', component: loadable(() => import('./pages/detail/site/index'))},
            {path: 'activity', component: loadable(() => import('./pages/detail/activity/index'))}
        ]
    },
    {
        path: '/detail',
        component: loadable(() => import('./pages/detail/index')),
        routes: [
            {path: 'site', component: loadable(() => import('./pages/detail/site/index'))},
            {path: 'activity', component: loadable(() => import('./pages/detail/activity/index'))}
        ]
    },
    {
        path: '/carousel',
        component: loadable(() => import('./pages/carousel/index'))
    },
];

export default routes