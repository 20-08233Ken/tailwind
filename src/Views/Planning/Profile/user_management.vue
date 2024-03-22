<script>
import addUser from "./addUser.vue";
import manageUser from './manage.vue'
import confirmDelete from "./confirmDelete.vue";
import { Form, ErrorMessage, Field } from "vee-validate";
import Swal from 'sweetalert2'

export default {
  components: {
    addUser,
    confirmDelete,
    Form,
    ErrorMessage,
    Field,
    manageUser
  },
  data() {
    return {
      // Table Header
      headers: [
        {
          title: "Company ID",
          // key:'ikaw na bahala sir dito'
          key: "companyID",
          align: "center",
        },
        {
          title: "Company Email",
          key: "companyEmail",
          // key:'ikaw na bahala sir dito'
        },
        {
          title: "Name",
          align: "center",
          key: "fname",
          // key:'ikaw na bahala sir dito'
        },
        {
          title: "Designation",
          align: "center",
          children: [
            {
              title: "Campus",
              align: "center",
              key: "campusID",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Office",
              align: "center",
              key: "officeID",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Position",
              align: "center",
              key: "positionID",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "College",
              align: "center",
              key: "collegeID",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Action",
              align: "center",
              key: "action",
            },
          ],
        },
      ],

      // This is for table data
      allUserData: [
        {
          userID: 1,
          companyID: 1,
          companyEmail: 2,
          fname: 3,
          lname: 4,
          mname: 5,
          password: 6,
          confPassword: 6,
          campusID: 1,
          collegeID: null,
          officeID: 1,
          positionID: 1,
        },
        {
          userID: 2,
          companyID: 2,
          companyEmail: 2,
          fname: 3,
          lname: 4,
          mname: 5,
          password: 6,
          confPassword: 6,
          campusID: 1,
          collegeID: null,
          officeID: 1,
          positionID: 1,
        },
      ],

      // This is for updateData
      updatedData: [
        {
          up_companyID: null,
          up_companyEmail: null,
          up_fname: null,
          up_lname: null,
          up_mname: null,
          up_password: null,
          up_confPassword: null,
          up_designation: null,
          up_campusID: null,
          up_collegeID: null,
          up_officeID: null,
          up_positionID: null,
        },
      ],

      // This is for sample data program
      sampleProgram: [
        {
          id: 1,
          program: "Program 1",
        },
      ],

      // This is for sample data office
      sampleOffice: [
        {
          id: 1,
          office: "Office 1",
        },
      ],

      // This is for sample data campus
      sampleCampus: [
        {
          id: 1,
          campus: "Campus 1",
        },
      ],

      // This is for sample data college
      sampleCollege: [
        {
          id: 1,
          college: "College 1",
        },
      ],

      // This is for sample data position
      samplePosition: [
        {
          id: 1,
          position: "Position 1",
        },
        {
          id: 2,
          position: "Dean",
        },
      ],

      enableCollege: false,
      userComponent:1,
    };
  },

  methods: {
    showChange(id) {
      this.selectedUser = id;
    },

    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

    async updateData() {},

    deleteUser(userID) {
      console.log(userID);
      Swal.fire({
        title: "Success",
        text: "User deleted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    },

    changeComponent(id){
        this.userComponent = id
    }
  },
};
</script>

<template>
  <div class="w-10/12 flex flex-col px-3vw py-3vw bg-white shadow-card2">
    <h1 class="font-Header text-4xl text-Red-Rose">User Management</h1>
    <p class="w-6/12 text-0.9 text-gray-500">
      Contains a comprehensive suite of tools for seamless user account
      management, permissions configuration, and access control.
    </p>

    <span class="flex mt-4 justify-end gap-2">
      <addUser />
      
      <!-- Table  -->
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Management"
        variant="flat"
        class='flex '
        @click='changeComponent(1)'
      >
    
      <v-icon class='mr-2'>
        mdi-table
      </v-icon>
      Table
    </v-btn>

   <!-- Management -->
    <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Management"
        variant="flat"
        class='flex '
        @click='changeComponent(2)'
      >
    
      <v-icon class='mr-2'>
        mdi-cogs
      </v-icon>
      Management
    </v-btn>



      <!-- <confirmDelete/> -->
    </span>

    <!-- <Table/> -->
    <div class='w-full' v-if='userComponent === 1'> 

        <v-data-table
      :headers="headers"
      :items="allUserData"
      class="elevation-1 mt-4"
      items-per-page="10"
      loading-text="Loading... Please wait"
      style="width: 100%; overflow-x: scroll"
        >
      <template v-slot:item.action="{ item }">
        <span class="flex items-center">
          <!-- Edit User -->
          <v-dialog max-width="900">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                text="Open Dialog"
                variant="flat"
                size="small"
              >
                <i class="text-sky-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </i>
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="">
                <v-card-text>
                  <h3
                    class="w-full font-bold font-Subheader bg-gray-700 text-white py-4 px-4 mt-1"
                  >
                    Modify User Profile
                  </h3>

                  <Form class="mt-4">
                    <p
                      class="flex items-center gap-2 text-Red-Darken font-Subheader"
                    >
                      Personal Information
                    </p>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Company ID
                    </p>
                    <Field
                      type="text"
                      name="company_id"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.companyID"
                    />
                    <ErrorMessage name="company_id" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Company Email
                    </p>
                    <Field
                      type="email"
                      name="company_email"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.companyEmail"
                    />
                    <ErrorMessage name="company_email" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      First Name
                    </p>
                    <Field
                      type="text"
                      name="fname"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.in_fname"
                    />
                    <ErrorMessage name="fname" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Last Name
                    </p>
                    <Field
                      type="text"
                      name="lname"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.lname"
                    />
                    <ErrorMessage name="lname" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Middle Name
                    </p>
                    <Field
                      type="text"
                      name="mname"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.mname"
                    />
                    <ErrorMessage name="mname" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Password
                    </p>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.password"
                    />
                    <ErrorMessage name="password" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Confirm Password
                    </p>
                    <Field
                      type="password"
                      name="confirm_password"
                      placeholder="Type here"
                      class="input mt-2 input-bordered w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.confPassword"
                    />
                    <ErrorMessage
                      name="confirm_password"
                      class="error_message"
                    />

                    <p
                      class="flex item-center gap-2 text-Red-Darken font-Subheader mt-8"
                    >
                      Designation
                    </p>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Campus
                    </p>
                    <Field
                      as="select"
                      name="campus"
                      class="w-full select select-bordered mt-2"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.campusID"
                    >
                      <option disabled selected>Select Campus ...</option>
                      <option v-for="items in sampleCampus" :value="items.id">
                        {{ items.campus }}
                      </option>
                    </Field>
                    <ErrorMessage name="campus" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Office
                    </p>
                    <Field
                      as="select"
                      name="office"
                      class="w-full select select-bordered mt-2"
                      v-model="item.officeID"
                      style="border: 1px solid #d2d2d2"
                    >
                      <option disabled selected>Select Office ...</option>
                      <option v-for="items in sampleOffice" :value="items.id">
                        {{ items.office }}
                      </option>
                    </Field>
                    <ErrorMessage name="office" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      Position
                    </p>
                    <Field
                      as="select"
                      name="postion"
                      class="select select-bordered mt-2 w-full"
                      style="border: 1px solid #d2d2d2"
                      :rules="validateData"
                      v-model="item.positionID"
                    >
                      <option disabled selected>Select Position ...</option>
                      <option v-for="items in samplePosition" :value="items.id">
                        {{ items.position }}
                      </option>
                    </Field>
                    <ErrorMessage name="postion" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                      College
                    </p>
                    <Field
                      as="select"
                      name="college"
                      class="w-full select select-bordered mt-2"
                      :disabled="item.positionID != 2"
                      v-model="item.collegeID"
                      style="border: 1px solid #d2d2d2"
                    >
                      <option disabled selected>Select College ...</option>
                      <option v-for="items in sampleCollege" :value="items.id">
                        {{ items.college }}
                      </option>
                    </Field>
                    <ErrorMessage name="college" class="error_message" />

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <span class="w-full justify-end flex gap-1">
                        <v-btn
                          text="Close"
                          class="w-2/12 mt-4 bg-grey-lighten-3"
                          @click="isActive.value = false"
                        ></v-btn>
                        <v-btn
                          text="Submit"
                          class="bg-teal-darken-3 w-2/12 mt-4"
                          @click="submitData((isActive.value = false))"
                          type="submit"
                        ></v-btn>
                      </span>
                    </v-card-actions>
                  </Form>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>

          <!-- Delete User -->
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                text="Open Dialog"
                variant="flat"
                size="small"
              >
                <i class="text-Red-Rose">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </i>
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="">
                <v-card-text>
                  <h3
                    class="w-full bg-Red-Darken text-white px-4 py-2 text-lg font-Subheader"
                  >
                    Warning!!
                  </h3>
                  <p class="py-4 ml-4">Do you want to delete user</p>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <form class="w-full px-6 pb-4 flex justify-end gap-4">
                    <v-btn
                      text="Close "
                      @click="isActive.value = false"
                    ></v-btn>

                    <v-btn
                      text="Delete "
                      @click="deleteUser(item.userID, (isActive.value = false))"
                      class="bg-red-darken-3"
                    ></v-btn>
                  </form>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </span>
      </template>
    </v-data-table>
    </div>

    <!-- <Management/> --> 
    <div class='w-ful flex-col' v-if='userComponent === 1'>
        <h1></h1>
    </div>
  </div>
</template>

<style scoped>
:deep thead {
  background-color: rgb(55 65 81);
  border: 1px solid white;
}
:deep th {
  color: white;
  border: 1px solid white;
}

table {
  border: 1px solid gainsboro;
}

th {
  padding: 1em 0;
  text-align: left;
  color: #98040d;
}

td {
  padding: 1em 0;
}

th:first-child,
td:first-child {
  padding: 0.5em;
  text-align: center;
}

/* td:first-child{
        width:5%;

    }
    td:nth-child(2){
        width:90%;
        background-color: red;

    } */
</style>
