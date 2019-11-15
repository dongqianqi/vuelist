import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'

import detail from '@/components/detail'
import about from '@/components/about'
const User = {
    template: '<div><h1>User {{ $route.params.id }}</h1><router-view/></div>'
}
const UserProfile = { template: '<div>User:第一个UserProfile子组件</div> ' }
const UserPosts = { template: '<div>User：第二个UserPosts组件</div>' }
const fbox = {
    template: '<div><h1>父组件： 我是父组件</h1> <router-view/></div>'
}
const sononebox = {
    template: '<div><h1>第一个子组件</h1></div>'
}
const sontwobox = {
    template: '<div><h1>第二个子组件</h1></div>'
}
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/first',
            name: 'first',
            component: first
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/about/:id',
            name: 'about',
            component: about
        },
        {
            path: '/user/:id',
            component: User,
            children: [{
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                },
                {
                    path: '/fbox',
                    component: fbox,
                    children: [
                        { path: '/', name: 'sononebox', component: sononebox },
                        { path: '/sontwobox', name: 'sontwobox', component: sontwobox },
                    ]
                }
            ]
        },
    ]

})