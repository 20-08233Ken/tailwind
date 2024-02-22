<script >
    import Navigation from '../../components/Others/Navigation.vue';
    import Graph1 from '../../components/graph/FYDP/graph1.vue'

    export default{
        data(){
            return{
                active_Circle:1,
                active_Year:null,
            }
        },
        components:{
            Navigation,
            Graph1
        },

        methods:{
            showComponent(circle, year){
                this.active_Circle = circle
                this.active_Year = year
              
            }
        }
    
    }
</script>

<template>
        <main class="w-full flex flex-col">
            <Navigation/>

            <section class="section-1 w-full flex justify-center items-center h-56 " >

                <div class="flex flex-col justify-center items-center ">
                    <h5 :class="{'active_year':active_Year===1, 'in_year': active_Year !== 1}">2023</h5>
                    <button :class="{'active':active_Circle===1, 'not_active': active_Circle !== 1}" @click="showComponent(1,1)">
                    </button>
                </div>
                <span></span>

                <div class="flex flex-col justify-center items-center">
                    <h5 :class="{'active_year':active_Year===2, 'in_year': active_Year !== 2}">2024</h5>
                    <button :class="{'active':active_Circle===2, 'not_active': active_Circle !== 2}" @click="showComponent(2,2)"></button>
                </div>
                <span></span>


                <div class="flex flex-col justify-center items-center">
                    <h5 :class="{'active_year':active_Year===3, 'in_year': active_Year !== 3}">2025</h5>
                    <button :class="{'active':active_Circle===3, 'not_active': active_Circle !== 3}" @click="showComponent(3,3)"></button>
                </div>
                <span></span>

                <div class="flex flex-col justify-center items-center">
                    <h5 :class="{'active_year':active_Year===4, 'in_year': active_Year !== 4}">2026</h5>
                    <button :class="{'active':active_Circle===4, 'not_active': active_Circle !== 4}" @click="showComponent(4,4)"></button>
                </div>
                <span></span>

                <div class="flex flex-col justify-center items-center">
                    <h5 :class="{'active_year':active_Year===5, 'in_year': active_Year !== 5}">2027</h5>
                    <button :class="{'active':active_Circle===5, 'not_active': active_Circle !== 5}" @click="showComponent(5,5)"></button>
                </div>

            </section>


            <section class="w-full flex  bg-orange">

                <div class="w-4/12 flex flex-col height 30vh bg-orange-50">
                    <h1 
                        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
                       
                    >
                    ACADEMIC LEADERSHIP</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
                        <li>Improve physical infrastructure and other support facilities for optimum student interactions, collaborations, and learning.</li>
                        <li>Deliver proactive academic support, peer mentoring, and counseling to students.</li>
                        <li>Ensure that all faculty have undergone training workshops on enhancing the academic, social, emotional, and physical well-being of students and their learning experience in the campus.</li>
                        <li>Establish seamless technology-enabled student services.</li>
                        <li>Empower student groups to become an active partner in student development programs.</li>
                    </ul>


                </div>

                <div class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
                    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                        <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                        <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                        <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
                    </div>

                </div>
        
                
            </section>

            <section class="w-full flex ">

                <div class="w-4/12 flex flex-col height  bg-white">
                    <h1 
                        class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
                        style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
                       
                    >
                    RESEARCH AND INNOVATION</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
                        <li>Establish enabling policies and environment.</li>
                        <li>Develop R&D Management Information System (MIS).</li>
                        <li>Promote cross-disciplinary and interdisciplinary research collaborations.</li>
                        <li>Upgrade the existing research laboratories.</li>
                        <li>Strengthen capability-building programs for researchers.</li>
                    </ul>


                </div>
       

                <div class="w-8/12  bg-white-50 flex flex-col items-center" >
                    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                        <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                        <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                        <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
                    </div>

                </div>
                
            </section>
            
            <section class="w-full flex  bg-orange">

<div class="w-4/12 flex flex-col height 30vh bg-orange-50">
    <h1 
        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
       
    >
    SOCIAL RESPONSIBILITY</h1>

    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
        <li>Inculcate the culture of volunteerism among the University community and other stakeholders</li>
        <li>Improve critical awareness among families and communities on relevant social issues.</li>
        <li>Accelerate inclusive social innovations and social enterprises for families  and communities.</li>
        <li>Strengthen institutional partnerships.</li>

    </ul>


</div>

<div class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
    </div>

</div>


            </section>

            <section class="w-full flex ">

<div class="w-4/12 flex flex-col height  bg-white">
    <h1 
        class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
        style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
       
    >
    INTERNATIONALIZATION</h1>

    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
        <li>Intensify international linkages and memberships.</li>
        <li>Spearhead international collaborations on the advancement of engineering and technology education.</li>
        <li>Organize and participate in international scholarly events.</li>
        <li>Establish a strong global network among alumni worldwide.</li>
    </ul>


</div>


<div class="w-8/12  bg-white-50 flex flex-col items-center" >
    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
    </div>

</div>

            </section>
        
            <section class="w-full flex  bg-orange">

<div class="w-4/12 flex flex-col height 30vh bg-orange-50">
    <h1 
        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
       
    >
    ADVANCING  INTERDISCIPLINARITY</h1>

    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
        <li>Design and implement a comprehensive sports development program.</li>
        <li>Adopt engineering innovations in sports.</li>
        <li>Provide high-grade sports facilities and amenities.</li>
        <li>Inculcate the value of sports and healthy lifestyles among students, teaching, and non-teaching personnel.</li>
    </ul>


</div>

<div class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
    </div>

</div>


            </section>

            <section class="w-full flex ">

<div class="w-4/12 flex flex-col height  bg-white">
    <h1 
        class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
        style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
       
    >
    SUSTAINABILITY</h1>

    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
        <li>Leverage university expertise and resources in the conduct of collaborative or joint research with private companies.</li>
        <li>Improve the administrative and other ancillary support to university faculty and researchers.</li>
        <li>Aggressively seek partnerships with the private sector and industry to supplement university infrastructure development, advance joint R&D, and bolster human capital needed in the workplace.The</li>
    </ul>


</div>


<div class="w-8/12  bg-white-50 flex flex-col items-center" >
    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
        <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

        <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
        <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
    </div>

</div>

            </section>
        






        </main>
</template>

<style scoped>
    .not_active{
        display: flex;
        height: 4rem;
        width: 4rem;
        /* background-color: #d00412; */
        background-color: #d9d9d9;
        border-radius: 50%;
    }


   .active{
    display: flex;
        height: 4rem;
        width: 4rem;
        /* background-color: #d00412; */

        border-radius: 50%;
        background-color: #d00412;

    }

    .active_year{
        font-family: Inter-Bold;
        color: #d00412;
    }
    .in_year{
        font-family: Inter-Bold;
        color: #d9d9d9;

    }
 /* 
    .year{

        color: #d9d9d9;
    }

    .active_year{
        color: #d00412;
    } */

    .section-1 > div + span{
        margin-top: 1%;
        display: flex;
        width: 8%;
        height: 0.3rem;
        background-color: #d9d9d9;
    }


</style>