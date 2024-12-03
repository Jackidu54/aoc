import {createApp} from 'vue'
import {setupCalendar} from 'v-calendar';
import './style.css'
import App from './App.vue'
import 'v-calendar/style.css';

createApp(App)
    .use(setupCalendar, {})
    .mount('#app')