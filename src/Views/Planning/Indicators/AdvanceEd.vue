<script>
    import OPI from '../AdvancedEducation/OPI.vue';
    import OCI from '../AdvancedEducation/OCI.vue';

    export default{
        data(){
            return{
                currentComponent:null
            };
        },
        components:{
            OCI,
            OPI
        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }

        }
    }
</script>

<template>
    <div class="flex flex-col w-full">
        <p class="text-Red-Rose text-xl font-Header">Advanced Education</p>

        <span class="w-100 flex mt-4 gap-3">
            <button @click="showComponent('OPI')" class="border-1 w-2/12 py-2 rounded-md bg-white ">Output Indicator</button>
            <button @click="showComponent('OCI')" class="border-1 w-2/12 py-2 rounded-md bg-white">Outcome Indicator</button>
        </span>

        <div class="w-full">

            <component :is="currentComponent"></component>

        </div>

    </div>
    
</template>