<script>
    export default{
        data(){
            return{
                // in_campus:'',
                // in_department:'',
                in_program:'',
                in_thesis:'',
                in_noThesis:'',

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
                console.log(this.in_thesis);
                console.log(this.in_noThesis);

            }
        }
    }


</script>

<template>
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose"> Graduate students enrolled in research degree program</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>



    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <input type="text" placeholder="Type here" disabled class="input mt-2 input-bordered w-full " v-model="data[0].in_department"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{x.program}}</option>
                   
                </select>

                <h4 class="mt-8 font-Subheader text-Red-Rose text-base">Number of Enrolled Students</h4>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Requiring Thesis/Dissertation</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_thesis"/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Not Requiring Thesis/Dissertation</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " v-model="in_noThesis"/>


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                <input type="file" class="file-input file-input-bordered w-full mt-2" />

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn w-2/12 bg-white border-0" @click="addData">Add</button>
                    <button class="btn btn-accent w-2/12">Submit</button>

                </span>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table" checked />
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
            </div>

          
        </div>

    </div>
</template>