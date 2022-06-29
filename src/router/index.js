import Vue from "vue";
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import ArticleType from '../views/ArticleType.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserInfo from '../views/UserInfo.vue'
import Mails from '../views/Mails.vue'
import Mail from '../views/Mail.vue'
import Admin from '../views/admin/Admin.vue'
import WriteArticle from '../views/admin/WriterArticle.vue'
import AdminArticles from '../views/admin/AdminArticles.vue'
import AdminUsers from '../views/admin/AdminUsers.vue'



Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/articles',
        name: "Articles",
        component: Articles
    },
    {
        path: '/article/:id',
        name: "article",
        component: Article,
    },
    {
        path: '/articleType',
        name: 'ArticleType',
        component: ArticleType
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/userInfo/:username',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '/mail',
        name: 'Mails',
        component: Mails
    },
    {
        path: '/mailGetter/:id',
        name: 'Mail',
        component: Mail
    },
    {
        path: '/admin',
        component: Admin,
        children: [
            {
                path: 'article',
                component: WriteArticle
            },
            {
                path: 'articles',
                component: AdminArticles
            },
            {
                path: 'users',
                component: AdminUsers
            }
        ]
    },


]

const router = new VueRouter({
    routes,
    mode: 'history'

});
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }


export default router