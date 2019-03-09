import Vue from 'vue';

const ListItem = 
Vue.component('listitem', {
    name: 'ListItem',
    props: ['task'],
    template: '<li><input type="checkbox"/>{{task.title}}</li>',
    data: function(){
        return {
            
        }        
    }
});

export default ListItem;