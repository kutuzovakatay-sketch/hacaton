import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./start.vue";
import login from "./login.vue";
import signup from "./signup.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        { path: '/login', component: login },
        { path: '/signup', component: signup },
    ]
})
