<script>

    import Navigation from '../../../components/Others/Navigation.vue';



    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';
    export default{
        data(){
            return{
                currentComponent:null,

                AE_OCI_1:[
                    {
                    status:"submitted",
                    title:"Annex A PSIPOP",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Annex C Faculty Loadings",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: SIC Projects",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: Eggciting Project",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: VERMI 2",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: ROBIN",
                    date:"07-12-2023"
                    }, {
                    status:"submitted",
                    title:"Abstract: Road safety for children",
                    date:"07-12-2023"
                    },                              
            ],

                AE_OPI_1:[
                    {
                    status:"submitted",
                    title:"Enrollment List - Pablo Borbon",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Alangilan Enrollment Summary First Semester AY 2021-2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"ARASOF-Nasugbu Summary of Enrollment List 1st Semester 2021 - 2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"JPLPC Malvar Enrollment Summary First Semester AY 2021-2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Lipa Enrollment Summary",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Curriculum: Bachelor of Law",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Curriculum: Masters in Information Technology (MIT)",
                    date:"07-12-2023"
                    },
            ],

            AE_OPI_2:[             {
                    status:"submitted",
                    title:"	Summary of Completed Accreditation Survey 2020",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Summary of Completed Accreditation Survey 2021",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Summary Accre Cert for Main II revised",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Summary Accre Cert for Main I revised",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"BatStateU Accreditation Schedule for FY 2022",
                    date:"07-12-2023"
                    },
                ]
            };
        },
        components:{
            Navigation,
            PBB_sideNav,


        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        }
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
            
                <h3 class="font-Header text-Red-Rose text-xl">Advanced Education</h3>

                <div class="w-full flex-col overflow-x-auto">
                    <h4 class="flex gap-4 items-center mt-4 font-Subheader"> 
                        <span class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </span>
                        Outcome Indicator 1: Percentage of graduate school faculty engaged in research work
                    </h4>

                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr v-for="(x, index) in AE_OCI_1" :key="index">
                            <td><span class="green"></span></td>
                            <td>{{ x.title }}</td>
                            <td>{{x.date}}</td>
                        </tr>
                        <!-- <tr>
                            <td> <span class="green"></span></td>
                            <td>Annex C Faculty Loadings </td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Abstract: SIC Projects </td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Abstract: Eggciting Project</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Abstract: VERMI 2</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Abstract: ROBIN</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Abstract: Road safety for children</td>
                            <td>07-12-2023</td>
                        </tr> -->
                    </table>

                    <span class="flex w-full gap-4 justify-end mt-4">
                        <router-link 
                            :to="{
                                name:'PBB_Summary',
                                query:{
                                    program:'PBB_Summary3'
                                }
                                }"
                        >
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> Views</button>
                        </router-link>
                    </span>
                </div>

                


                <div class="w-full flex-col mt-8 overflow-x-auto">
                    <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                        <span class="text-Red-Rose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        Outcome Indicator 1 (State Universities): Percentage of graduate students enrolled in research degree program
                    </h4>
                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr>
                            <td><span class="green"></span></td>
                            <td>Enrollment List - Pablo Borbon </td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Alangilan Enrollment Summary First Semester AY 2021-2022</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>ARASOF-Nasugbu Summary of Enrollment List 1st Semester 2021 - 2022</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>JPLPC Malvar Enrollment Summary First Semester AY 2021-2022</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>Lipa Enrollment Summary </td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>Curriculum: Bachelor of Law</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>Curriculum: Masters in Information Technology (MIT)</td>
                            <td>07-12-2023</td>
                        </tr>

                    </table>

                    <span class="flex w-full gap-4 justify-end mt-4">
                        <router-link to="/PBB_Summary">
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> View</button>
                        </router-link>
                    </span>

                </div>

                <div class="w-full flex-col mt-8 overflow-x-auto">
                    <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                        <span class="text-Red-Rose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        Output Indicator 2: Percentage of graduate programs with accreditation
                    </h4>

                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr>
                            <td><span class="green"></span></td>
                            <td>Summary of Completed Accreditation Survey 2020 </td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Summary of Completed Accreditation Survey 2021</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="green"></span></td>
                            <td>Summary Accre Cert for Main II revised</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>Summary Accre Cert for Main I revised</td>
                            <td>07-12-2023</td>
                        </tr>
                        <tr>
                            <td> <span class="red"></span></td>
                            <td>BatStateU Accreditation Schedule for FY 2022</td>
                            <td>07-12-2023</td>
                        </tr>
                    </table>
                    <span class="flex w-full gap-4 justify-end mt-4">
                        <router-link to="/PBB_Summary">
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> View</button>
                        </router-link>
                    </span>
                </div>
                
            </div>
        </section>

    </main>

</template>

<style scoped>

    table,tr, td{
        border-collapse: collapse;
      
    }
    td{
        padding:10px 0 ;
    }
    td:first-child{
        width:5%;
    
    }
    td:nth-child(2){
        width:70%;
        padding-left: 2%;
      
    }

    td:last-child{
       
        width:15%;
        text-align: center;
       
        /* padding-right: 5%; */
    }

    .green{
            display: flex;
            background-color: forestgreen;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 50%;
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