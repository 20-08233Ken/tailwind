import {Form, Field, ErrorMessage} from 'vee-validate'
export default{
    data(){
        return{
            sampleData:[
                {
                   id:'1',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"     

                },
                {
                    id:'2',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                },
                {
                    id:'3',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'4',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'5',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'6',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'7',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'8',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                    id:'9',
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
                ,
                {
                   campus:'Alangilan Campus',
                   department:'College of Engineering',
                   program:"Bachelor of Science in Civil Engineering",
                   year_io:'2012',
                   status:'status',
                   pov_from:'pov_from',
                   pov_to:'pov to',
                   sup_doc:'',
                   v_status:"Not validated"         

                }
            ],

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
                    title:'Exam date',
                    value:'exam_date',
                },
                {
                    title:'Number of 1st Time takers',
                    value:'fTakers',
                },
                {
                    title:'Number of 1st Time Passers',
                    value:'fPassers',
                },
                {
                    title:'Supporting Documents',
                    value:'sup_doc',
                    value:'center'
                },
                {
                    title:'Validation Status',
                    value:'v_status',
                },{
                    title:"Actions",
                    value:'actions'
                }
                
            ],
            reasonOpt:[
                {
                    reason:'Lack of Supporting Documents'
                },{
                    reason:'Inconsistent Data'
                }
            ]
        }
    },
    methods:{
        showID(id){
            console.log(id)
        }
    },

    components:{
        Form, Field, ErrorMessage
    }
    
}