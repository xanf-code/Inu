import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";

const app = createApp(App);
app.use(router);
app.use(VueGtag, {
    config: {
        id: process.env.VUE_APP_GA_KEY,
    },
}, router);
app.mount('#app');