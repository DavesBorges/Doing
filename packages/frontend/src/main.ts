import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import { VueQueryPlugin } from '@tanstack/vue-query';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App).use(VueQueryPlugin).use(BootstrapVue3).use(router).mount('#app');
