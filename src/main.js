import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/app.scss";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/';

const app = createApp(App)

app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
