<script>
    export default{
        data(){
            return{
                in_program:'',
                in_examDate:'',
                in_takers:'',
                in_passers:'',
                count:true,
                id:1,
                isActive:false,
                isIcon:false,
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

                sampleData:[

                ],
                newData:{

                }
            }
        },
        methods:{
            addData(){

                
                if( this.in_program ==='' || this.in_examDate ==='' || this.in_takers ==='' || this.in_passers ===''){
                    console.log("Error")

                }else{
                    this.sampleData.push(
                    {
                        tb_id:this.id,
                        tb_campus:this.data[0].in_campus,
                        tb_department:this.data[0].in_department,
                        tb_program:this.in_program,
                        tb_exam_date:this.in_examDate,
                        tb_takers:this.in_takers,
                        tb_passers:this.in_passers
                    }
                    )

                    console.log(this.sampleData[0])

                    this.in_program=""
                    this.in_examDate=""
                    this.in_takers=""
                    this.in_passers=""

                    this.id++;

                }
                


            },
            submitData(){
                    if(this.count === true ){
                        this.isActive = true
                        this.count = false
                        this.isIcon = true
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
                <select class="select select-bordered w-full mt-2"  v-model="in_program" required>
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option>

                </select>
                <!-- <p class="mt-1 text-Red-Rose font-Subheader" :class="{'empty':in_program==='','notEmpty':in_program!==''}" style="font-size: 0.8rem;">Kindly complete the necessary fields</p> -->

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_examDate" required/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of Takers</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_takers" required/>

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
                        <th></th>
                        
                    </tr>
                    </thead> 
                    <tbody>
                    <tr v-for="(item, index) in sampleData">
                        <th>{{ item.tb_id }}</th> 
                        <td>{{item.tb_campus}}</td> 
                        <td>{{item.tb_department}}</td> 
                        <td>{{item.tb_program }}</td> 
                        <td>{{item.tb_exam_date }}</td> 
                        <td>{{item.tb_passers}}</td> 
                        <td>{{item.tb_takers}}</td>
                        <td class="flex items-center gap-4 "> 
                            <button class="mt-2">
                                <i class="text-sky-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </i>    
                            </button>
                            <button class="mt-2">
                                <i  class="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </i>    
                            </button>
                        </td>
                    </tr>


                </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn btn-accent w-2/12 bg-white hover:bg-white " @click="submitData">
                        <i class="text-teal-400" :class="{'iconInActive':isIcon === false, 'iconActive': isIcon ===true}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </i>
                        <p>Submit</p>
                        
                    </button>                    <span class="flex justify-center items-center w-dvw h-svh fixed top-0 left-0" style="background: rgb(0,0,0,0.6);" :class="{'active':isActive == true, 'inActive':isActive == false}">
                        
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

        .iconActive{
            display: flex;

        }
        .iconInActive{
            display: none;
        }

        .empty{
            display: flex;
        }
        .notEmpty{
            display: none;
        }
</style>