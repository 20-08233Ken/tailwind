import Registrar_nav from '../../components/Others/Navigation/Registrar_nav.vue';
    import HE_OPI_1 from '../../Views/Registrar/HE_OPI_1.vue';
    import AE_OPI_1 from '../../Views/Registrar/AE_OPI_1.vue';
    import { markRaw } from "vue"
    import activityList from '../../components/Others/activityList.vue'

    
    const hold_oc_1 = markRaw(HE_OPI_1);
    import { useCookies } from 'vue3-cookies';

export default{
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    components:{
        Registrar_nav,
        HE_OPI_1,
        AE_OPI_1,
        activityList
    },

    data(){
        return{
            currentComponent:HE_OPI_1,
            activeBtn:1,
            user:'',
        }
    },
    methods:{
        showComponent(componentName, btnNumber){
            this.currentComponent  = componentName
            this.activeBtn = btnNumber
        },

    },
    mounted(){
        let userPosition = this.cookies.get('userPosition');
        this.user = userPosition
        console.log(userPosition)
    }
}