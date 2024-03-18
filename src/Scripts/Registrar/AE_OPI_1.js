import { Form, Field, ErrorMessage } from 'vee-validate'
import notification from '../../components/Others/notification.vue';

export default {

    components: {
        Form,
        Field,
        ErrorMessage,
        notification
    },

    data() {
        return {
            // in_campus:'',
            // in_department:'',
            in_program: '',
            in_thesis: '',
            in_noThesis: '',
            count: true,
            isActive: false,
            isIcon: false,
            isAdd: false,
            id: 0,
            isDataActive: true,

            // Data base from the Account Info of Dean
            data: [
                {
                    in_campus: "Alangilan Campus",
                    in_department: "College of Engineering"
                }
            ],
            // Options of Select Program Input
            collegeProgram: [
                {
                    program: "Bachelor of Science in Computer Engineer",
                }, {
                    program: "Bachelor of Science in Civil Engineer",
                }, {
                    program: "Bachelor of Science in Chemical Engineer",
                }, {
                    program: "Bachelor of Science in Electrical Engineer",
                }
            ],
            sampleData: [],

            headers:[
                {
                    title:'Campus',
                    value:'campus',
                    class:'table_header',
                },
                {
                    title:'Department',
                    value:'department',
                },
                {
                    title:'Undergraduate Program',
                    value:'program',
                },
                {
                    title:'No. of Enrollees for 1st Semester',
                    align:'center',
                    children:[
                        {
                            title:'Thesis/Dissertation Requiring Degree',
                            value:'thesis',
                        },
                        {
                            title:'Not Thesis/Dissertation Requiring Degree',
                            value:'not_thesis',
                        }
                    ]
                },
             
                {
                    title:'Supporting Documents',
                    value:'sup_doc',
                    align:'center'
                },
                {
                    title:'Validation Status',
                    value:'v_status',
                },{
                    title:"Actions",
                    value:'actions'
                }
                
            ],

        }
    },
    methods: {
        validateData(value) {
            if (!value) {
                return 'This field is required';
            }

            return true

        },
        changeData(isActive) {
            this.isDataActive = isActive;
          },
        addData() {


            this.sampleData.push(
                {

                    tb_id: this.id,
                    tb_campus: this.data[0].in_campus,
                    tb_department: this.data[0].in_department,
                    tb_program: this.in_program,
                    tb_reqThesis: this.in_thesis,
                    tb_notReqThesis: this.in_noThesis,
                }
            )
            this.id++;

            this.data[0].in_campus = ''
            this.data[0].in_department = ''
            this.in_program = ''
            this.in_thesis = ''
            this.in_noThesis = ''


            this.isAdd = true;
            setTimeout(() => {
                this.isAdd = false;
            }, 2000)

        },
        submitData() {
            if (this.count === true) {
                this.isActive = true
                this.count = false
                this.isIcon = true
            } else {
                this.isActive = false
            }

        },
        onClose() {
            this.isActive = false
        }
    }
}
