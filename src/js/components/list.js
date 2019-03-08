import Vue from 'vue';
import axios from 'axios';

const List = 
Vue.component('List', {
    name: 'List',
    template: '<ul><li v-for="item in items">{{item.title}}</li></ul>',
    data() {
		return {
			items: null
		}
	},
	mounted () {
		axios
		  .get('http://localhost:4000/api/task/')
		  .then(response => (this.items = response.data))
	  }
});

export default List;

// move axios requests
// item component