<template>
<div>
	<router-link to="/">トップページへ</router-link>
	<p>作者:  足立海</p>
	<p>Backend: Flask</p>
	<p>Frontend: Vue.js</p>
	<p>ソースコード: <a href="https://github.com/kaiadachi/flask_vue">Github</a></p>
	<p>自己紹介: <a href="https://kaisportfolio.work">Kaisportfolio</a></p>

</div>
</template>

<script>
import axios from 'axios'

export default {
	delimiters: ['[[', ']]'],
	data() {
		return {
			items: [['test','test1','test2',],['jk','kjk','jkjk']]
		}
	},
	methods: {
		downloadCSV() {
			var csv = '\ufeff'
			this.items.forEach(array => {
				array.forEach(el => {
					csv += el + ','
				})
				csv += '\n'
			})
			let blob = new Blob([csv], {
				type: 'text/csv'
			})
			let link = document.createElement('a')
			link.href = window.URL.createObjectURL(blob)
			link.download = 'Result.csv'
			link.click()
		},
	}
}
</script>
