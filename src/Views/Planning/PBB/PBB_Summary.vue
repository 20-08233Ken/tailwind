<script>

    import Navigation from '../../../components/Others/Navigation.vue';
    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';

    import Target1 from '../../../components/graph/PBB/target1.vue'
    import Target2 from '../../../components/graph/PBB/target1.vue'

    import PPB_Summary2 from './PBB_Summary2.vue'
    import PPB_Summary3 from './PBB_Summary3.vue'

    import {ref} from "vue";
    

    export default{
        data(){
            return{
                
                currentComponent:  null,
                selectedProgram:null
            };
        },
        components:{
            Navigation,
            PBB_sideNav,
            Target1,
            Target2,
            PPB_Summary2,
            PPB_Summary3


        },
        watch:{
            selectedProgram(componentName){

                if(componentName === "Higher Education Program"){
                    this.currentComponent = PPB_Summary2
                    
                }else if(componentName === "Advanced Education Program"){
                    this.currentComponent = PPB_Summary3
                  
                }

            },

            '$route.query.program':{
                handler: function (value){
                    console.log(value)
                    if(value == "PBB_Summary2"){

                        this.currentComponent = PPB_Summary2;
                        this.selectedProgram = "Higher Education Program"
                    }
                    else if(value == "PBB_Summary3"){
                        this.currentComponent = PPB_Summary3;
                        this.selectedProgram = "Advanced Education Program"
                    }
                },
                deep:true,
                immediate:true,
            }
        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        },

 
        // mounted(){


            
        //     if( this.$route.query.program = "PPB_Summary2"){
        //         this.currentComponent = PPB_Summary2;
        //         this.selectedProgram = "Higher Education Program"
        //         console.log(this.$route.query.program)
        //     }
        //     else if( this.$route.query.program = "PPB_Summary3"){
        //         this.currentComponent = PPB_Summary3;
        //         this.selectedProgram = "Advanced Education Program"
        //         console.log(this.$route.query.program)
        //     }else{
        //         console.log("none")
        //     }
           
        
        // }
    }

</script>

<template>
    <main class="w-full flex flex-col">
        <Navigation/>
      
        <section class="w-full flex  px-6vw pt-6vw">
            <div class="w-2/4">
                <h1 class="font-Header text-4xl text-Red-Darken">Performanced-Based Bonus</h1>
                <h4 class="font-Subheader text-Red-Rose">Current Quarter: Q1</h4>
                <p>FY 2023</p>
            </div>

            <div class="flex gap-1 w-2/4 justify-end items-center">
                <button class="bg-Red-Rose text-white w-3/12 h-10 text-sm rounded-t-lg">Status Dashboard</button>
                <button class="bg-Red-Rose text-white w-3/12 h-10 text-sm rounded-t-lg">Submit</button>
            </div>

        </section>

        <section class="w-full flex px-6vw py-3vw">
            <div class="flex flex-col w-4/12">
                <PBB_sideNav/>
            </div>


            <div class="flex w-8/12 flex-col">
            
                <h1 class="font-Header text-Red-Rose text-xl">
                    Modified Form A1: <br>State Universities and Colleges Bureaus/Office Performance Report
                </h1>
                <p>User id: {{ $route.query.program }}</p>
                <select class="select select-bordered w-full max-w-xs mt-4 bg-Red-Darken text-white " v-model="selectedProgram" >
                    <option>Higher Education Program</option>
                    <option >Advanced Education Program</option>
                    <option >Research Program</option>
                    <option >Technical Advisory Extension Program</option>
                </select>.

                <component :is="currentComponent"></component>
            </div>

            
        </section>

    </main>

</template>

<style scoped>


    li{
        display: flex;
        align-items: center;
        margin-top: 10px;
        gap: 1.5rem;
    
    }
    .green{
            display: flex;
            background-color: forestgreen;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

    .red{
            display: flex;
            background-color: red;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 50%;
    }
</style>