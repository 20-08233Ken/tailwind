import { Form, Field, ErrorMessage } from "vee-validate";
import { userPosition } from "../../cookies";
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      sampleData: [],
      headers: [
        {
          title: "Campus",
          value: "campus",
          class: "table_header",
        },
        {
          title: "Department",
          value: "department",
        },
        {
          title: "Undergraduate Program",
          value: "program",
        },
        {
          title: "Exam date",
          value: "exam_date",
        },
        {
          title: "Number of 1st Time takers",
          value: "number_of_takers",
        },
        {
          title: "Number of 1st Time Passers",
          value: "number_of_passers",
        },
        {
          title: "Supporting Documents",
          value: "file",
          value: "center",
        },
        {
          title: "Validation Status",
          value: "status",
        },
        {
          title: "Actions",
          value: "actions",
        },
      ],
      reasonOpt: [
        {
          reason: "Lack of Supporting Documents",
        },
        {
          reason: "Inconsistent Data",
        },
      ],

      selectedID: "",
      remarks: "",
      reasons: "",
    };
  },

  // METHODS 
  methods: {
    async FetchData(campus, office, user) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_HEPLIST, {
            office: office,
            campus_id: campus,
            user_id: user,
          })
          .then((response) => {
            // console.log("hep List:",response.data);
            this.sampleData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
            // console.log(response);
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {}
    },

    approvedHEP(id) {
      this.selectedID = id;
    },

    rejectedHEP(id) {
      this.selectedID = id;
    },

    showID(id) {
      console.log(id);
    },


    async ApprovedRequest(){
        try{
            let users_list = this.cookies.get('userCookies');
            const response = await axios.post(import.meta.env.VITE_API_APPROVE_HEP, {
                "office": users_list.office,
                "campus_id": users_list.campus_id,
                "user_id": users_list.id,
                "id":   this.selectedID
            })
            .then(response => {

                console.log("response:",response);
            })
            .catch(error => {
                console.error('Error fetching hep data', error);
            });

        }catch (error){
            // add actions here
        }
    },

    async RejectRequest(){
        try{
            console.log("REJECTED");
            console.log(this.remarks);
            console.log(this.reasons);
            let users_list = this.cookies.get('userCookies');
            const response = await axios.post(import.meta.env.VITE_API_DISAPPROVE_HEP, {
                "office": users_list.office,
                "campus_id": users_list.campus_id,
                "user_id": users_list.id,
                "id":   this.selectedID,
                "reasons": this.reasons,
                "remarks":this.remarks
            })
            .then(response => {

                console.log("response:",response);
            })
            .catch(error => {
                console.error('Error fetching hep data', error);
            });

        }catch (error){
            // add actions here
        }
    },

  },



  components: {
    Form,
    Field,
    ErrorMessage,
  },

  mounted() {

    let userCookies = this.cookies.get('userCookies');
    // console.log(userCookies);
    let accesstoken = this.cookies.get('userAccessToken');
    // console.log(accesstoken);
    let userPosition = this.cookies.get('userPosition');
    // console.log(userPosition);
    let userCollege = this.cookies.get('userCollege');
    // console.log(userCollege);
    let userCampus = this.cookies.get('userCampus'); 
    // console.log(userCampus);
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null){
        this.$router.push('/');
    }
    this.FetchData(userCookies['campus_id'],userCookies['office'],userCookies['id']);
    // this.approved(userCookies);

    // const holdCookies = userPosition();

    const holdCookies =userPosition;

    if (holdCookies === "VCAA") {
      // call the API for VCAA
      // PASS it to sampleData[]
    } else if (holdCookies === "Planning") {
      // call the API for VCAA
      // PASS it to sampleData[]
    } else if (holdCookies === "Chancellor") {
      // call the API for VCAA
      // PASS it to sampleData[]
    } else if (holdCookies === "VPAA") {
      // call the API for VCAA
      // PASS it to sampleData[]
    } else if (holdCookies === "IPDO") {
      // call the API for VCAA
      // PASS it to sampleData[]
    }
  },
};
