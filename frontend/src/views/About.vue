<template>
<div>
	<p>Home page</p>

		<button v-on:click="downloadCSV">
			csvダウンロード
		</button>
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
			this.items.forEach(el => {
				el.forEach(e => {
					csv += e + '\n'
				})
				
			})
			let blob = new Blob([csv], {
				type: 'text/csv'
			})
			let link = document.createElement('a')
			link.href = window.URL.createObjectURL(blob)
			link.download = 'Result.csv'
			link.click()
		}
	}
}
</script>
