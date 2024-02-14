<script setup>
    import Navigation from '../../components/Others/Navigation.vue';

</script>

<template>
    <main class="flex w-full flex-col bg-grey-2">
        <Navigation/>

        <section class="flex pt-6vw pb-3vw px-6vw w-full">
            <span class="flex flex-col w-2/4">
                <h1 class="font-Header text-4xl text-Red-Darken">Dataset</h1>
                <p class="w-4/5 mt-4 text-Red-Darken ">
                    Contains documentation of data being regulated within the 
                    Management Information System (MIS) Office
                </p>
            </span>

            <span class="flex flex-col w-2/4 justify-center items-end">
                <div class="flex items-center w-11/12 bg-white color-white rounded-xl border-1 border-neutral-300">
                    <input class="px-4 py-3 w-11/12 rounded-xl" type="search" name="" id="" placeholder="Search for an Office">
                    <span class="flex justify-center w-1/12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </div>
            </span>
        </section>


        <section class="flex px-6vw mt-4 pb-8 ">
            <div class=" w-2/4">
                <div class="flex flex-col bg-white w-10/12 py-12 px-16 shadow-card2 rounded-2xl">
                    <h2 class="font-Subheader text-2xl">Office of Human Resource</h2>
                    <ul class="mt-4 ml-4 flex flex-col gap-2" style="list-style-type: disc;">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia</li>
                        <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                        <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                        <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                        <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                        <li>Duis fringilla massa nec dapibus laoreet.</li>
                        <li>Donec hendrerit ligula id diam consectetur, quis facilisis quam pretium.</li>
                        <li>Cras euismod tortor at felis auctor, commodo cursus nibh elementum.</li>
                        <li>Donec non elit at magna pretium aliquam in in diam.</li>
                        <li>Vestibulum ullamcorper mi et felis tempus, quis rutrum est tristique.</li>
                        <li>Nam vitae orci vehicula, ornare ante sit amet, laoreet purus.</li>
                    </ul>
                </div>
            </div>

            <div class="w-2/4">
                <ul class="w-full flex flex-col gap-3 items-end ">

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        KSIT Park Development Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>


                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        ACTION Center
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Legal Affairs Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Office of the Secretary
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Office of the Board of Regents
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Office of Internal Services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Presedential Project Management Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Center for Innovation in Engineering Educ
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Office of Culture and Arts
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Office of Sports
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Curriculum and Instruction Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Student Affairs and Services Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-10/12 border-1 border-Red-Rose py-4 px-8 text-Red-Rose rounded-xl">
                        Testing and Admission Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
        


    </main>
</template>