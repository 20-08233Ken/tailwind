<script>

    import { Form, Field, ErrorMessage } from 'vee-validate'
    export default{
        components:{
            Form,
            Field,
            ErrorMessage
        }
    }
</script>

<template>
    <button class="btn border-2 " onclick="my_modal_4.showModal()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    </button>
    <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg">Activities</h3>


            <div role="tablist" class="tabs tabs-lifted w-full mt-4">
                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" checked/>
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    
                    <Form>
                        <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                        <Field name="campus" type="text" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                        <ErrorMessage name="campus" class="error_message" />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-8">Office</p>
                        <Field name="office" type="text" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                        <ErrorMessage name="office" class="error_message " />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-8">Activity</p>
                        <Field name="activity" type="text" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                        <ErrorMessage name="activity" class="error_message" />

                        <p class="text-0.9 font-Subheader text-gray-500  mt-8">Description</p>
                        <Field name="desc" type="text" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                        <ErrorMessage name="desc" class="error_message " />

                        <h1 class="font-Subheader text-Red-Rose mt-8">Activity Calendar</h1>

                        <span>
                            <p>Start Date</p>
                            <Field name="start_date" type="date" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                            
                            <Field name="desc" type="date" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
 
                            <p>Due Date</p>
                            <Field name="desc" type="date" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
                            
                            <Field name="desc" type="date" placeholder="Type here" 
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"/>
 
                        </span>
                        
                    </Form>

                </div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2"  />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
    
            </div>


          
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>