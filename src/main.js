import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import particles from "vue3-particles";

const app = createApp(App);

app.use(router, ).mount('#app');
app.use(particles);