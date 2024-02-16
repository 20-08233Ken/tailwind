<script setup>
    import Navigation from '../../components/Others/Navigation.vue';
    import LineGraph from '../../components/graph/lineGraph.vue'
    import Progress from '../../components/graph/progress.vue'
    import Progress2 from '../../components/graph/progress2.vue'
</script>

<template>
   <main class="w-full bg-gray-100">
        <Navigation/>

        <section class="w-full flex shadow-card2 bg-white rounded-b-2xl">
            <div class="w-5/12 px-6vw py-3vw flex flex-col justify-center">
                <h1 class="font-Header text-3xl text-Red-Darken">Performance-based Bonus</h1>
                <h2 class="font-Subheader">FY 2023</h2>
                <h2 class="mt-4 font-Subheader">Current Quarter</h2>
            </div>
            
            <div class="w-4/12">
                <LineGraph/>
                <span class="w-full justify-center flex items-center gap-4 relative bottom-8 ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </span>
                    <p class="text-sm">Current Activity of Offices for the week</p>
                </span>
            </div>

            <div class="w-3/12 flex flex-col items-center justify-center gap-8">
                
                <span class="bg-white shadow-card2 w-7/12 flex items-center h-14 rounded-lg">
                    <h5 class="w-9/12 flex items-center h-14 bg-Red-Rose text-white px-4 rounded-lg">Current Office Ranking</h5>
                    <h5 class="w-3/12 flex justify-center">1st</h5>
                </span>
                <span class="bg-white shadow-card2 w-7/12 flex items-center h-14 rounded-lg">
                    <h5 class="w-7/12 flex items-center h-14 bg-Red-Rose text-white px-4 rounded-lg">PBB Elgibility</h5>
                    <h5 class="w-5/12 flex justify-center text-green-900">Eligible</h5>
                </span>

            </div>
        </section>

        <section class="w-full flex gap-8 mt-8  bg-white shadow-card2">

            <div class="w-4/12 flex flex-col items-center">
                <h1 class="w-full font-Subheader text-lg bg-Red-Darken text-white pl-16 py-3">Progress</h1>
                <span class="w-full flex justify-center items-center">
                    <Progress/>
                    <h1 class="font-Subheader text-3xl flex flex-col justify-center items-center relative right-1/2">
                        50%
                        <p class="text-base">Completed</p>
                    </h1>
                </span>

                <p class="flex w-full items-center justify-center mr-24 text-Red-Rose">Overall PBB Progress Status  </p>
                <span class="flex w-full items-center justify-center">
                    <Progress2/>
                    <h1 class="font-Subheader text-3xl flex flex-col justify-center items-center relative right-1/2">
                        50%
                        <p class="text-base">Completed</p>
                    </h1>
                </span>

                <span class="flex w-9/12 flex-col gap-2">
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Performance Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="50" max="100"></progress>
                                        <p class="text-Red-Rose">50%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Process Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="75" max="100"></progress>
                                        <p class="text-Red-Rose">75%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Financial Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="35" max="100"></progress>
                                        <p class="text-Red-Rose">35%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Citizen / Client Satisfaction Reports</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="90" max="100"></progress>
                                        <p class="text-Red-Rose">90%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Agency Accountability</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                                        <p class="text-Red-Rose">100%</p>
                                    </span>
                                </span>
                </span>

            </div>

            <div class="w-8/12 ">
                <h1 class="font-Subheader text-lg bg-Red-Darken text-white pl-16 py-3">Tasks</h1>
               
            </div>

        </section>
   </main> 
</template>