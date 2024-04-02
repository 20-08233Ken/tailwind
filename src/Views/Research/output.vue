<script src="../../Scripts/Research/output.js">

</script>

<template>

    <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">

        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Percentage of first-time licensure exam takers that pass the
                licensure exams
            </h1>

            <p class="w-full text-sm text-gray-400">
                Higher Education Program: Outcome Indicator 1
            </p>
            <p class="w-full text-sm text-gray-400">College of Engineering</p>
        </span>

        <span class="flex w-3/12 items-center justify-end gap-3">
            <!-- <notification /> -->
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(1)"
                :class="{ isBtnActive: isDataActive === 1 }">
                <v-icon>mdi-table</v-icon>Table
            </button>
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(2)"
                :class="{ isBtnActive: isDataActive === 2 }">
                <v-icon>mdi-form-select</v-icon> Form
            </button>
        </span>
    </div>

    <div class="w-full flex flex-col " v-if="isDataActive === 1">
        <v-data-table :headers="headers" :items="hepData" class="elevation-1 " items-per-page="10"
            loading-text="Loading... Please wait" :loading="myLoading" :search="search"
            style="width: 100%; overflow-x: scroll">

        </v-data-table>
    </div>


    <div class="w-full flex flex-col px-8 py-2 shadow-xl" v-if="isDataActive === 2">

        <Form class="mt-6">

            <!-- Researchers Profile -->
            <h6 class="font-Subheader text-red-darken-3">Researchers Profile</h6>
            <div class="w-full flex gap-8 mt-2">
                <span class="w-2/4 flex-col ">
                    <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
                    <Field type="text" name="campus" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>

                <span class="w-2/4 flex-col">
                    <p class="text-0.9 font-Subheader text-gray-500">SDG</p>
                    <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>
            </div>

            <div class="w-full flex flex-col  mt-4" v-for="(field, index) in researchers" :key="index">

                <span class="w-full flex  item-center ">

                    <p class="text-0.9 font-Subheader text-gray-500">Name of Researcher</p>
                    <button class="  btn-sm font-Subheader text-0.8 text-gray-500" type="button"
                    @click="deleteField(index)" :class="{hideDel:count === 1, showDel:count != 1}"><v-icon color="red-darken-4" >mdi-delete</v-icon>
                    </button>
                </span>
                <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                    style="border: 1px solid #d2d2d2" :rules="validateInput" v-model="researchers[index]" />
            </div>


            <div class="w-full flex">
                <button class="btn btn-ghost btn-sm mt-2 font-Subheader text-0.8 text-gray-500" type="button"
                    @click="addField()"><v-icon color="teal-darken-3">mdi-plus-circle-outline</v-icon>Add
                    Researcher</button>

            </div>



            <!-- Details of Research Outputs -->
            <h6 class="font-Subheader text-red-darken-3 mt-8">Details of Research Outputs </h6>
            <p class="text-0.9 font-Subheader text-gray-500 mt-2">Research Title</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Name of Faculty Researcher/Author</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />

            <h6 class="font-Subheader text-sm text-teal-darken-3 mt-8">Duration of Research </h6>

            <div class="w-full flex gap-8 mt-2">
                <span class="w-2/4 flex-col ">
                    <p class="text-0.9 font-Subheader text-gray-500">Date Started</p>
                    <Field type="text" name="campus" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>

                <span class="w-2/4 flex-col">
                    <p class="text-0.9 font-Subheader text-gray-500">Date of Completion</p>
                    <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>
            </div>

            <!-- Details of Publication -->
            <h6 class="font-Subheader text-red-darken-3 mt-8">Details of Publication </h6>

            <p class="text-0.9 font-Subheader text-gray-500 mt-2">Published Title</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />


            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Date of Publication</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />


            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Title of Journal / Publication</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />

            <div class="w-full flex gap-8 mt-4">
                <span class="w-2/4 flex-col ">
                    <p class="text-0.9 font-Subheader text-gray-500">Volume & Issue</p>
                    <Field type="text" name="campus" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>

                <span class="w-2/4 flex-col">
                    <p class="text-0.9 font-Subheader text-gray-500">ISSN/ISBN</p>
                    <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                        style="border: 1px solid #d2d2d2" :rules="validateInput" />
                </span>
            </div>

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Index</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />

            <!-- Details of Utilized Output -->
            <h6 class="font-Subheader text-red-darken-3 mt-8">Details of Utilized Output </h6>

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Product Name / Methods / Process/ Technology</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Patent Number / Product Description</p>
            <textarea class="textarea border-2 w-full mt-2" placeholder="Bio"
                style="border: 1px solid rgb(209 213 219);"></textarea>

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Benefiting Industry</p>
            <Field type="text" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                style="border: 1px solid #d2d2d2" :rules="validateInput" />


            <span class="w-full flex justify-end">

                <button class="btn bg-teal-darken-3 color white font-Subheader w-32 mt-8">Submit</button>

            </span>
        </Form>
    </div>
</template>


<style scoped>
.isDataNotActive {
    background-color: #94080D;
    color: white;
}


.isDataActive {
    background-color: #94080D;
    color: white;
}


.isBtnActive {
  background-color: #6b7280;
  color: white;
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th){
    background-color: #4b5563;
  border: 1px solid #e5e7e9;
  font-size: 13px;
  color: white;
}

.hideDel{
    display: none;
}

.showDel{
    display: flex;
}
</style>