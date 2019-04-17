import loadable from './loadable'

const routes = [{
        path: '/',
        component: loadable(() => import('./pages/index/index'))
    },
    {
        path: '/detail',
        component: loadable(() => import('./pages/detail/index'))
    }];

export default routes