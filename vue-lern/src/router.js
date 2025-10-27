import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./start.vue";
import login from "./login.vue";
import signup from "./signup.vue";
import authvk from "./authvk.vue";
import interests from "./interests.vue";
import myroutes from "./myroutes.vue";
import newroute from "./newroute.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        { path: '/login', component: login },
        { path: '/signup', component: signup },
        { path: '/authvk', component: authvk },
        { path: '/start', component: start},
        { path: '/interests', component: interests},
        { path: '/myroutes', component: myroutes},
        { path: '/newroute', component: newroute}
    ]
})
