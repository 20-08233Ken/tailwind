<template>
    <main class="w-full flex"> 
        <section class="w-8/12 flex flex-col h-dvh px-16 justify-center" style="background-color: #f5f5f5;">

            <span class="w-full flex flex-col items-center justify-center " style="position: relative;">
          
                <img src="../assets/img/merge/img1.png" alt="image here" >

            </span>

            <h1 class="font-Header text-Red-Darken text-4xl">University Management</h1>
            <h1 class="font-Header text-Red-Darken text-4xl">
               <span class="font-Header text-Red-Rose text-4xl">Information </span>  System
            </h1>

            <p>Central System for Managing and Process of Batangas State University</p>

            <p class="mt-8 w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tortor non elit pellentesque, ac finibus ante fringilla. Maecenas nibh mauris, consequat sed elit sit amet, gravida faucibus metus. </p>
        </section>

        <section class="w-4/12 flex flex-col items-center justify-center">
            
                <img src="../assets/img/school.png" alt="" style="width: 40%;margin: -20% 0 1rem 0;">
            
                <p class ="text-gray-500" style="width: 80%; font-size: 15px;">Username</p>
                <input type="text" id="username" >

                <p class ="text-gray-500 mt-6" style="width: 80%; font-size: 15px;">Password</p>
                <input type="password" id="password">

                <router-link 
                        :to="{
                            name:'home',
                            query:{
                                user:'dean'
                            }
                        }"
                        class=" w-full flex justify-center">
                <button class="bg-Red-Rose text-white w-2/12 py-3 rounded mt-4 " style="width: 80%;font-size: 15px;">  
                    Login as Dean         
                </button>
                </router-link>

                
                <router-link to="/home"  class=" w-full flex justify-center">
                <button class="bg-Red-Rose text-white w-2/12 py-3 rounded mt-4 " style="width: 80%;font-size: 15px;">  
                    Login as Planning         
                </button>
                </router-link>
            
        </section>
    </main>
</template>

<style scoped>
#username,
#password
{
    border: 1px solid rgb(207, 203, 203);
    width: 80%;
    border-radius: 5px;
    padding: .7em 1rem;
}


</style>