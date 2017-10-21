//导入vue
import Vue from 'vue';
//导入App.vue
import App from './App.vue';
//导入router
import VueRouter from 'vue-router';
Vue.use(VueRouter)
    //导入login.vue
import login from './components/admin/account/login.vue';
//导入layout.vue;
import layout from './components/admin/layout.vue';

//导入dooslist.vue
import goodslist from './components/admin/goods/goodslist.vue';
var router = new VueRouter({
    routes: [
        { name: 'default', path: '/', redirect: '/admin' },
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'layout',
            path: '/admin',
            component: layout,
            children: [{
                name: 'goodslist',
                path: 'goodslist',
                component: goodslist
            }]
        },
    ]
});



// 2.0 axios的使用
// 2.0.1 导入axios包
import axios from 'axios';
// 2.0.2 设定axios的基本的url请求前缀
axios.defaults.baseURL = 'http://157.122.54.189:9095';

// 2.0.3 想要在将来的每个子组件中的方法中均可以使用 this.$http去调用其方法执行ajax请求
//就要将axios对象挂载到vue的原型属性$http上
Vue.prototype.$http = axios;

// 2.0.4 绑定到vue上
Vue.use(axios);



//导入饿了么
import ElementUI from 'element-ui';
//导入全局样式
import '../static/theme_rms/index.css'
//导入饿了么css控制样式
import '../static/css/site.css';
//绑定
Vue.use(ElementUI)







new Vue({
    el: '#app',
    // 使用app这个组件对象
    // es5的写法
    // render:function(create){create(App);}
    router,
    // es6的写法
    render: create => create(App)
});