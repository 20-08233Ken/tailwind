import { createRouter,createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from '../Views/Home.vue'
import Dashboard from '../Views/Planning/Dashboard.vue'
import Dataset from '../Views/Planning/Dataset.vue'
import PBB from '../Views/Planning/PBB.vue'

import Advanced from '../Views/Planning/Indicators/AdvanceEd.vue'
import Higher from '../Views/Planning/Indicators/HigherEd.vue'

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

        },
        {
            path:'/dataset',
            name:'dataset',
            component:Dataset

        },
        {
            path:'/pbb',
            name:'pbb',
            component:PBB

        },
        {
            path:'/advancedEd',
            name:'advancedEd',
            component:Advanced

        },
        {
            path:'/higherEd',
            name:'higherEd',
            component:Higher

        },

        
        // }
    ]

})

export default router