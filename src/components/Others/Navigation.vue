<template>
    <nav class="w-full bg-red-700 flex px-20 h-auto">
        <ul class="flex text-white gap-2 w-full">
            <li class="py-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </li>

            <li class="flex items-center justify-center w-1/12"><img src="../../assets/img/school.png" style="width: 4rem;" alt=""></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/">University MIS</router-link></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/dean">Dean</router-link></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center">Profile</li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/dashboard">Dahsboard</router-link></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/dataset">Dataset</router-link></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/pbb">PBB</router-link></li>
            <li class="w-1/12 py-8 hover:bg-red-800 text-center"><router-link to="/offices">Offices</router-link></li>
        </ul>
    </nav>
</template>