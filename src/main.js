import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/app.scss";
import axios from 'axios'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

axios.defaults.baseURL = 'http://localhost:8000/api/';


const options = {
    // You can set your default options here
};

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(Toast, options);

import "bootstrap/dist/js/bootstrap.js";
