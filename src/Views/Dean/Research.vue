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

                count:true,
                isActive:false,
                sampleData:[
                    {
                       tb_id:1,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                       
                    },
                    {
                        tb_id:2,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                    },
                ]
        }},
        methods:{
            validateData(value){
                if(!value){
                   return 'This field is required';
                }

                return true

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
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Research Service</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>

    <p class="mt-8 text-0.9 text-gray-500"> Output Indicator 1 : Number of research outputs completed within the year (2023)</p>
    <p class=" text-0.9 text-gray-500 mt-1"> Output Indicator 1 : Number of research outputs completed within the year (2023)</p>
    <p class=" text-0.9 text-gray-500 mt-1"> Output Indicator 2 (State Universities)  : Percentage of research outputs published in internationally-refereed </p>

    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-8 font-Subheader text-base text-Red-Rose" aria-label="Form" checked/>
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <Form @submit="validateData">
                    
                    <p class="text-0.9 font-Subheader text-gray-500 ">Research Title</p>
                    <Field type="text" name="research_title" placeholder="Type here"  class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="research_title" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Status</p>
                    <Field as="select" name="status"  class="select select-bordered w-full mt-2" :rules="validateData">
                        <option disabled selected>Select Status ...</option>
                        <option value="Status 1"> Status 1</option>
                        <!-- <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option> -->
                    </Field>
                    <ErrorMessage name="status" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Started</p>
                    <Field type="date" name="date_started" placeholder="Type here"  class="input mt-2 input-bordered w-full "  :rules="validateData"/>
                    <ErrorMessage name="date_started" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Completed</p>
                    <Field type="date" name="date_completed" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="date_completed" class="error_message"/>


                    <div class="divider mt-8 "></div> 
                    <h4 class="font-Subheader text-Red-Rose text-lg">Presentation</h4>
                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Article</p>
                    <Field type="text" name="article1"  placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="article1" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Forum</p>
                    <Field type="text"  name="forum" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="forum" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Venue</p>
                    <Field type="text" name="venue" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="venue" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date</p>
                    <Field type="date" name="date" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="date" class="error_message"/>

                    <div class="divider mt-8 "></div> 
                    <h4 class="font-Subheader text-Red-Rose text-lg">Publication</h4>
                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Article / Title</p>
                    <Field type="text" name="article2" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="article2" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Publication</p>
                    <Field type="date" name="publication"  placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="publication" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Journal of Publication</p>
                    <Field type="text" name="journal" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="journal" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Vol. No. & Issue No.</p>
                    <Field type="text" name="vol"  placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="vol" class="error_message"/>


                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">ISSN/ ISBN</p>
                    <Field type="text" name="issn"  placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="issn" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Index</p>
                    <Field type="text"   name="index" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="index" class="error_message"/>


                    <div class="divider mt-8 "></div> 
                    <h4 class="font-Subheader text-Red-Rose text-lg">Output</h4>
                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Product Name / Methods / Process / Technology</p>
                    <Field type="text" name="methods" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="methods" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Proof / Description / Documentation</p>
                    <Field type="text" name="proof"  placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="proof" class="error_message"/>

                    <div class="divider mt-8 "></div> 
                    <h4 class="font-Subheader text-Red-Rose text-lg">Utilization</h4>
                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Beneficiary</p>
                    <Field type="text" name="beneficiary" placeholder="Type here" class="input mt-2 input-bordered w-full " :rules="validateData"/>
                    <ErrorMessage name="beneficiary" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                    <input type="file" class="file-input file-input-bordered w-full mt-2" />

                    <span class="w-full flex items-center justify-end gap-2 mt-5">
                        <button class="btn w-2/12 bg-white border-0" >Add</button>
                    </span>

                </Form>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">
                
                <table class="table-zebra table-md">
                    <thead>
                        <tr class=" border">
                        <th class="text-0.9"></th> 
                        <th class="text-0.9 text-black" colspan="2"></th> 
                        <th class="text-0.9 text-black text-center bg-red-200" colspan="2">Duration</th> 
        

                        <th class="text-0.9 text-black text-center bg-orange-200" colspan="5">Presentation</th> 

                        <th class="text-0.9 text-black text-center bg-amber-200" colspan="6">Publication</th>


                        <th class="text-0.9 text-black text-center bg-lime-200" colspan="2">Output</th>

                        
                        <th class="text-0.9 text-black text-center bg-green-200 ">Utilization</th>
                    </tr>

                    <tr class="bg-cyan-50 border">
                        <th class="text-0.9"></th> 
                        <th class="text-0.9 text-black">Research Title</th> 
                        <th class="text-0.9 text-black">Status</th> 
                        <!-- <th class="text-0.9 text-black" colspan="2">Duration</th>  -->
                        <th class="text-0.9 text-black bg-red-200">Date Started</th> 
                        <th class="text-0.9 text-black bg-red-200">Date Completed</th> 

                        <th class="text-0.9 text-black bg-orange-200">Article / Title</th> 
                        <th class="text-0.9 text-black bg-orange-200">Title of Forum</th>
                        <th class="text-0.9 text-black bg-orange-200">Venue</th>
                        <th class="text-0.9 text-black bg-orange-200">Type</th>
                        <th class="text-0.9 text-black bg-orange-200">Date</th>

                        <th class="text-0.9 text-black bg-amber-200">Article / Title</th>
                        <th class="text-0.9 text-black bg-amber-200">Date of Publication </th>
                        <th class="text-0.9 text-black bg-amber-200">Title of Journal or Publication</th>
                        <th class="text-0.9 text-black bg-amber-200">Vol. No. & Issue No.</th>
                        <th class="text-0.9 text-black bg-amber-200">ISSN / ISBN</th>
                        <th class="text-0.9 text-black bg-amber-200">Index</th>

                        <th class="text-0.9 text-black bg-lime-200">Product Name / Methods/ Process / Technology</th>
                        <th class="text-0.9 text-black bg-lime-200"> Proof / Description / Documentation</th>
                        <th class="text-0.9 text-black bg-lime-200">Beneficiary</th>
                    </tr>
                    </thead> 
                    <tbody>
                    <tr v-for="(item, index) in sampleData">
                        <td>{{item.tb_id}}</td> 
                        <td>{{item.tb_title}}</td> 
                        <td>{{item.tb_status}}</td> 
                        <td>{{item.tb_started}}</td> 
                        <td>{{item.tb_completed}}</td> 

                        <td>{{item.tb_pr_article}}</td> 
                        <td>{{item.tb_forum}}</td> 
                        <td>{{item.tb_venue}}</td> 

                        <td>{{item.tb_type}}</td> 
                        <td>{{item.tb_date}}</td> 

                        <td>{{item.tb_pub_title}}</td> 
                        <td>{{item.tb_pub_date}}</td> 
                        <td>{{item.tb_pub_journal}}</td> 
                        <td>{{item.tb_pub_vol}}</td> 

                        <td>{{item.tb_ISSN}}</td> 
                        <td>{{item.tb_index}}</td>

                        
                        <td>{{item.tb_o_pname}}</td> 
                        <td>{{item.tb_o_proof}}</td>
                        <td>{{item.tb_benef}}</td>


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
        .error_message{
            color: red;
            font-size: .9rem;
        }
</style>