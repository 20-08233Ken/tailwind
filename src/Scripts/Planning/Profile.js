import Navigation from '../../components/Others/Navigation.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';
import notification from '../../components/Profile/notification.vue'
import activities from '../../components/Profile/activities.vue'
import MainProfile from '../../Views/Planning/Profile/main.vue'
import user_management from '../../Views/Planning/Profile/user_management.vue'
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';


// import Navigation from '../../components/Others/Navigation'
// import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';


export default{
    
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    data(){
        return{
            user:"",
            attrs: ref([
                {
                  key: 'today',
                  highlight: 'red',
                  dates: new Date(),
                },
              ]),

            currentComponent:MainProfile
        }
    },
    methods:{
        showComponent(getComponent){
            this.currentComponent =getComponent
        }
    },
    components:{
        Navigation,
        Planning_nav,
        notification,
        activities,
        MainProfile,
        user_management
    },
    mounted(){
        let userCookies = this.cookies.get('userCookies');
        let userPosition = this.cookies.get('userPosition');
        this.user = userPosition
        console.log(this.user)
    }
}