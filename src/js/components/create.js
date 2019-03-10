import Vue from 'vue';
import router from '../routes';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

const Create = 
Vue.component('create', {
    name: 'Create',
    data:  function(){
        return {
            task: null,
            "title": null,
            "importance": 0,
            valid: 0,
            errors: []
        }
    },
    template: `<div>
            <h2 role="banner">Create a new item</h2>           
            <form id="create" role="form">
                <label>Title:</label>
                <input type="text" v-model="title" aria-label="Item title"/>
                <label>Importance:</label>
                <select v-model="importance" aria-label="Importance">
                    <option value=0>High</option>
                    <option value=1>Medium</option>
                    <option value=2>Low</option>
                </select>
                <input type="submit" v-on:click="checkForm" value="Create"></input>
            </form>
            <ul class="errors">
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>`,
    methods: {
        checkForm: function(event){
            if(this.title && this.importance != undefined){
                this.valid = 1;
                this.createTask(event);
            }

            this.errors = [];
            
            if(!this.title){
                this.errors.push('Title required');
            }
            if(!this.importance){
                this.errors.push('Importance required');
            }

            event.preventDefault();
        },
        createTask: function(event){
            this.task = {
                title: this.title,
                importance: this.importance.toString()
            }
            // console.log(this.task);
            // try{
            //     axios
            //     .post('http://localhost:4000/api/task/', 
            //     {
            //         task: this.task
            //     })
            //     .catch(function(e){
            //         console.log(e);
            //     })
            //     .then((response) => {   
            //         console.log(response);
            //         if(this.valid){
            //             router.replace({ path: '/' });
            //         }    
            //     });   
            // }catch(e){
            //     console.log(e);
            // }  
            
            if(this.valid){
                router.replace({ path: '/' });
            }  
        }
    },
    mounted: function(){
        this.createTask();
    }
});

export default Create;