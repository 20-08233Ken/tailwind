<template>
          <div class="w-fullflex flex-col">
                <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Technical Advisory Extension</h1>

                <h3 class=" mt-8"> <b>Outcome Indicator :</b>  Number of active partnerships with LGUs, industries, NGA, SMEs, and other stakeholders as a result of extension activities</h3>

                <ul class=" mt-4" style="list-style-type: decimal;">
                    <li class="ml-16 text-sm">List All active partnerships with extension activities as of 2023</li>
                    <li class="ml-16 text-sm">Incomplete entries will be DISREGARDED </li>
                </ul>
            </div>


            <div class="w-full flex flex-col items-center ">

                <div role="tablist" class="tabs tabs-lifted w-full mt-8">
                    <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Form" checked />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        
                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Campus</p>
                        <input type="text" placeholder="Alangilan Campus" disabled class="input mt-2 input-bordered w-full " />

                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Partnet LGU / Community / Industry / SMEs /Private of Public Agencies / NGOs</p>
                        <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />
                        
                        <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Extension Program / Activities</p>
                        <input type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />

                        <h4 class="self-start mt-8 font-Subheader text-Red-Rose text-base">Date Conducted</h4>

                        <span class="w-full flex gap-2">
                            <span class="w-2/4">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">From</p>
                                <input type="date" placeholder=" " class="input mt-2 input-bordered w-full " />
                            </span>
                            <span class="w-2/4">
                                <p class="text-0.9 font-Subheader text-gray-500 mt-4">To</p>
                                <input type="date" placeholder="" class="input mt-2 input-bordered w-full " />
                            </span>
                        </span>             

                        <p class="w-full text-0.9  font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                        <input type="file" class="file-input file-input-bordered w-full mt-2" />

                        <span class="w-full flex items-center justify-end gap-2 mt-5">
                            <button class="btn w-2/12 bg-white border-0" >Add</button>
                            <button class="btn btn-accent w-2/12">Submit</button>

                        </span>


                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                        <table class="table-zebra table-md">
                                <thead>
                                <tr class ="bg-cyan-50">
                                    <th></th> 
                                    <th class="text-0.9">Campus</th> 
                                    <th class="text-0.9">Partnet LGU / Community / Industry / SMEs /Private of Public Agencies / NGOs</th> 
                                    <th class="text-0.9">Extension Program / Activitie</th> 
                                    <th class="text-0.9">Date Conducted (From)</th> 
                                    <th class="text-0.9">Date Conducted (To)</th> 

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