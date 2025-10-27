import {createRouter, createWebHashHistory}  from 'vue-router';
import start from "./start.vue";
import login from "./login.vue";
<<<<<<< HEAD
// import signup from "./signup.vue";
// import authvk from "./authvk.vue";
// import enterCode from "./enterCode.vue";
=======
import signup from "./signup.vue";
import authvk from "./authvk.vue";
import interests from "./interests.vue";
import myroutes from "./myroutes.vue";
import newroute from "./newroute.vue";
>>>>>>> eaad6fb60c7dd647be5adafbc2c210caf386ac9f

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/tourism', component: start, alias: '/' },
        { path: '/login', component: login },
        // { path: '/signup', component: signup },
        // { path: '/authvk', component: authvk },
        { path: '/start', component: start},
<<<<<<< HEAD
        // { path: '/enterCode', component: enterCode}
=======
        { path: '/interests', component: interests},
        { path: '/myroutes', component: myroutes},
        { path: '/newroute', component: newroute}
>>>>>>> eaad6fb60c7dd647be5adafbc2c210caf386ac9f
    ]
})
