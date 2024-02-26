<script>
    export default{
        data(){
            return{
                // in_campus:'',
                // in_department:'',
                in_program:'',
                in_operation:'',
                in_graduates:'',
                in_status:'',
                in_from:'',
                in_to:'',
                in_remarks:'',
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
                console.log(this.in_operation);
                console.log(this.in_graduates);
                console.log(this.in_status);
                console.log(this.in_from);
                console.log(this.in_to);
                console.log(this.in_remarks);
            }
            ,
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
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose"> Graduate programs with accreditation</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>



    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" checked/>
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_department" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{x.program }}</option>
                </select>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of Initial Operation</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_operation" />
  
                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of First Batch of Graduates</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_graduates"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Status</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select Status...</option>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                    <option>Level 4</option>
                    <option>Level CS</option>
                    <option>NA</option>
                </select>

                <h4 class="mt-8 font-Subheader text-Red-Rose text-base">Period of Validity</h4>
                <span class="w-full flex gap-2">
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">From</p>
                        <input type="date" placeholder=" " class="input mt-2 input-bordered w-full " v-model="in_from"/>
                    </span>
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">To</p>
                        <input type="date" placeholder="" class="input mt-2 input-bordered w-full " v-model="in_to"/>
                    </span>
                </span>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Remarks</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_remarks"/>


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
                        <th class="text-0.9">Year of Initial Operation</th> 
                        <th class="text-0.9">Year of First Batch Graduates</th> 
                        <th class="text-0.9">Status</th> 
                        <th class="text-0.9">Period of Validity (From)</th> 
                        <th class="text-0.9">Period of Validity (To)</th> 
                        <th class="text-0.9">Remarks</th> 

 
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