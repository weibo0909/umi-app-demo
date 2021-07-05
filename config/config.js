export default {
    // 路由配置：路径相对于 src/pages
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                {path: '/', component: './index'},
                {path: '/users', component: './users/index'},
                {path: '/goods', component: './goods/goods'}
            ]
        }
    ],
    antd: {},
    dva: {}
};
