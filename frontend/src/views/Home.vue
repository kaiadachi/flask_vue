<template>
<div>
	<p>Home page</p>

	<form v-on:submit.prevent="submit">

		URL: <input type="text" v-model="formData.url"></br>
		cssSelecotr: <input type="text" v-model="formData.cssSelector"></br>


		<p>URL: {{formData.url}}</p>
		<p>cssSelecotr: {{formData.cssSelector}}</p>
		<p>で正しいですか？</p>
		<input type="submit" value="submit">

		<h2>Results</h2>
		<ul>
		<li v-for="result in results">{{result}}</li>
		</ul>
	</form>
</div>
</template>

<script>
import axios from 'axios'

export default {
	delimiters: ['[[', ']]'],
	data() {
		return {
			results: [],
			formData: {
				'url': '',
				'cssSelector': ''
			}
		}
	},
	methods: {
		submit: function() {
			axios.post('/api', this.formData)
				.then(response => {
					this.results = response.data
					console.log(this.results)
				})
				.catch(error => {
					console.log(error);
				})
		}
	}

}
</script>
