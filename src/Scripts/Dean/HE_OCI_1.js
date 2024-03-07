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
            in_program:'',
            in_examDate:'',
            in_takers:'',
            in_passers:'',
            count:true,
            id:1,
            isActive:false,
            isIcon:false,
            isAdd:false,

            
             // Data base from the Account Info of Dean 
            data:[
                {
                    in_campus:"Alangilan Campus",
                    in_department:"College of Engineering"
                }
            ],

            // Options of Select Program Input
            // Based from API callback
            collegeProgram:[
                {
                    id:1312,
                    program:"Bachelor of Science in Computer Engineer",
                },{
                    program:"Bachelor of Science in Civil Engineer",
                },{
                    program:"Bachelor of Science in Chemical Engineer",
                },{
                    program:"Bachelor of Science in Electrical Engineer",
                }
            ],

        }
    },
    methods:{
        // Sample Data Entry that will display in table
        addData(){
 
                this.sampleData.push(
                {
                    tb_id:this.id,
                    tb_campus:this.data[0].in_campus,
                    tb_department:this.data[0].in_department,
                    tb_program:this.in_program,
                    tb_exam_date:this.in_examDate,
                    tb_takers:this.in_takers,
                    tb_passers:this.in_passers
                }
                )

                console.log(this.sampleData[0])

                this.in_program=""
                this.in_examDate=""
                this.in_takers=""
                this.in_passers=""

                this.id++;

                this.isAdd = true;
                setTimeout(() =>{
                    this.isAdd = false;
                }, 2000)
        },

        // Validate if the input field is empty
        validateInput(value){
            if (!value) {
                 return 'This field is required';
             }

             return true
             
           
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
        }
    }
}