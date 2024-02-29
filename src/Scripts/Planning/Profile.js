import Navigation from '../../components/Others/Navigation.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';
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
              ])
        }
    },
    components:{
        Navigation,
        Planning_nav
    },
    mounted(){
        let userCookies = this.cookies.get('userCookies');
        let userPosition = this.cookies.get('userPosition');
        this.user = userPosition
        console.log(this.user)
    }
}