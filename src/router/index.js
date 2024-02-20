import { createRouter,createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from '../Views/Home.vue'
import Dashboard from '../Views/Planning/Dashboard.vue'
import Dataset from '../Views/Planning/Dataset.vue'
import PBB from '../Views/Planning/PBB.vue'

import PPB_Higher from '../Views/Planning/PBB/PPB_Higher.vue'
import PPB_Adv from '../Views/Planning/PBB/PPB_Adv.vue'
import PBB_Summary from '../Views/Planning/PBB/PBB_Summary.vue'
import PBB3 from '../Views/Planning/PBB3.vue'
import PBB_Research from '../Views/Planning/PBB/PBB_Research.vue'


import Offices from '../Views/Planning/Offices.vue'
import Dean from '../Views/Dean/Dean.vue'
import Profile from '../Views/Planning/Profile.vue'


import Advanced from '../Views/Planning/Indicators/AdvanceEd.vue'
import Higher from '../Views/Planning/Indicators/HigherEd.vue'
import ResearchServices from '../Views/Planning/Indicators/ResearchServices.vue'
const router = createRouter ({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/',
            name:'home',
            component:Home

        },  
        {
            path:'/dean',
            name:'dean',
            component:Dean

        },
        {
            path:'/profile',
            name:'profile',
            component:Profile

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
                    path:'/PPB_Higher',
                    name:'PPB_Higher',
                    component:PPB_Higher

                },
                {
                    path:'/PPB_Adv',
                    name:'PPB_Adv',
                    component:PPB_Adv

                },
                {
                    path:'/PBB_Summary',
                    name:'PBB_Summary',
                    component:PBB_Summary

                },
                {
                    path:'/pbb3',
                    name:'pbb3',
                    component:PBB3

                },
                {
                    path:'/PBB_Research',
                    name:'PBB_Research',
                    component:PBB_Research

                },
                {
                    path:'/ResearchServices',
                    name:'ResearchServices',
                    component:ResearchServices

                },
        {
            path:'/offices',
            name:'offices',
            component:Offices

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