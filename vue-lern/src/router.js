import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./start.vue";
import login from "./login.vue";
// import signup from "./signup.vue";
// import authvk from "./authvk.vue";
// import enterCode from "./enterCode.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        { path: '/login', component: login },
        // { path: '/signup', component: signup },
        // { path: '/authvk', component: authvk },
        { path: '/start', component: start},
        // { path: '/enterCode', component: enterCode}
    ]
})
