import {createApp} from 'vue'
import {setupCalendar} from 'v-calendar';
import './style.css'
import App from './App.vue'
import 'v-calendar/style.css';
import {createPinia} from "pinia";

createApp(App)
    .use(createPinia())
    .use(setupCalendar, {})
    .mount('#app')