<template>
    <h1 class="w-full text-center font-Header text-xl text-Red-Rose"> Graduate programs with accreditation</h1>
    <p class="w-full text-center text-gray-400">College of Engineering</p>
    <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>



    <div class="w-full overflow-x-auto">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select Program ...</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of Initial Operation</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " />
  
                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of First Batch of Graduates</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Status</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select ...</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <h4 class="mt-8 font-Subheader text-Red-Rose text-base">Period of Validity</h4>
                <span class="w-full flex gap-2">
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">From</p>
                        <input type="date" placeholder=" " class="input mt-2 input-bordered w-full " />
                    </span>
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">To</p>
                        <input type="data" placeholder="" class="input mt-2 input-bordered w-full " />
                    </span>
                </span>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Remarks</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                <input type="file" class="file-input file-input-bordered w-full mt-2" />

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn w-2/12 bg-white border-0">Add</button>
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
            </div>

          
        </div>

    </div>
</template>