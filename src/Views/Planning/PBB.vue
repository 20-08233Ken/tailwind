<script>

    import Navigation from '../../components/Others/Navigation.vue';
    import HigherEd from './Indicators/HigherEd.vue';
    import AdvanceEd from './Indicators/AdvanceEd.vue';
    export default{
        data(){
            return{
                currentComponent:null
            };
        },
        components:{
            Navigation,
            HigherEd,
            AdvanceEd

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
                <h4 class="w-8/12 bg-Red-Darken text-white px-4 py-1">Perfomance Results</h4>
                    <ul class="flex flex-col px-4">
                        <li class="py-1 w-8/12 "> <button @click="showComponent('HigherEd')">Higher Education</button></li>
                        <li class="py-1 w-8/12 "> <button @click="showComponent('AdvanceEd')">Advanced Education</button></li>
                        <li class="py-1 w-8/12 "> <button @click="showComponent('')">Research Services</button></li>
                        <li class="py-1 w-8/12 "> Technical Advisory Extension</li>
                    </ul>

                <h4 class="w-8/12 bg-Red-Darken text-white px-4 py-1 mt-6">Process Results</h4>
                    <p class="px-4 py-1 w-8/12 ">Re-certification of the QMS</p>  
                    

                <h4 class="w-8/12 bg-Red-Darken text-white px-4 py-1 mt-6"> Financial Results</h4>
                    <p class="px-4 py-1 w-8/12 ">Modified Form A for SUC's Performance Report</p>  

                
                <h4 class="w-8/12 bg-Red-Darken text-white px-4 py-1 mt-6">Citizens Client Satisfaction Results</h4>
                    <ul class="flex flex-col px-4">
                        <li class="py-1 w-8/12 ">Citizen / Client Satisfaction Report</li>
                        <li class="py-1 w-8/12 ">Summary Report of Complaints Received through #8888 Hotline</li>
                        <li class="py-1 w-8/12 ">Forms 1.0</li>
                    </ul>

                <h4 class="w-8/12 bg-Red-Darken text-white px-4 py-1 mt-6">Agency Accountabilities</h4>
                    <ul class="flex flex-col px-4">
                        <li  class="py-1 w-8/12 ">Updating of Transparency Seal</li>
                        <li  class="py-1 w-8/12 ">Compliance with the Freedom of Information (FOI) Program</li>
                        <li  class="py-1 w-8/12 ">Updating of Citizen’s or Service Charter</li>
                        <li  class="py-1 w-8/12 ">Compliance to Audit Findings and Liquidation of Cash Advances</li>
                        <li  class="py-1 w-8/12 ">Submission and Review of SALN</li>
                        <li  class="py-1 w-8/12 ">PhilGEPS posting of all invitations to bids and awarded contracts</li>
                        <li  class="py-1 w-8/12 ">Submission of FY 2022 Annual Procurement Plan-Common Use Supplies and Equipment (APP-CSE)</li>
                        <li  class="py-1 w-8/12 ">Undertaking of Early Procurement Activities covering 2022 Procurement Projects</li>
                    </ul>
            </div>


            <div class="flex w-8/12 ">
                <component :is="currentComponent"></component>
            </div>
        </section>

    </main>

</template>