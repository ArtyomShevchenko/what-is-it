import { createApp } from 'vue';
import App from '@/App.vue';
import router from "@/routes.js";
import { MotionPlugin } from '@vueuse/motion';
import cors from 'cors'

import '@/css/bootstrap-grid.css';
import '@/css/fonts.css';

const app = createApp(App);

app.use(cors)
app.use(router);
app.use(MotionPlugin);

app.mount('#app');