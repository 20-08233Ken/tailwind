import { createRouter,createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from '../Views/Home.vue'
import Dashboard from '../Views/Planning/Dashboard.vue'
const router = createRouter ({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/',
            name:'home',
            component:Home

        },  
        {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard

        }
        
        // }
    ]

})

export default router