<script setup>
    import Navigation from '../../components/Others/Navigation.vue';

    import Graph1 from '../../components/graph/Dashboard/graph1.vue'
    import Graph2 from '../../components/graph/Dashboard/graph2.vue'
    import Graph3 from '../../components/graph/Dashboard/graph3.vue'
    import Enrollment from '../../components/graph/Dashboard/enrollment.vue'
    import Graduates from '../../components/graph/Dashboard/graduates.vue'
    import Scholarship from '../../components/graph/Dashboard/scholarship.vue'
    import PassingRate from '../../components/graph/Dashboard/passing_rate.vue'
    import Research from '../../components/graph/Dashboard/research.vue'
    import Research2 from '../../components/graph/Dashboard/research2.vue'
    import Financial from '../../components/graph/Dashboard/financial.vue'
    import Footer from '../Footer.vue';
</script>

<template>
    <main class="flex flex-col w-100">
        <Navigation/>
        
        <section class="flex flex-col w-full pt-6vw px-6vw">
                <h1 class="text-Red-Darken font-Header text-5xl">University Management</h1>
                <h1 class="text-Red-Rose font-Header text-5xl mt-2">Information <span class="font-Header text-Red-Darken">System</span></h1>

                <div class="flex items-center ">
                    <p class="flex items-center w-3/12 mt-4 ">Central System for Managing and Processing data of Batangas State University</p>
                    <span class="flex w-9/12">
                        <ul class="flex justify-end w-full ">
                            <li class="text-center w-1/12 py-2 bg-Red-Darken text-white">Overview</li>
                            <li class="text-center w-1/12 py-2 ">QS Stars</li>
                            <li class="text-center w-1/12 py-2 ">THE</li>
                            <li class="text-center w-1/12 py-2 ">Scopus</li>
                            <li class="text-center w-1/12 py-2 ">Almetric</li>
                        </ul>
                    </span>
                </div>

                <h2 class="mt-16 font-Header text-2xl text-Red-Rose">Faculty Profile</h2>
                <div class="flex w-full">
                    <span class="w-2/4 mt-8">
                        <Graph1/>
                    </span>
                    <span class="w-2/4 mt-8">
                        <Graph2/>
                    </span>
                </div>

                <div class="flex w-full justify-center mt-24">
                        <Graph3/>
                </div>
        </section>

        <section class="px-6vw mt-8 bg-grey-2 pb-6vw">

            <h2 class="text-Red-Rose font-Header text-3xl mt-16 mb-8">College Statistics</h2>
            
            <div class="flex flex-wrap w-full gap-8 justify-center ">
                <span class =" flex w-5/12 justify-center items-center shadow-xl mt-8 bg-white">
                    <Enrollment/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl mt-8 bg-white">
                    <Graduates/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl mt-8 bg-white">
                    <Scholarship/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl mt-8 bg-white">s</span>

                <span class =" flex  shadow-md justify-center items-center shadow-xl mt-8 bg-white py-24 " style="width: 85%;">
                    <PassingRate/>
                </span>
            </div>
        </section>

        <!-- Extension Services -->
        <section class="w-full px-6vw mt-4 bg-white flex flex-col items-center pb-16">
            <h2 class="self-start mt-8 text-Red-Rose font-Header text-2xl">Extension Services</h2>

            <div class="w-full flex flex-wrap pb-8 mt-8 ">
                <div class="w-full flex gap-8 justify-center">
                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/7.png" alt="" style="width: 20%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Fund Rasing for Community Development</p>
                    </span>

                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/2.png" alt="" style="width: 16%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">9</p>
                        <p>Clean and Green community / Coastal Cleanup</p>
                    </span>

                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/4.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Tree Planting</p>
                    </span>

                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/6.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Food and Nutrition / Health and Sanitation / Material and Child Care</p>
                    </span>
                </div>

                <div class="w-full flex gap-8 mt-4 justify-center">
                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/1.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Youth sports, development, environment camps</p>
                    </span>

                    
                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/3.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Gift Giving Activity</p>
                    </span>

                    <span class="flex items-center w-20% shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/5.png" alt="" style="width: 10%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p>Blood Donation</p>
                    </span>
                </div>
            </div>

            <h2 class="self-start text-Red-Rose font-Header text-2xl mt-16">Accreditation Status of Academic Programs</h2>

            <div class="flex flex-wrap justify-center w-3/4 gap-8 mt-8">
                <span class="bg- flex flex-col justify-center items-center w-20%  py-8 rounded-xl shadow-card2 ">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">6</h2>
                    <p class="text-sm mt-2 text-center" >ABET Accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Qualified for Level IV</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">3</h2>
                    <p class="text-sm mt-2 text-center">Level IV Phase 1</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Qualified for Level III</p>
                </span>


                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">6</h2>
                    <p class="text-sm mt-2 text-center">Level III Re-accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Level II Re-accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">3</h2>
                    <p class="text-sm mt-2 text-center">Level II Accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center w-20%  px-16 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Candidates</p>
                </span>
            </div>
        </section>

        <!-- Accreditation Status -->
        <section class="w-full px-6vw bg-grey-2 flex flex-col items-center">
            <h2 class="self-start font-Subheader text-Red-Rose text-2xl mt-24">Research</h2>

            <div class="w-full flex ">
                <span class="flex w-2/4 justify-center items-center">
                    <Research/>
                </span>
                <span class="flex w-2/4 justify-center items-center">
                    <Research2/>
                </span>
            </div>

            <div class="mt-24 flex w-3/4justify-center gap-8 pb-16">

                <span class="flex flex-col text-center items-center justify-center w-1/4 shadow-card2 py-8 rounded-2xl ">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researcherswith research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-1/4 shadow-card2 py-8 rounded-2xl">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-1/4 shadow-card2 py-8 rounded-2xl">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-1/4 shadow-card2 py-8 rounded-2xl">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>
            </div>
        </section>
        
        <section class="w-full px-6vw bg-white flex flex-col items-center pb-16">
            <h2 class="self-start font-Subheader text-Red-Rose text-2xl mt-24">Financial Status</h2>     
            <div class="flex justify-center items-center w-3/4 ">
                <Financial/>
            </div>
        </section>

        <footer>
            <Footer/>
        </footer>
   
            
        
    </main>

</template>