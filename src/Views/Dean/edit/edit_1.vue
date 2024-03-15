<template>
    <v-dialog max-width="700">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit" variant="flat"
                :disabled='item.approval != `Returned`'></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card class="px-8 py-8">
                <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                    Edit Record</h3>
                <p>{{ item.tb_id }}</p>

                <Form class="mt-4">

                    <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                    <Field type="text" name="campus" placeholder="Type here" disabled
                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                        v-model="data[0].in_campus" :rules="validateInput" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                    <Field type="text" placeholder="Type here" name="department" disabled
                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                        v-model="data[0].in_department" :rules="validateInput" />


                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                    <Field as="select" class="select select-bordered w-full mt-2" style="border:  1px solid #d2d2d2;"
                        v-model="item.program_id" name="program" :rules="validateInput">
                        <option disabled selected>Select Program ...</option>
                        <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}
                        </option>
                    </Field>
                    <ErrorMessage name="program" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                    <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full" name="exam_date"
                        style="border:  1px solid #d2d2d2;" v-model="item.exam_date" :rules="validateInput" />
                    <ErrorMessage name="exam_date" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                        Takers</p>
                    <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full" defa
                        style="border:  1px solid #d2d2d2;" v-model="item.number_of_takers" name="no_takers"
                        :rules="checkNegative" />
                    <ErrorMessage name="no_takers" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                        Passers</p>
                    <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full"
                        style="border:  1px solid #d2d2d2;" v-model="item.number_of_passers" name="no_passers"
                        :rules="checkNegative" />
                    <ErrorMessage name="no_passers" class="error_message" />



                    <span class="flex items-center mt-6 gap-2">
                        <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File
                        </p>
                        <i class="tooltip" tooltip-right
                            data-tip=" Provide the supporting documentation used in reference to the information. You may also provide links to the scanned copies for easier reference">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                        </i>
                    </span>


                    <table class="w-full mt-4">
                        <thead>
                            <tr>
                                <th class="border-2 bg-gray-700 text-white font-Subheader"></th>
                                <th
                                    class="border-2 text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                                    Required Files</th>
                                <th
                                    class="border-2 text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                                    Upload Files</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                    1
                                </td>
                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                    PRC Official Results</td>
                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                    <input type="file" class="ml-5" accept=".pdf">
                                </td>
                            </tr>

                        </tbody>
                    </table>




                    <span class="w-full flex items-center justify-end gap-2 mt-5">
                        <button class="btn btn-accent  w-2/12 text-white border-0">Update</button>
                    </span>
                </Form>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>

</template>