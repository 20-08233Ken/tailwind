import OPI from '../../../../Views/Planning/AdvancedEducation/OPI.vue';
import OCI from '../../../../Views/Planning/AdvancedEducation/OCI.vue';
import {markRaw} from 'vue'

const hold_OCI = markRaw(OCI);
const hold_OPI = markRaw(OPI);
export default{
    data(){
        return{
            currentComponent:OPI,
            activeBtn:1
        };
    },
    components:{
        OCI,
        OPI
    },
    methods:{
        showComponent(componentName,btnNumber){
            this.currentComponent = componentName
            this.activeBtn = btnNumber
            
        }

    }
}