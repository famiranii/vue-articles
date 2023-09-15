import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  position: 'top-right'
};

const app = createApp(App);
app.use(router).use(Toast, options);
app.mount('#app');
