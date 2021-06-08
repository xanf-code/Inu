import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import naive from "naive-ui";
import VueGtag from "vue-gtag";
import { GA_KEY } from "../keys/keys"

const app = createApp(App);
app.use(router);
app.use(naive);
app.use(VueGtag, {
    config: {
        id: GA_KEY,
    },
}, router);
app.mount('#app');
