
<script setup>
import Target1 from '../../../../components/graph/PBB/target1.vue'
import Accomplishment1 from '../../../../components/graph/PBB/accomplished1.vue'
import Target2 from '../../../../components/graph/PBB/target2.vue'
import Target3 from '../../../../components/graph/PBB/target3.vue'
import Target4 from '../../../../components/graph/PBB/target4.vue'
</script>
<template>

    <div class="w-full flex flex-col px-12">
        <h2 class="font-Header text-Red-Rose text-lg mt-4">Outcome Indicator</h2>

        <h5 class="w-8/12 font-Subheader ml-4">1. Percentage of first-time licensure exam-takers that pass the
            licensure exams</h5>

        <span class="w-full flex ml-8">
            <ul class="w-5/12 flex flex-col mt-4">


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Pablo Borbon</p>
                </li>




                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Lipa</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Nasugbu</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Malvar</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Alangilan</p>
                </li>

            </ul>

            <span class="flex w-7/12 justify-center relative ">
                <span class="w-full flex justify-center relative">
                    <Target1 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">69%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> FYI TARGET</span>
                    </h5>
                </span>
                <span class="w-full flex justify-center relative">
                    <Accomplishment1 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">59%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> Accomplishment</span>
                    </h5>
                </span>
            </span>
        </span>


        <h5 class="w-8/12 font-Subheader mt-24 ml-4">2. Percentage of graduates (2 years prior) that are employed
        </h5>

        <span class="w-full flex ml-8">
            <ul class="w-5/12 flex flex-col mt-4">


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Pablo Borbon</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Lipa</p>
                </li>


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Nasugbu </p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Malvar </p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Alangilan </p>
                </li>


            </ul>

            <span class="flex w-7/12 justify-center relative">
                <span class="w-full flex justify-center relative">
                    <Target2 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">90%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> FYI TARGET</span>
                    </h5>
                </span>
                <span class="w-full flex justify-center relative">
                    <Accomplishment1 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">59%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> Accomplishment</span>
                    </h5>
                </span>
            </span>
        </span>

    </div>

    <div class="w-full flex flex-col bg-slate-100 px-12 py-8 mt-12">
        <h2 class="w-full text-lg px-4 py-3 text-Red-Darken font-Header  ">Output Indicators</h2>

        <h5 class="font-Subheader mt-4 ml-4 w-8/12">1. Percentage of undergraduate student population enrolled in
            CHED-identified and RDC-identified priority programscensure exams</h5>

        <span class="w-full flex ml-8">
            <ul class="w-5/12 flex flex-col mt-4">


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Pablo Borbon</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Lipa </p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Nasugbu </p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Malvar </p>
                </li>


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Alangilan </p>
                </li>

            </ul>

            <span class="flex w-7/12 justify-center relative">
                <span class="w-full flex justify-center relative">
                    <Target3 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">79.22%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> FYI TARGET</span>
                    </h5>
                </span>
                <span class="w-full flex justify-center relative">
                    <Accomplishment1 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">59%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> Accomplishment</span>
                    </h5>
                </span>
            </span>
        </span>


        <h5 class="font-Subheader mt-24 ml-4">2. Percentage of undergraduate programs with accreditation</h5>

        <span class="w-full flex ml-8">
            <ul class="w-5/12 flex flex-col mt-4">

                <li>
                    <span class="green"></span>
                    <p class="text-0.9 ">BatStateU Pablo Borbon</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Lipa</p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Nasugbu </p>
                </li>


                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Malvar </p>
                </li>



                <li>
                    <span class="green"></span>
                    <p class="text-0.9 "> BatStateU Alangilan </p>
                </li>

            </ul>

            <span class="flex w-7/12 justify-center relative">
                <span class="w-full flex justify-center relative">
                    <Target4 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);"> 98%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> FYI TARGET</span>
                    </h5>
                </span>
                <span class="w-full flex justify-center relative">
                    <Accomplishment1 />
                    <h5 class="flex flex-col font-Subheader text-center text-3xl"
                        style="position: absolute;top:40%;font-size: clamp(14px,4vw,28px);">59%
                        <br><span style="font-size: clamp(12px,2vw,14px);"> Accomplishment</span>
                    </h5>
                </span>
            </span>
        </span>

    </div>


</template>


<style scoped>
li {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 1.5rem;

}

.green {
    display: flex;
    background-color: forestgreen;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.red {
    display: flex;
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 50%;
}
</style>