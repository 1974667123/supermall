import Vue from "vue";
import VueRouter from "vue-router";
//引入懒加载，为了访问服务器的时候一个页面请求一次
const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
    //1.安装组件
Vue.use(VueRouter)
    //配置路由
const routes = [

    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]


//2.创建路由对象
const router = new VueRouter({

    routes,
    mode: 'history'


})




//3.导出
export default router