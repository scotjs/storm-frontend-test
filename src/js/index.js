import Vue from 'vue';
import router from './routes';
import { Top } from './components/top';
import '../css/index.scss';

var App = new Vue({
	router: router,
	el: '#app'
});

export default App;