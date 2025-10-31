import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./module/start.vue";
// import login from "./legacy/login.vue";
import interests from "./module/interests.vue";
import myroutes from "./module/myroutes.vue";
import newroute from "./module/newroute.vue";
import readyroute from "./module/readyroute.vue"
import auth_callback from "@/api/auth_callback.vue";
// import signup from "./module/signup.vue";
// import authvk from "./legacy/authvk.vue";
// import enterCode from "./enterCode.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        // { path: '/login', component: login },
        // { path: '/signup', component: signup },
        //{ path: '/authvk', component: authvk },
        { path: '/start', component: start},
        { path: '/readyroute', component: readyroute},
        // { path: '/enterCode', component: enterCode},

        { path: '/interests', component: interests},
        { path: '/myroutes', component: myroutes},
        { path: '/newroute', component: newroute},

        { path: '/auth/callback', component: auth_callback },
    ]
})
