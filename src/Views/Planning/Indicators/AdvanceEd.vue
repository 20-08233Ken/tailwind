<script>
    import OPI from '../AdvancedEducation/OPI.vue';
    import OCI from '../AdvancedEducation/OCI.vue';

    export default{
        data(){
            return{
                currentComponent:null,
                activeBtn:null
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
</script>

<template>
    <div class="flex flex-col w-full">
        <p class="text-Red-Rose text-xl font-Header">Advanced Education</p>

        <span class="w-100 flex mt-4 gap-3">
            <button :class="{ 'active': activeBtn === 1 }" @click="showComponent('OPI',1)" class="border-1 w-2/12 py-2 rounded-md bg-white">Output Indicator</button>
            <button :class="{ 'active': activeBtn === 2 }" @click="showComponent('OCI',2)" class="border-1 w-2/12 py-2 rounded-md bg-white" >Outcome Indicator</button>
        </span>

        <div class="w-full">

            <component :is="currentComponent"></component>

        </div>

    </div>
    
</template>
<style scoped>
.active {
  background-color: #D00412;
  color: white;
 
}
</style>