/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

export const adminRouterChildren = [
    {
        path: '/admin/home',
        name: 'home111',
        component: () => import("@/views/home/index.vue"),
        icon: 'jiaozi',
        meta: {
            title: '首页',
            showInMenu: false
        }
    },
    {
        path: '/admin/iconfont',
        name: 'iconfont',
        component: () => import("@/views/iconfont/index.vue"),
        icon: 'xuegao',
        meta: {
            title: '图标'
        }
    },
    {
        path: '/admin/mockTable',
        name: 'mockTable',
        component: () => import("@/views/mockTable/index.vue"),
        icon: 'kele',
        meta: {
            title: '虚拟表格'
        }
    },
    {
        path: '/admin/canvas',
        name: 'canvas',
        component: () => import("@/views/canvas/index.vue"),
        icon: 'kafei',
        meta: {
            title: 'canvas'
        }
    },
    {
        path: '/admin/worker',
        name: 'worker',
        component: () => import("@/views/worker/index.vue"),
        icon: 'tilamisu',
        meta: {
            title: 'worker'
        }
    },
    {
        path: '/admin/fabric',
        name: 'fabric',
        component: () => import("@/views/fabric/index.vue"),
        icon: 'chengzhi',
        meta: {
            title: 'fabric'
        }
    },
    {
        path: '/admin/directive',
        name: 'directive',
        component: () => import("@/views/directive/index.vue"),
        icon: 'doujiang',
        meta: {
            title: 'directive'
        }
    },
    {
        path: '/admin/cc-scroll',
        name: 'cc-scroll',
        component: () => import("@/views/cc-scroll/index.vue"),
        icon: 'hebaodan',
        meta: {
            title: 'cc-scroll'
        }
    },
    {
        path: '/admin/testApi',
        name: 'testApi',
        component: () => import("@/views/testApi/index.vue"),
        icon: 'zhouzi',
        meta: {
            title: 'testApi'
        }
    },
    {
        path: '/admin/cp',
        name: 'cp',
        component: () => import("@/views/cp/index.vue"),
        icon: 'zhouzi',
        meta: {
            title: 'cp'
        }
    },
    {
        path: '/admin/draggable',
        name: 'draggable',
        redirect: '/admin/draggable/a',
        // component: () => import("@/views/draggable/index.vue"),
        meta: {
            title: '组件-拖拽'
        },
        children: [
            {
                path: '/admin/draggable/a',
                name: 'draggable1',
                component: () => import("@/views/draggable/index.vue"),
                meta: {
                    title: '组件-拖拽1'
                },
            },
            {
                path: '/admin/draggable/b',
                name: 'draggable2',
                component: () => import("@/views/draggable/draggable.vue"),
                meta: {
                    title: '组件-拖拽2'
                },
            }
        ]
    },
    {
        path: '/admin/hooks',
        name: 'hooks',
        redirect: '/admin/hooks/a',
        // component: () => import("@/views/draggable/index.vue"),
        meta: {
            title: 'hooks'
        },
        children: [
            {
                path: '/admin/hooks/a',
                name: 'hooks1',
                component: () => import("@/views/hooks/index.vue"),
                meta: {
                    title: 'hooks1'
                },
            },
            {
                path: '/admin/hooks/b',
                name: 'hooks2',
                component: () => import("@/views/hooks/hooks.vue"),
                meta: {
                    title: 'hooks2'
                },
            }
        ]
    },
    // {
    //     path: '/admin/decorators',
    //     name: 'decorators',
    //     component: () => import("@/views/decorators/index.vue"),
    //     icon: 'zhouzi',
    //     meta: {
    //         title: '装饰器'
    //     }
    // },
]
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/home',
        component: () => import("@/layout/index.vue"),
        meta: {
            title: 'admin页面'
        },
        children: adminRouterChildren
    },
    {
        path: '/game',
        name: 'game',
        component: () => import("@/game/index.vue"),
        meta: {
            title: '游戏'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import("@/views/404/index.vue"),
        meta: {
            title: '404'
        }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
