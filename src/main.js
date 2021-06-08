import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueApexCharts from "vue3-apexcharts";
import naive from "naive-ui";
import VueGtag from "vue-gtag";
import { GA_KEY } from "../keys/keys.js"

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(naive);
app.use(VueGtag, {
    config: {
        id: GA_KEY,
    },
}, router);
console.log(GA_KEY);
app.mount('#app');
