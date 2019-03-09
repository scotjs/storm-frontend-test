import Vue from 'vue';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

import { ListItem } from './components/listItem';
import { Top } from './components/top';
import '../css/index.scss';

var App = new Vue({
	el: '#app',
	data: {
		tasks: null
	},
	components: {
		'ListItem' : ListItem
	},
	mounted () {
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
});
export default App;

// component for list?
// split css imports per component
// move axios call to separate file