import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { ObserveVisibility } from 'vue-observe-visibility';
import VueApexCharts from "vue3-apexcharts";
import naive from "naive-ui";

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(naive);
app.directive('observe-visibility', {
    beforeMount: (el, binding, vnode) => {
        vnode.context = binding.instance;
        ObserveVisibility.bind(el, binding, vnode);
    },
    updated: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
});
app.component('vue-observe-visibility', ObserveVisibility);

app.mount('#app');
