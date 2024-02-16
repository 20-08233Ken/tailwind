


<template>
    <main class="w-full flex flex-col bg-grey-2 pb-6vw">
        <Navigation/>

        <section class="w-full flex ">
            <div class="w-9/12">

                <div class="flex flex-col  py-3vw pl-6vw "> 
                        <h1 class="w-8/12 font-Header text-4xl text-Red-Darken">OFFICE OF INSTITUTIONAL PLANNING AND DEVELOPMENT</h1>
                        <p class="font-Subheader mt-3 text-2xl">Campus: Central</p>

                        <h3 class="font-Header text-lg text-Red-Rose mt-6">Submissions</h3>

                        <div class="w-full flex gap-6 mt-4">
                    
                                <span class="flex gap-4 w-3/12 py-5 px-4 rounded-xl shadow-card2 bg-white" >
                                    <h3 class="font-Header text-Red-Darken text-3xl">QRPO</h3>
                                    <p>Quarterly</p>
                                </span>
                    
        
                            <span class="flex w-3/12 gap-4 py-5 px-4 rounded-xl shadow-card2 bg-white">
                                <router-link to="/pbb2" class="flex w-full gap-4">
                                    <h3 class="font-Header text-Red-Darken text-3xl">PBB</h3>
                                    <p>Performance-based Bonus(Q3)</p>
                                </router-link >
                            </span>
                        </div>

                        <h3 class="font-Header text-lg text-Red-Rose mt-9">Performance Statistics</h3>
                        
                        <div class="w-full flex gap-4 mt-4">
                            <span class="flex flex-col items-center px-9 py-9 w-3/12 bg-white shadow-card2 rounded-xl">
                                <div class="radial-progress" style="--value:25; --size:12rem; --thickness: 2rem; color: #d00412;" role="progressbar" >25%</div>
                                <p class="mt-4">Completion of overall data</p>
                            </span>
                            <span class="flex flex-col items-center  px-9 py-9 w-3/12  bg-white shadow-card2 rounded-xl">
                                <div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem; color: #d00412;" role="progressbar" >70%</div>
                                <p class="mt-4">PBB Grading: Non-Eligible</p>
                            </span>

                            <span class="flex flex-col gap-4 px-9 py-9 w-5/12  bg-white shadow-card2 rounded-xl">
                                <select class="select w-5/12 font-bold">
                                    <option disabled selected>Select year</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                </select>
                                <span class="flex w-11/12 items-center gap-6">
                                    <h6 class="text-Red-Rose">Q1</h6>
                                    <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                                    <p class="text-Red-Rose">100%</p>
                                </span>
                                <span class="flex w-11/12 items-center gap-6">
                                    <h6 class="text-Red-Rose">Q2</h6>
                                    <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                                    <p class="text-Red-Rose">100%</p>
                                </span>
                                <span class="flex w-11/12 items-center gap-6">
                                    <h6 class="text-Red-Rose">Q3</h6>
                                    <progress class="progress progress-error w-9/12" value="50" max="100"></progress>
                                    <p class="text-Red-Rose">50%</p>
                                </span>
                                <span class="flex w-11/12 items-center gap-6">
                                    <h6 class="text-Red-Rose">Q4</h6>
                                    <progress class="progress progress-error w-9/12" value="0" max="100"></progress>
                                    <p class="text-Red-Rose">0%</p>
                                </span>

                            </span>
                        </div>
                    </div>

                    <div class="w-full h-1vh mt-8 bg-white">
                                <h4 class="font-Subheader bg-Red-Darken text-white py-3 px-3vw" style="font-size: 18px;">MIS: Office Summary of Data</h4>

                                <table class="w-full " id="mis_table">
                                    <tr class="w-full py-2" style="background-color: #c4c4c4;" >
                                        <th class="w-4/12 py-2">Data title / name</th>
                                        <th class="w-8/12  py-2">Description </th>
                                    </tr>
                                    
                                    <tr>
                                        <td class="w-4/12 py-4 px-8">  <div class="skeleton h-9 " style="width: 90%;"></div></td>
                                        <td class="w-8/12 py-4 px-8"><div class="skeleton h-9 " style="width: 90%;"></div></td>
                                    </tr>
                                    <tr>
                                        <td class="w-4/12 py-4 px-8">  <div class="skeleton h-9 " style="width: 60%;"></div></td>
                                        <td class="w-8/12 py-4 px-8"><div class="skeleton h-9 " style="width: 60%;"></div></td>
                                    </tr>
                                    <tr>
                                        <td class="w-4/12 py-4 px-8">  <div class="skeleton h-9 " style="width: 65%;"></div></td>
                                        <td class="w-8/12 py-4 px-8"><div class="skeleton h-9 " style="width: 65%;"></div></td>
                                    </tr>
                                    <tr>
                                        <td class="w-4/12 py-4 px-8">  <div class="skeleton h-9 " style="width: 95%;"></div></td>
                                        <td class="w-8/12 py-4 px-8"><div class="skeleton h-9 " style="width: 95%;"></div></td>
                                    </tr>
                                </table>
                        </div>
            </div>

            <div class="w-3/12 flex flex-col px-8 py-4 bg-white fixed right-0  h-lvh shadow-card2">
                <span class="w-full">
                    <VCalendar transparent  expanded :attributes='attrs'/>
                </span>

                <h4 class="mt-6 font-Header text-Red-Rose" >Activities</h4>

                <span class="flex gap-4 mt-4 items-center ml-4">
                    <i class="text-Red-Darken">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                    </i>
                    <span>
                        <p class="font-Subheader ">Submission of PBB Documents</p>
                        <p class="text-sm">July 11,2024</p>
                    </span>
                </span>

                <span class="flex gap-4 mt-4 items-center ml-4">
                    <i class="text-Red-Darken">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                    </i>
                    <span>
                        <p class="font-Subheader ">Submission of PBB Documents</p>
                        <p class="text-sm">July 11,2024</p>
                    </span>
                </span>
                

            </div>
        </section>


    </main>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from '../../components/Others/Navigation.vue'
const attrs = ref([
  {
    key: 'today',
    highlight: 'red',
    dates: new Date(),
  },
]);
</script>

<style scoped>
    #mis_table > tr > td{
       border-width: 2px;
       border-color: red;
    }

    td:first-child,th:first-child {
    border-width: 0 2px 0 0;
    border-color: rgb(66, 66, 66);
    }
</style>