import AuthenticationModal from '../components/Others/AuthenticationModal.vue'

import {Form, Field, ErrorMessage} from 'vee-validate'
import axios from 'axios';

export default{
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            loginError:true

           

        }
    },
    components:{
        Form, Field, ErrorMessage,
        AuthenticationModal
    },  
    methods:{
        validateData(value){
            if(!value){
               return 'This field is required';
            }

            return true
            
        },

        getLoginData(){
            console.log(this.form.username);
            console.log(this.form.password);
            this.form.username=''
            this.form.password=''
            this.loginError= false

            this.addTimeout();

        },

        addTimeout(){
            setTimeout( ()=>{
                this.loginError =true
            },1500)
        },
        async submitData(){
            const {userData} = (await axios.post('',this.form)).
            then(response =>{
                console.log(response.data);

                // If Form data is equal and cookies is provided

                this.$router.push('/home');
            }).
            catch(function(error){
                if(error.response){
                    
                    console.log(error.response.data)
                    console.log(error.response.status)
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }else if(error.request){

                    console.log(error.request)
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }else{
                    console.log('Error', error.message)
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }
                console.log(error.config);
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
            })
        }
    }
}