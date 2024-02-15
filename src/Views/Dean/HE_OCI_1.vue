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
            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-16 font-Subheader text-base text-Red-Rose" aria-label="Form" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <input type="text" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                <select class="select select-bordered w-full mt-2">
                    <option disabled selected>Select Program ...</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                <input type="date" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of Takers</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of Passers</p>
                <input type="number" placeholder="Type here" class="input mt-2 input-bordered w-full " />

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
            </div>

          
        </div>

    </div>
</template>