<script>
    import {Form, Field, ErrorMessage} from 'vee-validate'
    export default{

        components:{
            Form,
            Field,
            ErrorMessage
        },  

        data(){
            return{
                // in_campus:'',
                // in_department:'',
                in_program:'',
                in_thesis:'',
                in_noThesis:'',
                count:true,
                isActive:false,
                isIcon:false,
                isAdd:false,
                id:0,

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

                ]

            }
        },
        methods:{
            validateData(value){
                if(!value){
                   return 'This field is required';
                }

                return true

            },
            addData(){


                this.sampleData.push(
                    {
                                           
                        tb_id:this.id,
                        tb_campus:this.data[0].in_campus,
                        tb_department:this.data[0].in_department,
                        tb_program:this.in_program,
                        tb_reqThesis:this.in_thesis,
                        tb_notReqThesis:this.in_noThesis,
                    }
                )
                this.id++;

                this.data[0].in_campus =''
                this.data[0].in_department=''
                this.in_program=''
                this.in_thesis=''
                this.in_noThesis=''

                
                this.isAdd = true;
                    setTimeout(() =>{
                        this.isAdd = false;
                    }, 2000)

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
        <div v-if="isAdd" role="alert" class="alert alert-success w-5/12 text-white fixed top-20 z-50 transition-transform" >
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span class="text-white">Data Addedd Successfully!</span>
    </div>
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose"> Graduate students enrolled in research degree program</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>



    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" checked/>
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <Form @submit="addData">
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field  name="campus" type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <Field  name="department" type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_department" :rules="validateData"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program</p>
                <Field as="select" name="program" class="select select-bordered w-full mt-2" :rules="validateData">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{x.program}}</option>
                </Field>
                <ErrorMessage name="program" class="error_message"/>

                <h4 class="mt-8 font-Subheader text-Red-Rose text-base">Number of Enrolled Students</h4>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Requiring Thesis/Dissertation</p>
                <Field type="number" name="req_thesis" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_thesis" :rules="validateData"/>
                <ErrorMessage name="req_thesis" class="error_message"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Not Requiring Thesis/Dissertation</p>
                <Field type="number" name="not_req_thesis" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_noThesis" :rules="validateData"/>
                <ErrorMessage name="not_req_thesis" class="error_message"/>


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                <input type="file" class="file-input file-input-bordered w-full mt-2" />

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn w-2/12 bg-white border-0">Add</button>
                </span>

                </Form>
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
                        <th class="text-0.9">Requiring Thesis/Dissertation</th> 
                        <th class="text-0.9">Not Requiring Thesis/Dissertation</th> 
                        <th></th>
 
                    </tr>
                    </thead> 
                    <tbody>
                    <tr v-for="(item,index) in sampleData">
                        <th>{{ item.tb_id }}</th> 
                        <td>{{item.tb_campus}}</td> 
                        <td>{{item.tb_department}}</td> 
                        <td>{{item.tb_program }}</td>  
                        <td>{{item.tb_reqThesis }}</td> 
                        <td>{{item.tb_notReqThesis }}</td> 
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
                        
                    </button>
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

        .iconActive{
            display: flex;

        }
        .iconInActive{
            display: none;
        }

        .error_message{
            color: red;
            font-size: .9rem;
        }
</style>