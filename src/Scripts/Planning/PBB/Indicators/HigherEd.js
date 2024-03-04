// import OPI from '../HigherEducation/OPI.vue';
// import OCI from '../HigherEducation/OCI.vue';

import OPI from '../../../../Views/Planning/HigherEducation/OPI.vue'
import OCI from '../../../../Views/Planning/HigherEducation/OCI.vue'



// import PBB_Summary2 from '../PBB/PBB_Summary2.vue';

import {markRaw} from 'vue'

const hold_OCI = markRaw(OCI);
const hold_OPI = markRaw(OPI);
export default{
    data(){
        return{
            currentComponent:OPI,
            activeButton:1
        };
    },
    components:{
        OCI,
        OPI
    },
    methods:{
        showComponent(componentName, btnNumber){
            this.currentComponent = componentName
            this.activeButton = btnNumber
        }

    }
}