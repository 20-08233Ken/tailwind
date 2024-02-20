<script >
    import Target1 from '../../../components/graph/PBB/target1.vue'
    import Target2 from '../../../components/graph/PBB/target2.vue'
    import Target3 from '../../../components/graph/PBB/target3.vue'
    import Target4 from '../../../components/graph/PBB/target4.vue'
    import AdvanceEd from '../Indicators/AdvanceEd.vue'
    import HigherEd from '../Indicators/HigherEd.vue'

    import {markRaw} from 'vue'

    const hold_AdvanceEd = markRaw(AdvanceEd);
    const hold_HigherEd = markRaw(HigherEd);
    export default{
        data(){
            return{
                currentComponent:null
            };
        },
        components:{
            Target1,
            Target2,
            Target3,
            Target4,
            AdvanceEd,
            HigherEd

        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        }
    }
    </script>

<template>
                <div class="w-full flex flex-col">
                    <h2 class="font-Subheader mt-4 text-lg">Outcome Indicators</h2>

                    <h5 class="w-8/12 font-Subheader mt-4 ml-4">1.  Percentage of graduate school faculty engaged in research work</h5>
                    
                    <span class="w-full flex ml-8">
                        <ul class="w-5/12 flex flex-col mt-4">

                            <router-link :to="{
                                name:'pbb3',
                                query:{
                                    program:'AdvancedEd'
                                }
                                
                            }">
                            <li> 
                                <span class="green"></span>
                                <p>BatStateU Pablo Borbon</p>
                            </li>
                            </router-link>

                            <router-link to="/pbb3">
                            <li> 
                                <span class="green"></span>
                                BatStateU Lipa
                            </li>
                            </router-link>

                            <router-link to="/pbb3">
                            <li> 
                                <span class="green"></span>
                                BatStateU Nasugbu
                            </li>
                            </router-link>  
                            <router-link to="/pbb3">
                            <li> 
                                <span class="green"></span>
                                BatStateU Malvar
                            </li>
                            </router-link>
                            <router-link to="/pbb3">
                            <li> 
                                <span class="green"></span>
                                BatStateU Alangilan
                            </li>
                            </router-link>
                            
                        </ul>

                        <span class="flex w-7/12 justify-center relative">
                            <Target1/>
                            <h5 class="flex flex-col font-Subheader text-center text-3xl" style="position: absolute;top:40%">69%
                                <br><span class="text-sm"> FYI TARGET</span>
                            </h5>
                        </span>
                    </span>




                </div>

                <div class="w-full flex flex-col">
                    <h2 class="font-Subheader mt-24 text-lg">Output Indicators</h2>

                    <h5 class="font-Subheader mt-4 ml-4 w-8/12">1. Outcome Indicator 1 (State Universities): Percentage of graduate students enrolled in research degree program</h5>
                    
                    <span class="w-full flex ml-8">
                        <ul class="w-5/12 flex flex-col mt-4">
                            <li> 
                                <span class="green"></span>
                                <p>BatStateU Pablo Borbon</p>
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Lipa
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Nasugbu
                            </li>

                            <li> 
                                <span class="green"></span>
                                BatStateU Malvar
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Alangilan
                            </li>
                        </ul>

                        <span class="flex w-7/12 justify-center relative">
                            <Target3/>
                            <h5 class="w-8/12 flex flex-col font-Subheader text-center text-3xl" style="position: absolute;top:40%">79.22%
                                <br><span class="text-sm"> FYI TARGET</span>
                            </h5>
                        </span>
                    </span>


                    <h5 class="font-Subheader mt-24 ml-4">2. Percentage of graduate programs with accreditation</h5>
                    
                    <span class="w-full flex ml-8">
                        <ul class="w-5/12 flex flex-col mt-4">
                            <li> 
                                <span class="green"></span>
                                <p>BatStateU Pablo Borbon</p>
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Lipa
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Nasugbu
                            </li>

                            <li> 
                                <span class="green"></span>
                                BatStateU Malvar
                            </li>
                            <li> 
                                <span class="green"></span>
                                BatStateU Alangilan
                            </li>
                        </ul>

                        <span class="flex w-7/12 justify-center relative">
                            <Target4/>
                            <h5 class="flex flex-col font-Subheader text-center text-3xl" style="position: absolute;top:40%">98%
                                <br><span class="text-sm"> FYI TARGET</span>
                            </h5>
                        </span>
                    </span>

                </div>

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