import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./module/start.vue";
import login from "./legacy/login.vue";

// import signup from "./signup.vue";
// import authvk from "./authvk.vue";
// import enterCode from "./enterCode.vue";
// import signup from "./signup.vue";
// import authvk from "./authvk.vue";

import interests from "./module/interests.vue";
import myroutes from "./module/myroutes.vue";
import newroute from "./module/newroute.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        { path: '/login', component: login },
        // { path: '/signup', component: signup },
        // { path: '/authvk', component: authvk },
        { path: '/start', component: start},
        // { path: '/enterCode', component: enterCode}
        { path: '/interests', component: interests},
        { path: '/myroutes', component: myroutes},
        { path: '/newroute', component: newroute}
    ]
})
