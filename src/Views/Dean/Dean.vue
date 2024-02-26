<script >

    import HE_OCI_1 from './HE_OCI_1.vue'; 
    import HE_OCI_2 from './HE_OCI_2.vue';
    import HE_OPI_1 from './HE_OPI_1.vue';
    import HE_OPI_2 from './HE_OPI_2.vue';
    
    import AE_OCI_1 from './AE_OCI_1.vue';
    import AE_OPI_1 from './AE_OPI_1.vue';
    import AE_OPI_2 from './AE_OPI_2.vue';

    import Research_Service from './Research.vue'

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
            Research_Service,
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
    
    <section class='w-full flex gap-8'>

        <div class="flex flex-col w-3/12  pl-8 h-dvh">

            <h3 class="w-full flex  py-3 font-Subheader mt-8" >Performace Indicator</h3>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Higher Education</h4>
        
            <ul class="nav-list mt-2 flex flex-col gap-1">
              <li class="px-4 py-2" :class="{'active':activeBtn===1}" @click="showComponent('HE_OCI_1',1)">First-time licensure exam-takers that pass the licensure exams </li>
              <li class="px-4 py-2" :class="{'active':activeBtn===2}" @click="showComponent('HE_OCI_2',2)">Graduates (2 years prior) that are employed</li>
              <li class="px-4 py-2" :class="{'active':activeBtn===3}" @click="showComponent('HE_OPI_1',3)">Undergraduate students enrolled in CHED-identified and RDC-identified priority programs</li>
              <li class="px-4 py-2" :class="{'active':activeBtn===4}" @click="showComponent('HE_OPI_2',4)">Undergraduate programs with accreditation</li>
            </ul>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8">Advanced Education</h4>
        
            <ul class="mt-2 flex flex-col gap-1">
               <li class="px-4 py-2" :class="{'active':activeBtn===5}" @click="showComponent('AE_OCI_1',5)">Graduate school faculty engaged in research work</li>
               <li class="px-4 py-2" :class="{'active':activeBtn===6}" @click="showComponent('AE_OPI_1',6)">Graduate students enrolled in research degree program</li>
               <li class="px-4 py-2" :class="{'active':activeBtn===7}" @click="showComponent('AE_OPI_2',7)">Graduate programs with accreditation</li>
            </ul>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8">Research Extension</h4>
        
            <ul class="px-4 mt-2 flex flex-col gap-1">
                <li  class="px-4 py-2" :class="{'active':activeBtn===8}" @click="showComponent('Research_Service',8)">Research Service</li>

            </ul>



        </div>
        <div class="w-7/12 flex justify-end gap-4">

            <div class="w-full flex shadow-card2 px-16 py-16 mt-4">
                <span class="flex w-full flex-col   ">
                    <component :is="currentComponent"></component>
                 </span>

            </div>

        </div>

        <div class="flex w-20% shadow-card2">
            <span class="flex w-full ">

            </span>
        </div>
    </section>


 
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
        /* background-color: rgb(207 250 254); */
        background-color:rgb(255, 240, 221);
    
    }

    .nav-list > li:hover{
        background-color:rgb(255, 240, 221);
        

    }

</style>