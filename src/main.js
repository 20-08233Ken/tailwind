import { createApp } from 'vue'
import './style.css'
import './assets/sass/style.scss'
import App from './App.vue'
import router from './router'

import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)
app.use(router)
app.use(VCalendar, {})
// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.mount('#app')
