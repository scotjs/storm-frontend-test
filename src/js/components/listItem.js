import Vue from 'vue';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

const ListItem = 
Vue.component('listitem', {
    name: 'ListItem',
    props: ['task', 'tasks'],
    template: '<li><input type="checkbox" v-model="isDone" v-on:click="markAsDone" v-bind:value="isDone" aria-label="done"/>{{task.title}}<a class="deleteLink" v-on:click="deleteTask">x</a></li>',
    data: function(){
        return {
            isDone: this.task.isDone == true,
            message: this.task == null
        }        
    },
    methods: {
        markAsDone: function(event){
            loadProgressBar();
            axios
                .patch(`http://localhost:4000/api/task/${this.task.id}`, 
                    {isDone: this.isDone == 0 ? "1" : "0"}
                )
                .then((response) => {   
                    // console.log(response);
                })
                .catch(function(e){
                    console.log(e);
                });
        },
        deleteTask: function(event){
            if (event) {
                loadProgressBar();
                axios
                .delete(`http://localhost:4000/api/task/${this.task.id}`, 
                    { task: this.task },
                )
                .then((response) => {
                    this.tasks.splice(this.tasks.indexOf(this.task), 1);
                    // console.log(response);
                });
            }
        }
    }
});

export default ListItem;