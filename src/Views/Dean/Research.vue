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
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Research Title</p>
                <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full "/>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Status</p>
                <select class="select select-bordered w-full mt-2" >
                    <option disabled selected>Select Status ...</option>
                    <!-- <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option> -->
                </select>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Started</p>
                <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full "  />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Completed</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <div class="divider mt-8 "></div> 
                <h4 class="font-Subheader text-Red-Rose text-lg">Presentation</h4>
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Article</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Forum</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Venue</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " />
           

                <div class="divider mt-8 "></div> 
                <h4 class="font-Subheader text-Red-Rose text-lg">Publication</h4>
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Article / Title</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Publication</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " />
                
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Journal of Publication</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Vol. No. & Issue No.</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">ISSN/ ISBN</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Index</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <div class="divider mt-8 "></div> 
                <h4 class="font-Subheader text-Red-Rose text-lg">Output</h4>
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Product Name / Methods / Process / Technology</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />
    
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Proof / Description / Documentation</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />
  
                <div class="divider mt-8 "></div> 
                <h4 class="font-Subheader text-Red-Rose text-lg">Utilization</h4>
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Beneficiary</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />
             
                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                <input type="file" class="file-input file-input-bordered w-full mt-2" />

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn w-2/12 bg-white border-0" >Add</button>
                    <button class="btn btn-accent w-2/12">Submit</button>

                </span>
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
            </div>

          
        </div>

    </div>
</template>