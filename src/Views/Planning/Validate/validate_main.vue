
<script>
    import Planning_nav from '../../../components/Others/Navigation/Planning_nav.vue';
    import { Form, ErrorMessage, Field } from 'vee-validate';
    export default{
        data(){
            return{
                sampleData:[
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       v_status:"Not validated"     

                    },
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       v_status:"Not validated"         

                    },
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       v_status:"Not validated"         

                    }
                ],

                reasonOpt:[
                    {
                        reason:'Lack of Supporting Documents'
                    },{
                        reason:'Inconsistent Data'
                    }
                ]
            }
        },
        components:{
            Planning_nav,
            Form,
            ErrorMessage,
            Field
        }
        
    }
</script>
<template>
    <main class="w-full flex flex-col">
        <Planning_nav/>
        <section class="px-6vw py-3vw w-full">
            <h1 class="font-Header text-3xl text-Red-Rose">Higher Education Program</h1>
            <h2 class="font-Subheader text-lg text-Red-Rose">Output Indicator 2: </h2>
            <h2 class="font-Subheader text-1gray-700">Percentage of undergraduate programs with accreditation</h2>

            <span>
                <div class="text-sm breadcrumbs w-full mt-4">
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
                        <li class="text-gray-500">
                            <router-link 
                                :to="{
                                    name:'pbb3',
                                    query:{
                                        program:'HigherEd'
                                    }
                                    }"
                            >
                            
                                <a>View Data</a>
                            </router-link>
                            
                        </li>
                        <li class="text-gray-500">
                       
                            
                                <a>Validation</a>
                        
                            
                        </li>
                    
                    </ul>
                </div>
            </span>

            <span class="overflow-x-auto overflow-y-auto w-full">
            <table class="table   table-zebra mt-1">
                    <thead >
                    <tr class="bg-gray-700 border text-white py-2">
                        <th class="text-0.9 text-white ">Campus</th> 
                        <th class="text-0.9 text-white">Department</th> 
                        <th class="text-0.9 text-white">Program</th> 
                        <th class="text-0.9 text-white">Year of Initial Operation</th> 
                        <th class="text-0.9 text-white">Status</th> 
                        <th class="text-0.9 text-white">Period of Validity (From)</th> 
                        <th class="text-0.9 text-white">Period of Validity (To)</th> 
                        <th class="text-0.9 text-white">Supported Documents</th>
                        <th class="text-0.9 text-emerald-100">Validation Status</th> 
                        <th class="text-0.9 text-black"></th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in sampleData" >
                            <td>{{ item.campus }}</td>
                            <td>{{ item.department }}</td>
                            <td>{{ item.program }}</td>
                            <td>{{ item.year_io }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.pov_from}}</td>
                            <td>{{ item.pov_to}}</td>
                            <td></td>
                            <td><i>{{ item.v_status}}</i></td>
                            <td class="flex gap-4 " >
                                <span class="flex gap-2 w-full flex-col" >
                                    <button class="btn btn-sm bg-emerald-700 text-white font-Subheader" onclick="showApproval.showModal()">Approved</button>
                                    <!-- <button class="btn btn-sm bg-orange-700 text-white font-Subheader">Pending</button> -->
                                    <button class="btn btn-sm bg-Red-Darken text-white font-Subheader" onclick="showRejection.showModal()">Reject</button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                   
                </table>
            </span>

            <!-- <button class="btn" onclick="showApproval.showModal()">open modal</button> -->
            <dialog id="showApproval" class="modal">
            <div class="modal-box">
           
                <h3 class="font-bold text-lg">Approval</h3>
                <p class="py-4">Are you sure you want to approve this record? </p>

                <form method="dialog">
                    <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white">
                        Confirm
                    </button>
                </span>
                </form>

            </div>
            </dialog>

            <dialog id="showRejection" class="modal">
            <div class="modal-box">
           
                <h3 class="font-bold text-lg">Reason of Rejection </h3>
              

                <Form >
                    <p class="py-4 text-0.9">Reasons </p>
                    <Field as="select" placeholder="Type here" name="reason" class="select w-full" style="border:  1px solid #d2d2d2;">
                        <option v-for=" x in reasonOpt" :value="x.reason" >{{ x.reason }}</option>
                    </Field>
                    <ErrorMessage name="reason" class="error_message"/>

                    <p class="py-4 text-0.9">If others, please specify </p>
                    <Field type="text" placeholder="Type here" name="otherReason" class="input  input-bordered w-full"  style="border:  1px solid #d2d2d2;"/>
                    <ErrorMessage name="otherReason" class="error_message"/>
                </Form>


                <form method="dialog">
                    <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white">
                        Submit
                    </button>
                </span>
                </form>

            </div>
            </dialog>
        </section>
    </main>

</template>

<style scoped>
    td:last-child{
        display:flex;
        align-items:center
    }
</style>