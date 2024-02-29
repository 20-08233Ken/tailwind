import HE_OCI_1 from '../../Views/Dean/HE_OCI_1.vue'; 
import HE_OCI_2 from '../../Views/Dean/HE_OCI_2.vue';
// import HE_OPI_1 from '../../Views/Dean/HE_OPI_1.vue'; Registar
// import HE_OPI_2 from '../../Views/Dean/HE_OPI_2.vue'; QAM

import AE_OCI_1 from '../../Views/Dean/AE_OCI_1.vue';
// import AE_OPI_1 from '../../Views/Dean/AE_OPI_1.vue';Registrar
// import AE_OPI_2 from '../../Views/Dean/AE_OPI_2.vue';QAM

import Research_Service from '../../Views/Dean/Research.vue'
import calendar from '../../components/Others/calendar.vue';

import activityList from '../../components/Others/activityList.vue'

import Navigation from '../../components/Others/Navigation.vue';
import Dean_nav from '../../components/Others/Navigation/Dean_nav.vue';
import { markRaw } from "vue"
import { useCookies } from 'vue3-cookies';

const hold_oc_1 = markRaw(HE_OCI_1);

export default{
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    data(){
        return{
            currentComponent:HE_OCI_1,
            activeBtn:1,
            user:'',

            sampleData:[
                {
                    id:1,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Missing"
                },
                {
                    id:2,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Late"
                },
                {
                    id:3,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Completed"
                },
                {
                    id:4,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Missing"
                },
                {
                    id:5,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Late"
                },
                {
                    id:6,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Completed"
                },
            ]
        }
    },
    components:{
        HE_OCI_1,
        HE_OCI_2,
        // HE_OPI_1,
        // HE_OPI_2,
        AE_OCI_1,
        // AE_OPI_1,
        // AE_OPI_2,
        // Research_Service,
        Navigation,
        Dean_nav,
        calendar,
        activityList
        
    },
    methods:{
        showComponent(componentName, btnNumber){
            this.currentComponent = componentName
            this.activeBtn = btnNumber
        }
    },
    mounted(){
        let userPosition = this.cookies.get('userPosition');
        this.user = userPosition
    }
    
}