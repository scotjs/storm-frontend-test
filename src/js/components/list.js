import Vue from 'vue';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import ListItem from './listItem';

const List = 
Vue.component('list', {
    name: 'List',
    data:  function(){
        return {
            tasks: null
        }
    },
    components: {
        'listItem' : ListItem
    },
    template: `<ul v-if="tasks">
                    <listItem
                        v-for="task in tasks"
                        v-bind:key="task.id"
                        v-bind:task="task"
                        v-bind:tasks="tasks"
                        v-bind:class="{importance0: task.importance == 0, importance1: task.importance == 1, importance2: task.importance == 2}"
                    ></listItem>
                </ul>
                <p v-else>No more tasks, relax!</p>`,
    methods: {
        getAllTasks: function(){
            loadProgressBar();
            axios
                .get('http://localhost:4000/api/task/')
                .then(response => (this.tasks = response.data
                .sort( function(a, b){
                    if(a.importance > b.importance){
                        return 1;
                    }
                    if(a.importance < b.importance){
                        return -1;
                    }
                    return 0;
                })
            ));
        }
    },
    mounted: function(){
        this.getAllTasks();
    }
});

export default List;