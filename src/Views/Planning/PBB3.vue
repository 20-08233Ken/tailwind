<script>

    import Navigation from '../../components/Others/Navigation.vue';
    import HigherEd from './Indicators/HigherEd.vue';
    import AdvanceEd from './Indicators/AdvanceEd.vue';
    import PBB_sideNav from '../../components/Others/PBB_sideNav.vue';
    export default{
        data(){
            return{
                currentComponent:null
            };
        },
        components:{
            Navigation,
            HigherEd,
            AdvanceEd,
            PBB_sideNav

        },
        watch:{
            '$route.query.program':{
                handler:function(value){
                    console.log(value)

                    if(value == "HigherEd"){
                        this.currentComponent = HigherEd

                    }else if(value == "AdvancedEd"){
                        this.currentComponent = AdvanceEd
                        
                    }
                },
                immediate:true,
                deep:true
            }
        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        },

        // mounted(){
        //     console.log("were")
        //     console.log(this.$route.query.program)
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


            <div class="flex w-8/12 ">
                <component :is="currentComponent"></component>
            </div>
        </section>

    </main>

</template>