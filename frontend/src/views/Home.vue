<template>
  <div class="content">

    <form v-on:submit.prevent="submit" class="box">
      <span class="tag">入力情報</span>
      <div class="box">
        <div class="field">
          <div class="control">
            <input type="text" v-model="formData.kw" class="input is-primary" placeholder="KW">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input type="text" v-model.number="formData.pages" class="input is-primary" placeholder="ページ数">
            <p v-show="notNumber">数値を入力してください。最大取得可能ページは3ページまでです。</p>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input type="text" v-model="cssSelector" class="input is-primary" placeholder="CSSセレクタ">
          </div>
        </div>
        <p>{{cssSelector}}</p>
        <button v-on:click.prevent="addCss()" class="button is-primary is-outlined is-small">CSSセレクタを追加</button>
      </div>

      <span class="tag">出力情報</span>
      <div class="box">
        <p>KW: <strong>{{formData.kw}}</strong></p>
        <p>ページ数: <strong>{{formData.pages}}</strong></p>
        <p>CSSセレクタ: <strong>{{formData.cssSelectors}}</strong></p>
      </div>

      <div class="has-text-centered go-crawl">
        <input v-bind:disabled="isProcessing()" type="submit" value="Go Crawl！"
               class="button is-success is-rounded is-medium">
        <p v-if="isProcessing()" class="is-text">
          実行中です..
        </p>
      </div>


      <div class="box">
        <h2>Results</h2>
        <ul>
          <li v-for="result in results">{{result}}</li>
        </ul>
      </div>

      <button v-on:click.prevent="downloadCSV" class="button is-primary is-outlined">
        <span class="icon">
          <i class="fas fa-download"></i>
        </span>
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
        'kw': '',
        'pages': null,
        'cssSelectors': []
      },
      processing: false
    }
  },
  computed: {
    notNumber() {
      const value = Number(this.formData.pages);
      if (Number.isNaN(value)) {
        return true
      }
      return value > 3;
    }
  },
  methods: {
    submit: async function () {
      this.startProcessing()
      await axios.post('/api', this.formData).then(response => {
        console.log(response)
        this.results = response.data
        this.endProcessing()
      }).catch(error => {
        console.log(error)
        this.endProcessing()
      })
    },
    downloadCSV() {
      var csv = '\ufeff'
      this.results.forEach(array => {
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
    addCss: function () {
      var newCss = this.cssSelector
      this.formData.cssSelectors.push(newCss)
      this.cssSelector = ''
    },
    startProcessing: function () {
      this.processing = true
    },
    endProcessing: function () {
      this.processing = false
    },
    isProcessing() {
      return this.processing
    },
  }
}
</script>
<style lang="scss" scoped>
.button .icon:first-child:last-child {
  margin-right: 0;
}

.go-crawl {
  margin-bottom: 1.5rem;
}
</style>
