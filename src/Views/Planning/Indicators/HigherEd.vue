<script src="../../../Scripts/Planning/PBB/Indicators/HigherEd.js">

</script>

<template>
    <div class="flex flex-col w-full">
        <div class="text-sm breadcrumbs w-full">
                    <ul>
                        <li class="text-gray-500">
                            <router-link to="/pbb">
                                <a>PBB</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">                   
                             <router-link to="/PPB_Higher">
                                <a>PBB Logs</a>
                            </router-link></li> 
                        <li class="text-gray-500">
                            <router-link 
                                :to="{
                                    name:'PBB_Summary',
                                    query:{
                                        program:'PBB_Summary2'
                                    }
                                    }"
                            >
                            
                                <a>Modified Form</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500"><a>View Data</a></li>
                    
                    </ul>
                </div>
        <p class="text-Red-Rose text-xl font-Header">Higher Education</p>
           
        <span class="w-100 flex mt-4 gap-3">
            <span class="w-full flex mt-4 gap-3">
                <button :class="{'active':activeButton===1}" @click="showComponent('OPI',1)" class="border-1 w-3/12 py-2 px-2 rounded-md bg-white ">Output Indicator</button>
                <button :class="{'active':activeButton===2}" @click="showComponent('OCI',2)" class="border-1 w-3/12 py-2 px-2 rounded-md bg-white">Outcome Indicator</button>
            </span>
            <select class="select select-bordered w-full max-w-xs">
                <option>College of Engineering</option>
                <option>College of Informatics and Computing Sciences</option>
                <option>College of Technology and Engineering</option>
            </select>
        </span>

        <div class="w-full">

            <component :is="currentComponent"></component>

        </div>

    </div>
    
</template>

<style scoped>
.active {
  background-color: #D00412;
  color: white;
 
}
</style>