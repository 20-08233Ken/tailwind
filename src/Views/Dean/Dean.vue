<script >

    import HE_OCI_1 from './HE_OCI_1.vue'; 
    import HE_OCI_2 from './HE_OCI_2.vue';
    import HE_OPI_1 from './HE_OPI_1.vue';
    import HE_OPI_2 from './HE_OPI_2.vue';
    
    import AE_OCI_1 from './AE_OCI_1.vue';
    import AE_OPI_1 from './AE_OPI_1.vue';
    import AE_OPI_2 from './AE_OPI_2.vue';
    import Navigation from '../../components/Others/Navigation.vue';
    import { markRaw } from "vue"

    const hold_oc_1 = markRaw(HE_OCI_1);

    export default{
        data(){
            return{
                currentComponent:HE_OCI_1,
                activeBtn:null
            }
        },
        components:{
            HE_OCI_1,
            HE_OCI_2,
            HE_OPI_1,
            HE_OPI_2,
            AE_OCI_1,
            AE_OPI_1,
            AE_OPI_2,
            Navigation,
            
        },
        methods:{
            showComponent(componentName, btnNumber){
                this.currentComponent = componentName
                this.activeBtn = btnNumber
            }
        }
        
    }
</script>

<template>

    <main class="w-full flex flex-col items-center">
    <Navigation/>
    <div class="w-7/12 flex flex-col items-center shadow-card2 px-16 py-16 mt-8">
        <h1 class="font-Header text-3xl text-Red-Rose text-center">Performace Result</h1>
        <p class="font-Subheader text-md text-Red-Darken text-center mt-2">Higher Education</p>
        
        <h3 class="w-full flex justify-center py-3 font-Subheader bg-Red-Darken text-white mt-12">Performace Indicator</h3>

        <div class="flex flex-col mt-8">

            <h2 class="font-Subheader text-Red-Darken">Higher Education</h2>

            <div class="w-full flex flex-wrap items-center mt-2">

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===1}" @click="showComponent('HE_OCI_1',1)">
                    <img id ="img-1" src="../../assets/img/icons8-license-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 1</h4>
                        <p class="text-sm  indicator_title" >First-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </button>

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===2}" @click="showComponent('HE_OCI_2',2)">
                    <img id ="img-1" src="../../assets/img/icons8-graduate-64.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Graduates (2 years prior) that are employed</p>
                    </span>
                </button>

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===3}" @click="showComponent('HE_OPI_1',3)">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Undergraduate students enrolled in CHED-identified and RDC-identified priority programs</p>
                    </span>
                </button>
                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100"  :class="{'active':activeBtn===4}" @click="showComponent('HE_OPI_2',4)">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Undergraduate programs with accreditation</p>
                    </span>
                </button>
            </div>


            <h2 class="font-Subheader text-Red-Darken mt-8">Advanced Education</h2>
            <div class="w-full flex flex-wrap items-center mt-2">

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===5}" @click="showComponent('AE_OCI_1',5)">
                    <img id ="img-1" src="../../assets/img/icons8-license-50.png " style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Graduate school faculty engaged in research work</p>
                    </span>
                </button>

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===6}" @click="showComponent('AE_OPI_1',6)">
                    <img id ="img-1" src="../../assets/img/icons8-graduate-64.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Graduate students enrolled in research degree program</p>
                    </span>
                </button>

                <button class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100" :class="{'active':activeBtn===7}" @click="showComponent('AE_OPI_2',7)">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Graduate programs with accreditation</p>
                    </span>
                </button>
  
            </div>



        </div>
    </div>

    <div class="w-7/12 flex flex-col shadow-card2 px-16 py-16 mt-8">
            <component :is="currentComponent"></component>
    </div>
</main>

</template>

<style scoped>
    .indicator_title{
        max-width: 13rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .active {
        background-color: rgb(207 250 254);
    
    }

</style>