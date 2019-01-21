<template>
<div>
	<p>Home page</p>

	<form v-on:submit.prevent="submit">

		URL: <input type="text" v-model="formData.url"></br>
		cssSelecotr: <input type="text" v-model="cssSelector">
		<button v-on:click="addCss()" class="btn btn-primary btn-sm">追加</button>
		</br>

		<span>cssSelecotr: {{cssSelector}}</span></br>

		</br></br><span>URL: {{formData.url}}</span>
		</br><span>cssSelectors: {{formData.cssSelectors}}</span>
		<p>で正しいですか？</p>
		<input type="submit" value="submit">

		<h2>Results</h2>
		<ul>
			<li v-for="result in results">{{result}}</li>
		</ul>

		<button v-on:click="downloadCSV">
			csvダウンロード
		</button>
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
			cssSelector: '',
			formData: {
				'url': '',
				'cssSelectors': []
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
		},
		downloadCSV() {
			var csv = '\ufeff'
			this.results.forEach(array => {
				array.forEach(el => {
					csv += el + '\n'
				})
			})
			let blob = new Blob([csv], {
				type: 'text/csv'
			})
			let link = document.createElement('a')
			link.href = window.URL.createObjectURL(blob)
			link.download = 'Result.csv'
			link.click()
		},
		addCss: function() {
			var newCss = this.cssSelector;
			this.formData.cssSelectors.push(newCss);
			this.cssSelector = '';
		}
	}

}
</script>
