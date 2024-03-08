import { Form, Field,ErrorMessage } from 'vee-validate';
import notification from '../../components/Others/notification.vue';
export default{
    components:{
        Form,
        Field,
        ErrorMessage,
        notification
    },
    data(){
        return{
            // in_campus:'',
            // in_department:'',
            in_program:'',
            in_fname:'',
            in_mname:'',
            in_lname:'',
            in_position:'',
            in_engagement:'',
            in_duration:'',
            isIcon:false,
            count:true,
            isActive:false,
            isAdd:false,

            // Data base from the Account Info of Dean
            data:[
                {
                    in_campus:"Alangilan Campus",
                    in_department:"College of Engineering"
                }
            ],

            // Options of Select Program Input
            collegeProgram:[
                {
                    program:"Bachelor of Science in Computer Engineer",
                },{
                    program:"Bachelor of Science in Civil Engineer",
                },{
                    program:"Bachelor of Science in Chemical Engineer",
                },{
                    program:"Bachelor of Science in Electrical Engineer",
                }
            ],

            facultyEngagement:[
                {
                    key:"A",
                    engagement:"A. Pursuing advanced research degree program (Ph.D.)"
                },
                {
                    key:"B",
                    engagement:"B. Actively pursuing research within the last (3) years"
                },
                {
                    key:"C",
                    engagement:"C. Producing technologies for commercialization or livelihood improvement"
                },
                {
                    key:"D",
                    engagement:"D. Research work resulted in an extension program"
                },
                {
                    key:"E",
                    engagement:"E. None of the above"
                },
            ],
            sampleData:[

            ]
        }
    },

    methods:{
        validateData(value){
            if(!value){
               return 'This field is required';
            }

            return true

        },
        addData(){

            this.sampleData.push({

                    tb_id:1,
                    tb_campus:this.data[0].in_campus,
                    tb_department:this.data[0].in_department,
                    tb_program:this.in_program,
                    tb_fname:this.in_fname,
                    tb_mname:this.in_mname,
                    tb_lname:this.in_lname,
                    tb_position:this.in_position,
                    tb_engagement:this.in_engagement,
                    tb_duration:this.in_duration,
            })

            this.in_fname = ""
            this.in_mname = ""
            this.in_lname = ""
            this.in_position = ""
            this.in_engagement = ""
            this.in_duration = ""

            this.isAdd = true;
                setTimeout(() =>{
                    this.isAdd = false;
                }, 2000)
        },
        submitData(){
                if(this.count === true ){
                    this.isActive = true
                    this.count = false
                    this.isIcon = true
                }else{
                    this.isActive = false
                    
                }
               
        },
        onClose(){
            this.isActive = false
        },
        async fetchProgram_Data(){
            try{
                const response = await axios.get('');
                // remove first the data from college program 
                this.collegeProgram = response.data
            }catch (error){
                // add actions here
            }
        }
    },
    mount(){
        // call here
        // this.fetchProgram_Data()
    }
}