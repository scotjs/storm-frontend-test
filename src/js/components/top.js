import Vue from 'vue';

const Top = 
Vue.component('Top', {
    name: 'Top',
    template: '<header><router-link to="/" tag="h1">Todo list</router-link to="/"> <router-link to="/task/create" tag="button">+ Add item</router-link to="/"></header>'
});

export default Top;