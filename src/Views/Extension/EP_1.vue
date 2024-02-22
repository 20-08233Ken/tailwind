<template>
          <div class="w-fullflex flex-col">
                <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Extension Program</h1>

                <h3 class=" mt-8"> <b> Output Indicator 1 : </b> Number of trainees weighted by the length of training</h3>
                <h3 class=""> <b> Output Indicator 3 :</b>  Percentage of beneficiaries who rate the training course/s as satisfactory or higher in terms of quality and relevance </h3>

                <ul class=" mt-4" style="list-style-type: decimal;">
                    <li class="ml-16 text-sm">Trainings must by related to/anchored on the extension program</li>
                    <li class="ml-16 text-sm">Choose DURATION from the drop-down list</li>
                    <li class="ml-16 text-sm">Incomplete entries will be DISREGARDED</li>
                </ul>
            </div>


            <div class="w-full flex flex-col items-center ">

                <div role="tablist" class="tabs tabs-lifted w-full mt-8">
                    <input type="radio" name="my_tabs_1" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Form" checked />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Campus</p>
                        <input type="text" placeholder="Alangilan Campus" disabled class="input mt-2 input-bordered w-full " />

                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Title of Training</p>
                        <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />

                        <h4 class="self-start mt-8 font-Subheader text-Red-Rose text-base">Inclusive Dates</h4>

                        <span class="w-full flex gap-2">
                            <span class="w-2/4">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">From</p>
                                <input type="date" placeholder=" " class="input mt-2 input-bordered w-full "  />
                            </span>
                            <span class="w-2/4">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">To</p>
                                <input type="date" placeholder="" class="input mt-2 input-bordered w-full "/>
                            </span>
                        </span>

                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Weight per Duration</p>                        <select class="select select-bordered w-full mt-2" >
                            <option disabled selected></option>
                            <option>.5 (less than 8 hours)</option>
                            <option>1 (8 hours or 1 day)</option>
                            <option>1.25 (2 days)</option>
                            <option>1.5 (3 to 4 days)</option>
                            <option>2 ( 5 days or more)</option>
                        </select>

                        
                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">No. of Trainees</p>
                        <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />

                        
                        
                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Trainees Weighted by the Length of Training</p>
                        <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />


                        <h4 class="self-start mt-8 font-Subheader text-Red-Rose text-base">Quality and Relevance Rating</h4>
                        <span class="w-full flex justify-between">
                            <span class="w-2/12">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">1. P</p>
                                <input type="number" placeholder=" " class="input mt-2 input-bordered w-full " />
                            </span>
                            <span class="w-2/12">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">2. F</p>
                                <input type="number" placeholder="" class="input mt-2 input-bordered w-full "/>
                            </span>
                            <span class="w-2/12">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">3. S</p>
                                <input type="number" placeholder=" " class="input mt-2 input-bordered w-full "  />
                            </span>
                            <span class="w-2/12">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">4. VS</p>
                                <input type="number" placeholder="" class="input mt-2 input-bordered w-full "/>
                            </span>
                            <span class="w-2/12">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">5. E</p>
                                <input type="number" placeholder="" class="input mt-2 input-bordered w-full " />
                            </span>
                        </span>

                        <p class="w-full text-0.9  font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                        <input type="file" class="file-input file-input-bordered w-full mt-2" />

                        <span class="w-full flex items-center justify-end gap-2 mt-5">
                            <button class="btn w-2/12 bg-white border-0" >Add</button>
                            <button class="btn btn-accent w-2/12">Submit</button>

                        </span>
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        
                        <table class="table-zebra table-md">
                                <thead>
                                <tr class ="bg-cyan-50">
                                    <th></th> 
                                    <th class="text-0.9">Campus</th> 
                                    <th class="text-0.9">Title of Training</th> 
                                    <th class="text-0.9">Inclusive Dates (From)</th> 
                                    <th class="text-0.9">Inclusive Dates (To)</th> 
                                    <th class="text-0.9">Weight per Duration</th> 
                                    <th class="text-0.9">No. of Trainees</th> 
                                    <th class="text-0.9">Trainees Weighted by the Length of Training</th> 
                                    <th class="text-0.9">1. P</th> 
                                    <th class="text-0.9">2. F</th> 
                                    <th class="text-0.9">3. S</th> 
                                    <th class="text-0.9">4. VS</th> 
                                    <th class="text-0.9">5. E</th> 

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
                                 
                                </tr>

                            </tbody>
                            </table>
                    </div>

                </div>

                

            </div>
</template>