<script>
    export default{
        data(){
            return{
                in_program:'',
                in_examDate:'',
                in_takers:'',
                in_passers:'',
                count:true,
                isActive:false,
                 // Data base from the Account Info of Dean
                data:[
                    {
                        in_campus:"Alangilan Campus",
                        in_department:"College of Engineering"
                    }
                ],

                // Options of Select Program Input
                collegeProgram:[
                    {
                        program:"Bachelor of Science in Computer Engineer",
                    },{
                        program:"Bachelor of Science in Civil Engineer",
                    },{
                        program:"Bachelor of Science in Chemical Engineer",
                    },{
                        program:"Bachelor of Science in Electrical Engineer",
                    }
                ],
            }
        },
        methods:{
            addData(){
                console.log("Added Data")
                console.log(this.data[0].in_campus);
                console.log(this.data[0].in_department);
                console.log(this.in_program);
                console.log(this.in_examDate);
                console.log(this.in_takers);
                console.log(this.in_passers);
            },
            submitData(){
                    if(this.count === true ){
                        this.isActive = true
                        this.count = false
                    }else{
                        this.isActive = false
                    }
                   
            },
            onClose(){
                this.isActive = false
            }
        }
    }

</script>



<template>
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Passed first-time licensure exam takers</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>


    <h2 class="w-full text-center mt-8 bg-Red-Darken text-white py-3">Monitoring</h2>

    <div class="w-full flex">
        <span class="w-2/4 flex flex-col items-center mt-8">
            <h3 class="font-Subheader text-green-600">Submitted</h3>
            <ul class="flex items-center gap-4 mt-4"> 
                <span class="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
                <li>Bachelor of Science in Computer Engineer</li>
            </ul>
        </span>
        <span class="w-2/4 flex flex-col items-center mt-8">
            <h3 class="font-Subheader text-Red-Rose">Submitted</h3>
            <ul class="flex items-center gap-4 mt-4"> 
                <span class="text-Red-Rose">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
                <li>Bachelor of Science in Computer Engineer</li>
            </ul>
        </span>
    </div>

    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" checked/>
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full "  v-model="data[0].in_campus"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full "  v-model="data[0].in_department"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                <select class="select select-bordered w-full mt-2"  v-model="in_program">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option>

                </select>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_examDate"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of Takers</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_takers"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of Passers</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_passers"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                <input type="file" class="file-input file-input-bordered w-full mt-2" />

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn w-2/12 bg-white border-0" @click="addData">Add</button>
                </span>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <table class="table-zebra table-md">
                    <thead>
                    <tr class ="bg-cyan-50">
                        <th></th> 
                        <th class="text-0.9">Campus</th> 
                        <th class="text-0.9">Department</th> 
                        <th class="text-0.9">Program</th> 
                        <th class="text-0.9">Exam Date</th> 
                        <th class="text-0.9">Number of Passers</th> 
                        <th class="text-0.9">Number of Takers</th>
                    </tr>
                    </thead> 
                    <tbody>
                    <tr>
                        <th>1</th> 
                        <td>Cy Ganderton</td> 
                        <td>Quality Control Specialist</td> 
                        <td>Littel, Schaden and Vandervort</td> 
                        <td>Canada</td> 
                        <td>12/16/2020</td> 
                        <td>Blue</td>
                    </tr>
                    <tr>
                        <th>1</th> 
                        <td>Cy Ganderton</td> 
                        <td>Quality Control Specialist</td> 
                        <td>Littel, Schaden and Vandervort</td> 
                        <td>Canada</td> 
                        <td>12/16/2020</td> 
                        <td>Blue</td>
                    </tr>

                </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn btn-accent w-2/12" @click="submitData">Submit</button>
                    <span class="flex justify-center items-center w-dvw h-svh fixed top-0 left-0" style="background: rgb(0,0,0,0.6);" :class="{'active':isActive == true, 'inActive':isActive == false}">
                        
                        <div class="modal-box" >
                            <h3 class="font-bold text-lg">Reminder</h3>
                            <p class="py-4 text-lg">Please review the information you've provided before proceeding with submission.</p>
                            <h1>After reviewing, please click the <b> "Submit" </b>" button</h1>
                            <div class="modal-action">
                            <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn" @click="onClose">Close</button>
                            </form>
                            </div>
                        </div>
                    </span>
                </span>
            </div>

          
        </div>

    </div>
</template>

<style scoped>
        .active{
            display: flex;
            flex-direction: column;
        }

        .inActive{
            display: none;
        }
</style>