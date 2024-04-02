import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    data() {
        return {
            isDataActive: 1,

            researchOutputs:[
                {
                    ro_id:1,
                    ro_title:'title',
                    ro_author:'author',
                    ro_status:'status',
                    ro_started:'started',
                    ro_completed:'completed'
                },
                {
                    ro_id:1,
                    ro_title:'title',
                    ro_author:'author',
                    ro_status:'status',
                    ro_started:'started',
                    ro_completed:'completed'
                },
            ],
            approvedLogs:[
                {
                    approvedBy:'Approved By ',
                    comment:"Comment"
                },
                {
                    approvedBy:'Approved By ',
                    comment:"Comment"
                },
            ],
            headers:[
                {
                    title:'Details of Research Outputs',
                    align:'center',
                    children:[
                        {
                            title:'Research Title'
                        },
                        {
                            title:'Name of Faculty Researcher / Author'
                        },
                        {
                            title:'Status of Research'
                        },
                        {
                            title:'Duration of Research',
                            align:'center',
                            children:[
                                {
                                    title:'Date Started'
                                },
                                {
                                    title:'Date of Completion'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Details of Presentation',
                    align:'center',
                    children:[
                        {
                            title:'Title of Forum'
                        },
                        {
                            title:'Venue'
                        },
                        {
                            title:'Forum Type'
                        },
                        {
                            title:'Date of Presentation'
                        }
                    ]
                },
                {
                    title:'Details of Publication',
                    align:'center',
                    children:[
                        {
                            title:'Published Title'
                        },
                        {
                            title:'Date of Publication'
                        },
                        {
                            title:'Title of Journal / Publication'
                        },
                        {
                            title:'Volume & Issue'
                        },
                        {
                            title:'ISSN / ISBN'
                        },
                        {
                            title:'Index'
                        }
                    ]
                },
                {
                    title:'Details of Utilized Output',
                    align:'center',
                    children:[
                        {
                            title:'Product Name / Methods / Process / Technology'
                        },
                        {
                            title:'Patent Number / Product Description'
                        },
                        {
                            title:'Benefitiyng Industry / Community'
                        }
                    ]
                }
            ],

            // Input
            campus:null,
            sdg:null,
            researchers:[
                ''
            ],
            count:1
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,

    },

    methods: {
        validateData(value) {
            if (!value) {
                return 'This field is required';
            }

            return true

        },
        changeData(isActive) {
            this.isDataActive = isActive

        },

        deleteData(id){
            console.log(id)
        },

        addField(){
            this.researchers.push('')
            this.count++
        },

        deleteField(index){
            if (index === 1){
                this.researchers.splice(index, 1);
                this.count--
            }
           
        }
    }
}