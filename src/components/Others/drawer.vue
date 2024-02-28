<template>
    <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn drawer-button bg-red-700 text-white border-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu w-80 min-h-full bg-base-200 text-base-content">
        <router-link to="/" class="w-full">
        <button class="border-2 flex items-center justify-center border-1 bg-Red-Darken text-white w-11/12 py-2 rounded-md gap-2" style="position: absolute; bottom: 0;">
            

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                Logout
        </button>
    </router-link>
      <!-- Sidebar content here -->
        <li class="flex items-center justify-center w-1/12  "><img src="../../assets/img/school.png" style="width: 4rem;" alt=""></li>

        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
            >
            <router-link to="/">
                 MIS
                </router-link>
        </li>


        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/dean">Dean</router-link>
        </li>

        <li 
        class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/profile">Profile</router-link>
        </li>

        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/dashboard">Dahsboard</router-link>
        </li>

        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/dataset">Dataset</router-link>
        </li>

        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/pbb">PBB</router-link>
        </li>

        <li 
            class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
            style="font-size: clamp(14px , 2vw , 16px);"
        >
            <router-link to="/offices">Offices</router-link>
        </li>
      
    </ul>
    <nav class="w-full bg-red-700 flex items-center px-20 h-auto sticky top-0 z-50">
        <ul class="flex text-white gap-2 w-full items-center">
            
        </ul>
    </nav>
  </div>
</div>
</template>